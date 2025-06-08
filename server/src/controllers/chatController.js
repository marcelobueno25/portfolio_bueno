import { getChatReply } from "../services/openaiService.js";
import { systemPrompt } from "../config/prompt.js";

export async function chat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem é obrigatória." });
  }

  try {
    const reply = await getChatReply(message, systemPrompt);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    if (err.status === 429 || err.code === "insufficient_quota") {
      return res
        .status(429)
        .json({ error: "Limite de uso da API excedido. Verifique seu plano." });
    }
  }
}
