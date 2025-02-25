import express from 'express';
import dotenv from 'dotenv';
import { userRoutes } from './routes/user.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Backend rodando com Node.js + TypeScript');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
