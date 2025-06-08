# Portfolio Marcelo Bueno

Aplicação React com Vite que agora possui um pequeno backend em Node.js para integrar o ChatGPT. O recrutador pode acessar a página `/chat` e conversar com um bot que responde apenas sobre o meu portfólio.

## Como rodar

1. Copie `server/.env.example` para `server/.env` e coloque sua chave da OpenAI.
2. Instale as dependências do front-end e do backend:
   ```bash
   npm install
   npm install --prefix server
   ```
3. Inicie ambos com:
   ```bash
   npm run dev
   ```

O front-end fica em `http://localhost:5173` e as requisições para o chat são enviadas para `http://localhost:3001/api/chat`.

## Deploy to Vercel

1. Rode `npm run build` para gerar a pasta `dist` com o front-end pronto para produção.
2. No painel da Vercel, crie as variáveis de ambiente:
   - `OPENAI_API_KEY` com sua chave da OpenAI.
   - `VITE_API_URL` (opcional) caso a função esteja em outro domínio.
3. O código dentro de `server` pode ser publicado como uma serverless function para disponibilizar a rota `/api/chat`.

## License

This project is licensed under the [MIT License](LICENSE).
