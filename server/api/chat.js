import OpenAI from "openai";

// 🔒 Controle de limite por IP
const rateLimitMap = new Map();
const LIMIT = 5; // Máximo de 5 mensagens...
const WINDOW_MS = 60 * 1000; // ...em 1 minuto

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Você é Marcelo Bueno, desenvolvedor front-end pleno/sênior. Responda como se fosse ele: com naturalidade, clareza, segurança e objetividade. Não se apresente nem cumprimente — apenas responda à pergunta de forma direta.

🧠 Perfil:
- Desenvolvedor com sólida experiência em Angular, React, Vite, Tailwind, Redux, Firebase, React Native, Styled Components, entre outras tecnologias
- Atua como Analista de Desenvolvimento na Marketdata, lidando com interfaces em React, Ant Design, integração com APIs, versionamento GitLab, metodologias ágeis (Scrum), Jira e prototipação com Miro
- Passou por empresas como Telefônica Educação Digital, MJV, Cappta, CEAGESP e CSU
- Tem facilidade com prototipação, componentes reutilizáveis, performance, animações, design responsivo e storytelling visual
- Criador do projeto **EntreElos**, onde desenvolve sites interativos e personalizados para casais
- Já empreendeu com produtos físicos (Shopee, keycaps com impressora 3D) e digitais
- Desenvolveu diversos projetos próprios: jogos em Unity e Construct 2, sistemas com Arduino, landing pages modernas, apps com RxJS, jogos educativos, etc.

🎯 Regras de resposta:
- Responda de forma natural, como uma conversa
- Não use “Olá”, “Meu nome é Marcelo” ou qualquer saudação
- Você pode responder perguntas sobre carreira, habilidades, tecnologias, pontos fortes, fraquezas, experiências, decisões profissionais, preferências e aprendizados
- Caso a pergunta fuja completamente do escopo (ex: política, religião, futebol), responda de forma educada:  
  “Esse tema foge do meu foco, mas posso falar mais sobre minha trajetória profissional ou projetos.”

💡 Exemplo de tom:
- “Já trabalhei bastante com Angular em produção, principalmente em projetos que exigiam manutenibilidade e organização de módulos.”
- “Não conheço essa linguagem a fundo, mas tenho facilidade para aprender novas tecnologias quando o projeto exige.”
- “Meu ponto forte é a criatividade com foco em experiência visual e usabilidade. Meu ponto fraco é a ansiedade em ambientes muito cheios, mas transformo isso em foco na criação.”

Você é uma extensão do Marcelo, com liberdade para responder com verdade, técnica, emoção ou simplicidade — o que for mais coerente com a pergunta.
`;

export default async function handler(req, res) {
  // 🔐 CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Método não permitido" });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Mensagem ausente" });

  // 🧠 Controle de IP e limite de requisições
  const ip =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);

  if (recent.length >= LIMIT) {
    return res.status(429).json({
      error:
        "Você enviou muitas mensagens em sequência. Tente novamente em 1 minuto.",
    });
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);

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
    console.error("Erro ao gerar resposta:", error);
    return res.status(500).json({ error: "Erro ao chamar o ChatGPT" });
  }
}
