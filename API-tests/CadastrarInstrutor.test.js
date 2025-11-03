//import { expect } from 'chai';
//import { request } from 'supertest';
const request = require('supertest');
const { expect } = require('chai');   
   
   describe('Instrutor', () => {
        describe('POST /instrutores', () => {
            it('Cadastrar instrutor com todos os dados', async() => {
                const resposta = await request('http://localhost:3000')
                    .post('/instrutores')
                    .set('Content-Type', 'application/json')
                    .send({
                      
                         'nome': 'Carlos Silva',
                         'email': 'carlos@academia.com',
                         'senha': 123456
                        
                     })
                console.log(resposta.status)
                console.log('Resposta da API:', resposta.body);

                expect(resposta.status).to.equal(201);
                 expect(resposta.body.mensagem).to.equal('Instrutor cadastrado com sucesso!');

                expect(resposta.body.instrutor.nome).to.be.a('string');
                expect(resposta.body.instrutor.email).to.be.a('string');
                expect(Number.isInteger(resposta.body.instrutor.senha)).to.be.true;
               
                expect(resposta.body.instrutor.nome).to.equal('Carlos Silva');
                expect(resposta.body.instrutor.email).to.equal('carlos@academia.com');
                expect(resposta.body.instrutor.senha).to.equal(123456);
            })
        })

    })
