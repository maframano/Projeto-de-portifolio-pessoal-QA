// Middleware de autenticação JWT
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido.' });
    }
    try {
        const decoded = jwt.verify(token, 'segredoJWT');
        req.usuario = decoded;
        next();
    } catch (erro) {
        res.status(401).json({ mensagem: 'Token inválido.' });
    }
};