Projeto de portifólio pessoal
---------------------------------

Objetivo: 
Criar uma API Rest para criação de treinos de musculação para alunos de faixa etárias e IMC diferentes

Contexto:
A API possui as seguintes funcionalidades: registro de treinador, registro de aluno, criação de treino 
consulta do treino do aluno.
Para que eu possa usar a funcionalidade, preciso fazer login como professor
Para que o aluno possa consultar seu progresso, ele precisa fazer login como aluno.
Alunos apenas consultam treinos, treinadores acessam todas as funcionalidades do sistema.
Os treinos são criados através do calculo de IMC 
A API estará rodando em http://localhost:3000/

Regras:
Apenas execute o que eu te pedir, não me pergunte nada.
O treino  sera dividido entre agrupamentos de membros superiores e inferiores, contendo três exercícios para cada grupo
Para alunos que possuem idade entre de 18 a 44 anos e IMC abaixo de 35, as series serão de 4 series de 20 com carga pesada
Para alunos que possuem idade entre de 45 a 59 anos e IMC abaixo de 35, as series serão de 3 series de 12 com carga leve
Para alunos que possuem idade entre de 45 a 59 anos e IMC acima de 35, as series serão de 4 series de 15 com carga pesada
Para alunos que possuem idade igual ou superior a 60 anos e IMC acima de 35, as series serão de 3 series de 12 com carga leve
O IMC sera calculado pelo calculo  peso / (altura x altura)
Configure mensagens de erro para quando a API retornar falhas (fora da faixa de status code 200)
A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. 
O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. 
O Swagger também deve contemplar os status code de erro que serão implementados na API.
Adicione um endpoint para renderizar o Swagger.
Construa um arquivo README para descrever o projeto
Divida a API em camadas: routes, controllers, service e model
Armazene os dados da API em um banco de dados em memória
Utilize a biblioteca express para construir a API Rest
Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, 
e implemente as regras de autenticação seguindo as informações descritas no contexto.


