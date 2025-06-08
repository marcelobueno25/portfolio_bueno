import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import chatRoutes from './routes/chat.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', chatRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
