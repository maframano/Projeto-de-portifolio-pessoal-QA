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
        // Atualiza apenas campos válidos
        for (const campo in dados) {
            const valor = dados[campo];
            if (valor !== undefined) {
                // Validação para impedir valores inválidos
                if (campo === 'nome' && (valor === 'string' || valor === '' || typeof valor !== 'string')) continue;
                if ((campo === 'idade' || campo === 'peso' || campo === 'altura') && (valor === 0 || valor === 'string' || valor === '' || isNaN(valor))) continue;
                aluno[campo] = valor;
            }
        }
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