import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getChatReply(message, systemPrompt) {
  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: message }
  ];

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.2
  });

  return completion.choices[0].message.content;
}
