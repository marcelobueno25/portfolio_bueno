import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Mensagem é obrigatória." });
    }

    // Cria uma nova thread
    const thread = await openai.beta.threads.create();
    console.log("Thread criada com ID:", thread.id); // Log thread ID

    // Adiciona a mensagem à thread
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: userMessage,
    });

    // Executa o assistant com a thread criada
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_Vu0SfLBI0psxOlPavI9qUD83",
    });
    console.log("Run criado com ID:", run.id); // Log run ID

    if (!run || !run.id) {
      return res
        .status(500)
        .json({ error: "Erro ao criar o run do Assistant." });
    }

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

    // Busca as mensagens da thread
    const messages = await openai.beta.threads.messages.list(thread.id);

    // Extract the latest assistant message
    const assistantMessages = messages.data.filter(
      (msg) => msg.role === "assistant"
    );
    const latestAssistantMessage =
      assistantMessages[0]?.content[0]?.text?.value;

    res.status(200).json({ resposta: latestAssistantMessage });
  } catch (error) {
    console.error("Erro no ChatGPT Assistant:", error);
    res.status(500).json({ error: "Erro ao processar o assistente." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
