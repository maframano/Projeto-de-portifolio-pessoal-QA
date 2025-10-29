// Serviço de Aluno
const alunoModel = require('../models/alunoModel');

module.exports = {
    async cadastrarAluno(dados) {
        // Validação dos dados
        if (!dados.nome || !dados.idade || !dados.peso || !dados.altura) {
            throw new Error('Todos os campos são obrigatórios: nome, idade, peso, altura.');
        }
        return alunoModel.adicionarAluno(dados);
    },
    async listarAlunos() {
        return alunoModel.listarAlunos();
    },
    async alterarAluno(id, dados) {
        return alunoModel.alterarAluno(id, dados);
    },
    async excluirAluno(id) {
        return alunoModel.excluirAluno(id);
    },
    async consultarTreino(nome) {
        const aluno = alunoModel.buscarAlunoPorNome(nome);
        if (!aluno) throw new Error('Aluno não encontrado.');
        // Cálculo do IMC
        const imc = aluno.peso / (aluno.altura * aluno.altura);
        let faixaEtaria = '';
        let treino = {
            membrosSuperiores: ['Supino', 'Rosca Direta', 'Tríceps Testa'],
            membrosInferiores: ['Agachamento', 'Leg Press', 'Cadeira Extensora'],
            series: '',
            carga: ''
        };
        if (aluno.idade >= 18 && aluno.idade <= 44 && imc < 35) {
            treino.series = '4 séries de 20';
            treino.carga = 'pesada';
        } else if (aluno.idade >= 45 && aluno.idade <= 59 && imc < 35) {
            treino.series = '3 séries de 12';
            treino.carga = 'leve';
        } else if (aluno.idade >= 45 && aluno.idade <= 59 && imc >= 35) {
            treino.series = '4 séries de 15';
            treino.carga = 'pesada';
        } else if (aluno.idade >= 60 && imc >= 35) {
            treino.series = '3 séries de 12';
            treino.carga = 'leve';
        } else {
            treino.series = '3 séries de 10';
            treino.carga = 'moderada';
        }
        return {
            nome: aluno.nome,
            imc: imc.toFixed(2),
            membrosSuperiores: treino.membrosSuperiores,
            membrosInferiores: treino.membrosInferiores,
            series: treino.series,
            carga: treino.carga
        };
    }
};