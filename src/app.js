
const express = require('express');
const cors = require('cors');
const { setupSwagger } = require('./utils/swagger');

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const workoutRoutes = require('./routes/workout');
app.use('/workout', workoutRoutes);

app.get('/', (req, res) => {
  res.send('API de Treinos de Musculação está rodando!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
