const Boom = require('boom');
const Validator = require('fastest-validator'); //para validar as informações do usuario

const services = require('./services');

const v = new Validator(); //instanciando o validator

module.exports = {
  create: async ctx => {
    const { request: {body}, response } = ctx;
    const schema = {
      firstName: { max: 60, min: 1, type: 'string' }, //numero maximo e minimo de caracteres e o tipo
      lastName: { max: 60, min: 1, type: 'string' },
      email: { max: 255, min: 1, type: 'string' },
      password: { max: 16, min: 8, type: 'string' },
    }

    const errors = v.validate(body, schema); //mandando o validador validar o body usando o schema

    if (Array.isArray(errors) && errors.length) { //se o array é um array e tem pelo ou menos um erro
      response.status = 400;
      return response.body = Boom.badRequest(null, errors); //retorna a mensagem de erro
    }

    const user = await services.create(body); //recebendo as informações do body em novo usuario
    response.body = user; //pegando o que foi cadastrado no user
  }
}