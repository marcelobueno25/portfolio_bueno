import { getChatReply } from '../services/openaiService.js';
import { systemPrompt } from '../config/prompt.js';

export async function chat(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem é obrigatória.' });
  }

  try {
    const reply = await getChatReply(message, systemPrompt);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao acessar a API da OpenAI.' });
  }
}
