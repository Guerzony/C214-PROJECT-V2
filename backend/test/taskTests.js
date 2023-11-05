import pkg from 'supertest';
const request = pkg;
import app from '../src/server.js'; // Substitua pelo caminho correto
import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
chai.should(); // Configura should para poder ser usado

describe('Testes das rotas de tasks:', function() {
  this.timeout(5000); 
  //Teste de busca das tasks
  let id;

  it('/GET', function (done) {
    request(app)
      .get('/tasks')
      .end(function (err, response) {
        if (err) {
          console.log("Erro: " + err);
          return done(err);
        }
        response.should.have.status(200);
        done(); // Chama done para indicar que o teste está concluído.
      });
  });

  it('/POST', function (done) {
    const newTarefa = {
      "title": 'Fazer cafe',
      "description": 'Descrição da tarefa',
      "status": 'In progress'
    };
    request(app)
      .post('/tasks')
      .send(newTarefa)
      .end(function (err, response) {
        if (err) {
          console.log("Erro: " + err);
          return done(err);
        }
        id = response.body["_id"];
        response.should.have.status(201);
        done(); 
      });
  });

  it('/PUT', function (done) {
    let taskUpdate = {
      "description": "De tarde",
      "status": "Concluida",
    };
    const resposta = "Task atualizada com sucesso!";
    request(app)
      .put(`/tasks/${id}`)
      .send(taskUpdate)
      .end(function (err, response) {
        if (err) {
          console.log("Erro: " + err);
          return done(err);
        }
        response.should.have.status(200);
        expect(resposta).to.eql(response.text);
        done();
      });
  });

  it('/DELETE', function (done) {
    let taskDelete = {
      "title": "Fazer cafe",
    };
    const resposta = 'Task excluida com sucesso!';
    request(app)
      .delete(`/tasks/${id}`)
      .send(taskDelete)
      .end(function (err, response) {
        if (err) {
          console.log("Erro: " + err);
          return done(err);
        }
        response.should.have.status(200);
        expect(resposta).to.eql(response.text);
        done();
      });
  });

});