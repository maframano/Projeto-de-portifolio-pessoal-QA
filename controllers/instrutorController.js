// Controlador de Instrutor
const instrutorService = require('../services/instrutorService');

module.exports = {
    async cadastrarInstrutor(req, res) {
        try {
            const resultado = await instrutorService.cadastrarInstrutor(req.body);
            res.status(201).json(resultado);
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },
    async listarInstrutores(req, res) {
        try {
            const instrutores = await instrutorService.listarInstrutores();
            res.status(200).json(instrutores);
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao listar instrutores.' });
        }
    },
    async alterarInstrutor(req, res) {
        try {
            const instrutor = await instrutorService.alterarInstrutor(req.params.id, req.body);
            res.status(200).json(instrutor);
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },
    async excluirInstrutor(req, res) {
        try {
            await instrutorService.excluirInstrutor(req.params.id);
            res.status(200).json({ mensagem: 'Instrutor excluído com sucesso!' });
        } catch (erro) {
            res.status(404).json({ mensagem: erro.message });
        }
    }
};