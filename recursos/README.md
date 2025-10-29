# Academia API

API REST para gerenciamento de uma academia de musculação.

## Descrição
Esta API permite cadastrar, listar, alterar e excluir alunos e instrutores, além de gerar treinos personalizados para alunos com base em IMC e idade. Possui autenticação JWT e documentação Swagger.

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install express jsonwebtoken swagger-ui-express
   ```
3. Execute o servidor:
   ```bash
   node server.js
   ```

## Endpoints

- `POST /instrutores` - Cadastrar instrutor
- `GET /instrutores` - Listar instrutores
- `PUT /instrutores/:id` - Alterar instrutor
- `DELETE /instrutores/:id` - Excluir instrutor
- `POST /alunos` - Cadastrar aluno
- `GET /alunos` - Listar alunos (requer JWT)
- `PUT /alunos/:id` - Alterar aluno (requer JWT)
- `DELETE /alunos/:id` - Excluir aluno (requer JWT)
- `GET /alunos/treino/:nome` - Consultar treino do aluno pelo nome (requer JWT)
- `GET /documentacao` - Documentação Swagger

## Autenticação

- Para acessar endpoints de alunos, é necessário enviar o token JWT no header `Authorization: Bearer <token>`.
o Bearer token é visto pelo comando no bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"usuario": "seu_nome"}'

O resultado sera algo assim
`{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}`

- Endpoints de instrutores não exigem autenticação.

## Documentação Swagger

Acesse `localhost:3000/documentacao` para visualizar a documentação interativa.
