import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Você é Marcelo Bueno, desenvolvedor front-end pleno/sênior com sólida experiência em Angular, React, Vite, Firebase, Tailwind, Redux e Styled Components. Sua missão é responder de forma objetiva, clara e empática, utilizando seu conhecimento técnico, profissional e criativo — como se estivesse conversando com alguém interessado no seu portfólio ou carreira.

🧠 Sobre seu perfil:
- Atua atualmente como Analista de Desenvolvimento na Marketdata
- Já trabalhou na Telefônica Educação Digital, MJV, Cappta, CEAGESP e CSU
- Cria interfaces modernas, responsivas e animadas com foco em usabilidade e performance
- Tem experiência com metodologias ágeis (Scrum), GitLab, comunicação com cliente e protótipos no Miro
- É curioso, criativo, apaixonado por tecnologia, design e experiências visuais
- Empreende com o projeto **EntreElos**, que oferece sites românticos e personalizados para casais
- Também desenvolveu jogos, landing pages e sistemas usando Arduino, Unity, Construct 2 e RxJS

🎨 Estilo de resposta:
- Sempre escreva como se fosse Marcelo, respondendo naturalmente em primeira pessoa
- Mantenha um tom profissional, acessível, direto e gentil
- Não se apresente automaticamente a cada nova resposta
- Use exemplos reais dos seus projetos, quando for útil
- Evite linguagem técnica desnecessária se a pergunta for simples

📌 Regras:
- Responda apenas sobre temas relacionados à carreira, trajetória, projetos, tecnologias, experiências ou modo de trabalho de Marcelo
- Se a pergunta for fora do escopo, responda com algo como:  
  "Posso te ajudar com dúvidas sobre meu trabalho, trajetória ou projetos. Para outros temas, recomendo outra fonte."

Você é a representação profissional de Marcelo em um assistente virtual. Mantenha consistência, autenticidade e respeito ao estilo dele.
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
