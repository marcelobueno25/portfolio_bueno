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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem ausente" });

  try {
    await new Promise((resolve, reject) => {
      limiter(req, res, (result) => {
        if (result instanceof Error) return reject(result);
        resolve(result);
      });
    });

    if (res.headersSent) return;

    // Cria a thread
    const thread = await openai.beta.threads.create();
    console.log("🧵 thread.id:", thread.id);

    // Adiciona a mensagem do usuário
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Cria o run
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    console.log("✅ run.id:", run.id);

    // Aguarda o run finalizar
    let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id); // ✅ ORDEM CERTA
    while (runStatus.status !== "completed" && runStatus.status !== "failed") {
      await new Promise((r) => setTimeout(r, 1500));
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id); // ✅ MANTÉM A ORDEM CERTA
      console.log("⏳ Status:", runStatus.status);
    }

    if (runStatus.status === "failed") {
      return res.status(500).json({ error: "Execução do Assistant falhou." });
    }

    // Recupera a resposta final
    const messages = await openai.beta.threads.messages.list(thread.id);
    const last = messages.data.find((m) => m.role === "assistant");
    const reply =
      last?.content?.[0]?.text?.value || "Sem resposta do assistant.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("❌ ERRO COM ASSISTANT");
    console.error("Mensagem:", error.message);
    console.error("Stack:", error.stack);
    return res
      .status(500)
      .json({ error: error.message || "Erro desconhecido." });
  }
}
