  const authRoutes = require('../features/auth/routes') //importando as rotas da autenticação
  const userRoutes = require('../features/user/routes') //importando as rotas do usuário

  module.exports = router => {
    authRoutes(router); //aplica as rotas de autenticação
    userRoutes(router);
  }
  
  // //primeira rota
  // router.get('/', ctx => { //criando um contexto
  //   const { response } = ctx //pegando a resposta do contexto
  //   response.body = { message: 'Hello Koa2' }
  // })