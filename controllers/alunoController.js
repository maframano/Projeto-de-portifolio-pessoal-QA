// Controlador de Aluno
const alunoService = require('../services/alunoService');

module.exports = {
    async cadastrarAluno(req, res) {
        try {
            const resultado = await alunoService.cadastrarAluno(req.body);
            res.status(201).json(resultado);
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },
    async listarAlunos(req, res) {
        try {
            const alunos = await alunoService.listarAlunos();
            res.status(200).json(alunos);
        } catch (erro) {
            res.status(500).json({ mensagem: 'Erro ao listar alunos.' });
        }
    },
    async alterarAluno(req, res) {
        try {
            const aluno = await alunoService.alterarAluno(req.params.id, req.body);
            res.status(200).json(aluno);
        } catch (erro) {
            res.status(400).json({ mensagem: erro.message });
        }
    },
    async excluirAluno(req, res) {
        try {
            await alunoService.excluirAluno(req.params.id);
            res.status(200).json({ mensagem: 'Aluno excluído com sucesso!' });
        } catch (erro) {
            res.status(404).json({ mensagem: erro.message });
        }
    },
    async consultarTreino(req, res) {
        try {
            const treino = await alunoService.consultarTreino(req.params.nome);
            res.status(200).json(treino);
        } catch (erro) {
            res.status(404).json({ mensagem: erro.message });
        }
    }
};