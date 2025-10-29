# Projeto-de-portifolio-pessoal-QA
Projeto de portifolio pessoal que tem por objetivo mostrar minha evolução no aprendizado de automação de testes em API e performance

# Portugues:
# Projeto de Portfólio Pessoal - API de Treinos de Musculação

## Descrição

Esta API REST foi desenvolvida para auxiliar treinadores na criação de treinos de musculação personalizados para alunos de diferentes faixas etárias e IMC. O sistema permite o registro de treinadores e alunos, autenticação via JWT, criação de treinos baseada em regras específicas e consulta dos treinos pelos alunos.

## Funcionalidades

- Registro de treinador
- Registro de aluno
- Autenticação de usuários (JWT)
- Criação de treinos personalizados conforme idade e IMC
- Consulta de treinos pelo aluno
- Documentação da API via Swagger

## Regras de Negócio

- Treinos divididos em membros superiores e inferiores, com três exercícios para cada grupo.
- Séries e cargas variam conforme idade e IMC do aluno:
  - **18 a 44 anos, IMC < 35:** 4 séries de 20 repetições, carga pesada
  - **45 a 59 anos, IMC < 35:** 3 séries de 12 repetições, carga leve
  - **45 a 59 anos, IMC ≥ 35:** 4 séries de 15 repetições, carga pesada
  - **≥ 60 anos, IMC ≥ 35:** 3 séries de 12 repetições, carga leve
- IMC calculado por: `peso / (altura * altura)`

## Estrutura do Projeto

- `src/controllers`: Lógica dos endpoints
- `src/routes`: Rotas da API
- `src/services`: Regras de negócio
- `src/models`: Modelos de dados
- `src/middleware`: Middlewares de autenticação e erros
- `src/db`: Banco de dados em memória
- `resources/swagger.yaml`: Documentação Swagger

## Instalação

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie a API:
   ```
   npm start
   ```
4. Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Autenticação

- Professores: acesso total (registro, criação de treinos, consulta)
- Alunos: apenas consulta de treinos
- Autenticação via token JWT (middleware)

## Banco de Dados

- Utiliza banco de dados em memória para armazenar usuários e treinos.

## Documentação

- A documentação completa dos endpoints e modelos de resposta está disponível em `resources/swagger.yaml` e pode ser acessada via endpoint `/api-docs`.

## Licença

Este projeto é apenas para fins educacionais.

# English
# Weight Training API

## Overview
This project is a REST API designed for managing weight training sessions for students of various age groups and Body Mass Index (BMI). It includes features for trainer and student registration, workout creation, and workout consultation.

## Features
- **Trainer Registration**: Allows trainers to register and manage workouts.
- **Student Registration**: Enables students to register and consult their workouts.
- **Workout Creation**: Trainers can create customized workout plans based on student age and BMI.
- **Workout Consultation**: Students can view their assigned workouts and track their progress.

## Project Structure
```
weight-training-api
├── src
│   ├── controllers          # Contains controller classes for handling requests
│   ├── routes               # Defines API routes
│   ├── services             # Contains business logic for the application
│   ├── models               # Defines data models
│   ├── middleware           # Contains middleware functions
│   ├── db                   # Simulates an in-memory database
│   ├── app.ts               # Entry point of the application
│   └── types                # TypeScript types and interfaces
├── resources
│   └── swagger.yaml         # API documentation using Swagger
├── package.json             # NPM configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd weight-training-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   npm start
   ```
2. The API will be running at `http://localhost:3000/`.

## API Documentation
The API endpoints are documented using Swagger. You can access the documentation at `http://localhost:3000/swagger`.
ou `http://localhost:3000/api-docs/`
## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.