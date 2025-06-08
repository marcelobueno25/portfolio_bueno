import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Você é um assistente especializado em responder apenas perguntas sobre Marcelo Bueno.
Se alguém perguntar algo fora desse tema, responda educadamente: 
"Desculpe, posso responder apenas perguntas sobre Marcelo Bueno.".
Marcelo é um desenvolvedor Front-end de São Paulo, especializado em React, Vite e Tailwind.
Também é fundador da EntreElos, e adora criar experiências românticas digitais.
`;

app.use(bodyParser.json());

app.post("/api/chat", async (req, res) => {
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
