import OpenAI from "openai";

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao chamar a OpenAI" });
  }
}
