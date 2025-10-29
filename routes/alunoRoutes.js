// Rotas de Aluno
const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');
const autenticacaoJWT = require('../middleware/autenticacaoJWT');

router.post('/', alunoController.cadastrarAluno);
router.get('/', autenticacaoJWT, alunoController.listarAlunos);
router.put('/:id', autenticacaoJWT, alunoController.alterarAluno);
router.delete('/:id', autenticacaoJWT, alunoController.excluirAluno);
router.get('/treino/:nome', autenticacaoJWT, alunoController.consultarTreino);

module.exports = router;