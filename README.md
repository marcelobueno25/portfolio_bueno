# Portfolio Marcelo Bueno

Aplicação React com Vite que agora possui um pequeno backend em Node.js para integrar o ChatGPT. O código foi separado em duas pastas: `frontend` e `server`. O recrutador pode acessar a página `/chat` e conversar com um bot que responde apenas sobre o meu portfólio.

## Como rodar

1. Copie `server/.env.example` para `server/.env` e `frontend/.env.example` para `frontend/.env`.
   Preencha `OPENAI_API_KEY` com sua chave da OpenAI e, opcionalmente,
   ajuste `RATE_LIMIT_MAX` e `RATE_LIMIT_WINDOW_MS` para configurar o limite de requisições.
   Se o limite for excedido, a API responde com status `429` e a mensagem
   "Você enviou muitas mensagens em sequência. Tente novamente em 1 minuto.".
2. Instale as dependências de cada parte:
   ```bash
   npm install --prefix frontend
   npm dev --prefix server
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
   - `RATE_LIMIT_MAX` (opcional) número máximo de requisições por janela.
   - `RATE_LIMIT_WINDOW_MS` (opcional) duração da janela em milissegundos.
   - `VITE_API_URL` (opcional) caso a função esteja em outro domínio.
3. O código dentro de `server` pode ser publicado separadamente como uma serverless function ou uma aplicação Node.js para disponibilizar a rota `/api/chat`.

## License

This project is licensed under the [MIT License](LICENSE).
