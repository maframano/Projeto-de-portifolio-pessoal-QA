// Serviço de Instrutor
const instrutorModel = require('../models/instrutorModel');

module.exports = {
    async cadastrarInstrutor(dados) {
        // Validação dos campos obrigatórios
        if (!dados.nome || !dados.email || dados.senha === undefined) {
            throw new Error('Todos os campos são obrigatórios: nome, email, senha.');
        }
        // Não aceitar valores padrão 'string' como dados válidos
        if (dados.nome === 'string' || dados.email === 'string' || dados.senha === 'string') {
            throw new Error('Preencha os campos corretamente, não use "string" como valor.');
        }
        // Senha deve ser número inteiro
        if (typeof dados.senha !== 'number' || !Number.isInteger(dados.senha)) {
            throw new Error('A senha deve ser um número inteiro.');
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