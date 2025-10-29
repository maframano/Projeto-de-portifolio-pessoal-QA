// Rotas de Instrutor
const express = require('express');
const router = express.Router();
const instrutorController = require('../controllers/instrutorController');

router.post('/', instrutorController.cadastrarInstrutor);
router.get('/', instrutorController.listarInstrutores);
router.put('/:id', instrutorController.alterarInstrutor);
router.delete('/:id', instrutorController.excluirInstrutor);

module.exports = router;