// Middleware de autenticação fake para exemplo
module.exports = function (req, res, next) {
  // Simula usuário autenticado
  req.user = {
    id: '1',
    name: 'João',
    email: 'joao@email.com',
    role: 'student',
    age: 25,
    weight: 80,
    height: 1.75
  };
  next();
};
