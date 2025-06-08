import { Configuration, OpenAIApi } from 'openai';
import 'dotenv/config';

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
);

export async function getChatReply(message, systemPrompt) {
  const messages = [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: message }
  ];

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.2
  });

  return completion.data.choices[0].message.content;
}
