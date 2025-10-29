const express = require('express');
const router = express.Router();


const { users } = require('../db/memoryDb');

// Registro de usuário
router.post('/register', (req, res) => {
  const { name, email, password, role, age, weight, height } = req.body;
  if (!name || !email || !password || !role || !age || !weight || !height) {
    return res.status(400).json({ error: 'Dados obrigatórios ausentes.' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ error: 'Usuário já cadastrado.' });
  }
  const user = { id: String(Date.now()), name, email, password, role, age, weight, height };
  users.push(user);
  res.status(201).json(user);
});

// Login de usuário
router.post('/login', (req, res) => {
  // Exemplo: retorna token fake
  res.status(200).json({ token: 'fake-jwt-token' });
});


const authMiddleware = require('../middlewares/auth');

// Perfil do usuário autenticado

router.get('/profile', authMiddleware, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Usuário não autenticado.' });
  }
  // Busca o usuário cadastrado pelo email
  const { users } = require('../db/memoryDb');
  const user = users.find(u => u.email === req.user.email);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }
  res.status(200).json({ profile: user });
});

module.exports = router;
