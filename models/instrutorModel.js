// Modelo de dados de Instrutor (em memória)
let instrutores = [];
let idAtual = 1;

module.exports = {
    adicionarInstrutor(dados) {
        const novoInstrutor = { id: idAtual++, ...dados };
        instrutores.push(novoInstrutor);
        return { mensagem: 'Instrutor cadastrado com sucesso!', instrutor: novoInstrutor };
    },
    listarInstrutores() {
        return instrutores;
    },
    alterarInstrutor(id, dados) {
        const instrutor = instrutores.find(i => i.id == id);
        if (!instrutor) throw new Error('Instrutor não encontrado.');
        Object.assign(instrutor, dados);
        return instrutor;
    },
    excluirInstrutor(id) {
        const index = instrutores.findIndex(i => i.id == id);
        if (index === -1) throw new Error('Instrutor não encontrado.');
        instrutores.splice(index, 1);
        return true;
    }
};