import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Você é um assistente especializado em responder apenas perguntas sobre Marcelo Bueno.
Se alguém perguntar algo fora desse tema, diga:
"Desculpe, posso responder apenas perguntas sobre Marcelo Bueno.".
Marcelo é um desenvolvedor Front-end de São Paulo, especializado em React, Vite e Tailwind.
É fundador da EntreElos, e cria experiências românticas digitais.
`;

export default async function handler(req, res) {
  // 🔐 CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // ou use "https://seu-portfolio.vercel.app"
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight (CORS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Apenas POST permitido
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem ausente" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Erro:", error);
    return res.status(500).json({ error: "Erro ao chamar o ChatGPT" });
  }
}
