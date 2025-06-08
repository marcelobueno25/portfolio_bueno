# Portfolio Marcelo Bueno

Aplicação React com Vite que agora possui um pequeno backend em Node.js para integrar o ChatGPT. O recrutador pode acessar a página `/chat` e conversar com um bot que responde apenas sobre o meu portfólio.

## Como rodar

1. Copie `server/.env.example` para `server/.env` e coloque sua chave da OpenAI.
   Copie `.env.example` para `.env` se quiser mudar a URL do backend (opcional).
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

## License

This project is licensed under the [MIT License](LICENSE).
