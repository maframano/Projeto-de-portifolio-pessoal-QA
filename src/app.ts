import express from 'express';
import cors from 'cors';
import { setupSwagger } from './utils/swagger.js';
const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);
app.get('/', (req, res) => {
  res.send('API de Treinos de Musculação está rodando!');
});

// TODO: Adicionar rotas de autenticação, alunos, treinadores, treinos, swagger

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

export default app;
