// Arquivo principal da aplicação
const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
const instrutorRoutes = require('./routes/instrutorRoutes');
const swaggerUi = require('swagger-ui-express');

let swaggerDocument;
try {
    swaggerDocument = require('./recursos/swagger.json');
    console.log('Swagger carregado com sucesso.');
} catch (erro) {
    console.error('Erro ao carregar swagger.json:', erro);
}

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/instrutores', instrutorRoutes);
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const instrutorModel = require('./models/instrutorModel');

// Endpoint de login para gerar token JWT (genérico)
app.post('/login', (req, res) => {
    const { usuario } = req.body;
    if (!usuario) {
        return res.status(400).json({ mensagem: 'Usuário é obrigatório.' });
    }
    // Gera token JWT válido por 1 hora
    const token = jwt.sign({ usuario }, 'segredoJWT', { expiresIn: '1h' });
    res.json({ token });
});

// Endpoint de login do instrutor
app.post('/login-instrutor', (req, res) => {
    const { nome, senha } = req.body;
    if (!nome || !senha) {
        return res.status(400).json({ mensagem: 'Nome e senha são obrigatórios.' });
    }
    // Busca instrutor pelo nome
    const instrutor = instrutorModel.listarInstrutores().find(i => i.nome === nome && i.senha === senha);
    if (!instrutor) {
        return res.status(401).json({ mensagem: 'Nome ou senha inválidos.' });
    }
    // Gera token JWT válido por 1 hora
    const token = jwt.sign({ instrutorId: instrutor.id, nome: instrutor.nome }, 'segredoJWT', { expiresIn: '1h' });
    res.json({ token });
});

const jwt = require('jsonwebtoken');

// Endpoint de login para gerar token JWT
app.post('/login', (req, res) => {
    const { usuario } = req.body;
    if (!usuario) {
        return res.status(400).json({ mensagem: 'Usuário é obrigatório.' });
    }
    // Gera token JWT válido por 1 hora
    const token = jwt.sign({ usuario }, 'segredoJWT', { expiresIn: '1h' });
    res.json({ token });
});

app.get('/', (req, res) => {
    res.send('API da Academia de Musculação - Projeto de Portfólio Pessoal');
});

app.get('/teste', (req, res) => {
    res.send('Rota de teste funcionando!');
});

module.exports = app;