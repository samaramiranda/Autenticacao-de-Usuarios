const Koa = require('koa'); //importando o koa
const Router = require('koa-router'); //para utilizar rotas
const applyRoutes = require('./routes'); //importando a função das rotas
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa() //instanciando um novo servidor
const router = new Router() //criando o roteador

module.exports = ( ) => {
  console.log( '[Koa] Creating a new server')

  applyRoutes(router); //essa função aplica todas as rotas da aplicação

  app.use(cors()).use(bodyParser()).use(router.routes()).use(router.allowedMethods()); //para o app usar as rotas e o body dos usuarios para validar

  app.listen(8080); //ouvindo a porta
}