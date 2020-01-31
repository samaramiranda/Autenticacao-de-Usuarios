const services = require('./services'); //pegando as informações do user no services
const Boom = require ('boom');
const Validator = require('fastest-validator');
const jwt = require ('jsonwebtoken')
const v = new Validator();

module.exports = { 
  auth: async ctx => { //objeto com chave auth
    const { request: { body }, response } = ctx; //pegando a resposta do contexto
    
    const schema = { //para validar o email e password na autenticação
      email: { max: 255, min: 1, type: 'string' },
      password: { max: 16, min: 8, type: 'string' },
    }

    const errors = v.validate(body, schema); //mandando o validador validar o body usando o schema

    if (Array.isArray(errors) && errors.length) { //se o array é um array e tem pelo ou menos um erro
      response.status = 400;
      return response.body = Boom.badRequest(null, errors); //retorna a mensagem de erro
    }
    
    const user = await services.auth(body) //pegando as informações mandadas no corpo da requisição e retornando um usuário (busca o usuario na base de dados)
    if (user) {
      response.body = {
        result:  jwt.sign({ email: user.email }, 'meusegredo') //retorna o meu token para uma variável result
      } 
    } else {
      response.status = 401;
      response.body = { result: Boom.unauthorized() } //passando um erro do boom informando que não está autorizado
    }
  }
 }