import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import rateLimit from "express-rate-limit";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Cabeçalhos permitidos
  })
);
app.use(express.json());

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

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Rota principal
app.post("/api/chat", limiter, async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem ausente" });

  try {
    // Cria a thread
    const thread = await openai.beta.threads.create();
    if (!thread?.id) throw new Error("Erro ao criar thread");

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

    // Executa o assistant com a thread criada
    if (!run || !run.id) {
      return res
        .status(500)
        .json({ error: "Erro ao criar o run do Assistant." });
    }

    console.log("➡️ run.id:", run.id);

    // Espera a conclusão do run
    let completedRun;

    while (true) {
      console.log("⏳ Aguardando finalização do run...");
      console.log("➡️ thread.id:", thread.id);
      console.log("➡️ run.id:", run.id);

      try {
        completedRun = await openai.beta.threads.runs.retrieve(run.id, {
          thread_id: thread.id,
        });
      } catch (err) {
        console.error("❌ Erro na chamada retrieve:", err);
        return res.status(500).json({ error: "Erro ao recuperar o run." });
      }

      if (completedRun.status === "completed") break;
      if (completedRun.status === "failed") {
        console.error("Assistant run failed:", completedRun); // Log the failed run object
        return res.status(500).json({ error: "O assistente falhou." });
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Recupera a resposta final
    const messages = await openai.beta.threads.messages.list(thread.id);
    const assistantMessage = messages.data.find((m) => m.role === "assistant");
    const reply =
      assistantMessage?.content?.[0]?.text?.value ||
      "Sem resposta do assistant.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("❌ ERRO COM ASSISTANT");
    console.error("Mensagem:", error.message);
    console.error("Stack:", error.stack);
    return res
      .status(500)
      .json({ error: error.message || "Erro desconhecido." });
  }
});

// Inicia servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
