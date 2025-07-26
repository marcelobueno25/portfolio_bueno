import OpenAI from "openai";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 5,
  keyGenerator: (req) =>
    req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || "global",
  message: {
    error:
      "Você enviou muitas mensagens em sequência. Tente novamente em 1 minuto.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // 🔐 CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem ausente" });

  // 🧠 Controle de requisições
  const runLimiter = () =>
    new Promise((resolve, reject) => {
      limiter(req, res, (result) => {
        if (result instanceof Error) return reject(result);
        return resolve(result);
      });
    });

  try {
    await runLimiter();
    if (res.headersSent) return;
  } catch {
    return;
  }

  try {
    // 1. Cria uma nova thread (ou recupere uma existente para histórico)
    const thread = await openai.beta.threads.create();
    console.log("🧵 thread.id:", thread.id); // Adicione isso

    // 2. Adiciona a mensagem do usuário
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Certifique-se de passar corretamente:
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    console.log("✅ thread.id:", thread.id);
    console.log("✅ run.id:", run.id);

    // Aqui está o conserto:
    const runStatus = await openai.beta.threads.runs.retrieve(
      thread.id,
      run.id
    );

    do {
      await new Promise((r) => setTimeout(r, 1500));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
    } while (runStatus.status !== "completed");

    // 5. Recupera a resposta final
    const messages = await openai.beta.threads.messages.list(thread.id);
    const lastMessage = messages.data.find((msg) => msg.role === "assistant");

    const reply = lastMessage?.content?.[0]?.text?.value || "Sem resposta";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("❌ ERRO COM ASSISTANT");
    console.error("Mensagem:", error.message);
    console.error("Status:", error.status);
    if (error.response) {
      console.error("Response Status:", error.response.status);
      console.error("Response Data:", error.response.data);
    }
    return res.status(500).json({ error: "Erro ao usar Assistant" });
  }
}
