import OpenAI from "openai";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 5,
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

    // 2. Adiciona a mensagem do usuário
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // 3. Inicia o run com o Assistant já criado
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    // 4. Aguarda até que o run termine (polling simples)
    let runStatus;
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
    console.error("Erro com Assistant:", error);
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Dados:", error.response.data);
    }
    return res.status(500).json({ error: "Erro ao usar Assistant" });
  }
}
