// Serviço de Instrutor
const instrutorModel = require('../models/instrutorModel');

module.exports = {
    async cadastrarInstrutor(dados) {
        if (!dados.nome || !dados.email || !dados.senha) {
            throw new Error('Todos os campos são obrigatórios: nome, email, senha.');
        }
        return instrutorModel.adicionarInstrutor(dados);
    },
    async listarInstrutores() {
        return instrutorModel.listarInstrutores();
    },
    async alterarInstrutor(id, dados) {
        return instrutorModel.alterarInstrutor(id, dados);
    },
    async excluirInstrutor(id) {
        return instrutorModel.excluirInstrutor(id);
    }
};