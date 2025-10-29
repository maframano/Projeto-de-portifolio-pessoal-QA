// Modelo de dados de Aluno (em memória)
let alunos = [];
let idAtual = 1;

module.exports = {
    adicionarAluno(dados) {
        const novoAluno = { id: idAtual++, ...dados };
        alunos.push(novoAluno);
        return { mensagem: 'Aluno cadastrado com sucesso!', aluno: novoAluno };
    },
    listarAlunos() {
        return alunos;
    },
    alterarAluno(id, dados) {
        const aluno = alunos.find(a => a.id == id);
        if (!aluno) throw new Error('Aluno não encontrado.');
        Object.assign(aluno, dados);
        return aluno;
    },
    excluirAluno(id) {
        const index = alunos.findIndex(a => a.id == id);
        if (index === -1) throw new Error('Aluno não encontrado.');
        alunos.splice(index, 1);
        return true;
    },
    buscarAlunoPorNome(nome) {
        return alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase());
    }
};