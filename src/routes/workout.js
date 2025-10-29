const express = require('express');
const router = express.Router();

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function gerarMensagemTreino(idade, imc) {
  if (idade >= 18 && idade <= 44 && imc < 35) {
    return '4 séries de 20 repetições com carga pesada';
  }
  if (idade >= 45 && idade <= 59 && imc < 35) {
    return '3 séries de 12 repetições com carga leve';
  }
  if (idade >= 45 && idade <= 59 && imc >= 35) {
    return '4 séries de 15 repetições com carga pesada';
  }
  if (idade >= 60 && imc >= 35) {
    return '3 séries de 12 repetições com carga leve';
  }
  return 'Parâmetros fora das regras estabelecidas.';
}


const authMiddleware = require('../middlewares/auth');
const { users } = require('../db/memoryDb');

router.post('/', authMiddleware, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }
  // Busca o usuário cadastrado pelo email
  const user = users.find(u => u.email === req.user.email);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
  }
  const imc = calcularIMC(user.weight, user.height);
  const mensagem = gerarMensagemTreino(user.age, imc);
  res.status(200).json({ imc, mensagem });
});

module.exports = router;
