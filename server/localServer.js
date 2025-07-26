import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import bodyParser from "body-parser";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();
const port = 3001;

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

const SYSTEM_PROMPT = `
Você é um assistente especializado em responder apenas perguntas sobre Marcelo Bueno.
Se alguém perguntar algo fora desse tema, responda educadamente: 
"Desculpe, posso responder apenas perguntas sobre Marcelo Bueno.".
Marcelo é um desenvolvedor Front-end de São Paulo, especializado em React, Vite e Tailwind.
`;

app.use(bodyParser.json());

app.post("/api/chat", limiter, async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao chamar a OpenAI" });
  }
});

app.listen(port, () => {
  console.log(`Servidor local rodando em http://localhost:${port}`);
});
