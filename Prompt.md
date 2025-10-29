Projeto de portifólio pessoal
---------------------------------

`OBJETIVO`

Criar uma API REST em JavaScript, utilizando Express, para gerenciar uma academia de musculação.
A API deve permitir cadastrar instrutores e alunos, consultar alunos cadastrados, gerar treinos personalizados com base em peso, altura e idade, e incluir autenticação JWT.
Todo o código deve ter nomes de funções, variáveis e arquivos em português.

`CONTEXTO`

Esta aplicação deve simular o sistema de uma academia onde:

É possível cadastrar alunos e instrutores.

É possível listar, alterar e excluir tanto alunos quanto instrutores.

Há uma funcionalidade que, ao consultar um aluno cadastrado pelo nome, retorna o treino personalizado baseado em seu IMC e idade.

O IMC (Índice de Massa Corporal) é calculado pela fórmula:
IMC = peso / (altura * altura)

O treino deve conter agrupamentos de exercícios:

Membros superiores: 3 exercícios.

Membros inferiores: 3 exercícios.

As séries e cargas variam conforme idade e IMC:

Faixa Etária	IMC	Séries e Carga
18 a 44 anos	< 35	4 séries de 20 com carga pesada
45 a 59 anos	< 35	3 séries de 12 com carga leve
45 a 59 anos	≥ 35	4 séries de 15 com carga pesada
≥ 60 anos	≥ 35	3 séries de 12 com carga leve

A resposta do endpoint de treino deve conter:

Nome do aluno

IMC calculado

Faixa de treino (superiores e inferiores)

Séries e carga correspondentes

`REGRAS DE IMPLEMENTAÇÃO`

Linguagem e estrutura:

Use JavaScript (Node.js) com a biblioteca Express.

Estruture o projeto em camadas:

/routes → define as rotas

/controllers → contém a lógica de controle das rotas

/services → contém as regras de negócio

/models → contém os modelos de dados (em memória)

/middleware → autenticação com JWT

/recursos → arquivo Swagger e README

Banco de dados:

Use um banco de dados em memória (array ou objeto JS).

Autenticação:

Crie um Middleware de autenticação JWT.

O token deve ser obrigatório para acessar os endpoints (exceto login e cadastro de instrutores).

Endpoints obrigatórios:

POST /instrutores → Cadastrar instrutor

GET /instrutores → Listar instrutores

PUT /instrutores/:id → Alterar dados do instrutor

DELETE /instrutores/:id → Excluir instrutor

POST /alunos → Cadastrar aluno

GET /alunos → Listar alunos

PUT /alunos/:id → Alterar dados do aluno

DELETE /alunos/:id → Excluir aluno

GET /alunos/treino/:nome → Consultar treino do aluno pelo nome

Swagger:

Gere um arquivo Swagger em /recursos/swagger.json.

O Swagger deve:

Descrever os modelos JSON de cada resposta.

Listar os status codes de erro (400, 401, 404, 500).

Ter um endpoint /documentacao para renderizar o Swagger com swagger-ui-express.

README:

Crie um README.md em /recursos com:

Descrição do projeto

Instruções de instalação

Instruções para executar a API

Lista dos endpoints com breve explicação

Estilo e idioma:

Todos os nomes de funções, variáveis e arquivos devem estar em português.

Use comentários explicativos no código.

Retorne mensagens de resposta em português (ex: "Aluno cadastrado com sucesso!").

Boas práticas:

Use async/await para operações assíncronas.

Valide dados antes de inserir (ex: nome, idade, peso, altura).

Organize o código em módulos e mantenha clareza e consistência.

Exemplo de organização de pastas esperada
academia-api/
│
├── controllers/
│   ├── alunoController.js
│   └── instrutorController.js
│
├── services/
│   ├── alunoService.js
│   └── instrutorService.js
│
├── models/
│   ├── alunoModel.js
│   └── instrutorModel.js
│
├── routes/
│   ├── alunoRoutes.js
│   └── instrutorRoutes.js
│
├── middleware/
│   └── autenticacaoJWT.js
│
├── recursos/
│   ├── swagger.json
│   └── README.md
│
├── app.js
└── server.js
