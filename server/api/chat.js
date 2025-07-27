import OpenAI from "openai";
import rateLimit from "express-rate-limit";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configurar rate limiter
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

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  // Aplicar o rate limiter manualmente
  try {
    await new Promise((resolve, reject) => {
      limiter(req, res, (result) => {
        if (result instanceof Error) return reject(result);
        resolve(result);
      });
    });
  } catch (limiterError) {
    return res.status(429).json(limiterError);
  }

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem ausente" });

  try {
    const thread = await openai.beta.threads.create();
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.OPENAI_ASSISTANT_ID,
    });

    let completedRun;
    while (true) {
      completedRun = await openai.beta.threads.runs.retrieve(run.id, {
        thread_id: thread.id,
      });

      if (completedRun.status === "completed") break;
      if (completedRun.status === "failed") {
        return res.status(500).json({ error: "O assistente falhou." });
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    const messages = await openai.beta.threads.messages.list(thread.id);
    const assistantMessage = messages.data.find((m) => m.role === "assistant");
    const reply =
      assistantMessage?.content?.[0]?.text?.value ||
      "Sem resposta do assistant.";

    return res.status(200).json({ resposta: reply });
  } catch (error) {
    console.error("❌ Erro:", error);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}
