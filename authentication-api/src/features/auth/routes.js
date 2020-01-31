const controllers = require('./controllers')

module.exports = router => {
  router.post('/v1/api/auth', controllers.auth) //quando acessar a rota execute a função auth dentro dos controllers
};