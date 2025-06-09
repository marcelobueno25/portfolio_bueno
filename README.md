# Portfolio Marcelo Bueno

Aplicação React com Vite que agora possui um pequeno backend em Node.js para integrar o ChatGPT. O código foi separado em duas pastas: `frontend` e `server`. O recrutador pode acessar a página `/chat` e conversar com um bot que responde apenas sobre o meu portfólio.

## Como rodar

1. Copie `server/.env.example` para `server/.env` e preencha `OPENAI_API_KEY` com sua chave da OpenAI.
2. Instale as dependências de cada parte:
   ```bash
   npm install --prefix frontend
   npm install --prefix server
   ```
3. Em terminais separados, rode:
   ```bash
   npm run dev --prefix frontend
   npm start --prefix server
   ```

O front-end fica em `http://localhost:5173` e as requisições para o chat são enviadas para `http://localhost:3001/api/chat`.

## Deploy to Vercel

1. Rode `npm run build --prefix frontend` para gerar a pasta `dist` com o front-end pronto para produção.
2. No painel da Vercel, crie as variáveis de ambiente:
   - `OPENAI_API_KEY` com sua chave da OpenAI.
   - `VITE_API_URL` (opcional) caso a função esteja em outro domínio.
3. O código dentro de `server` pode ser publicado separadamente como uma serverless function ou uma aplicação Node.js para disponibilizar a rota `/api/chat`.

## License

This project is licensed under the [MIT License](LICENSE).
