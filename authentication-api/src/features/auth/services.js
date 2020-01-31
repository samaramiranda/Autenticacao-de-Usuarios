const db= require('../../_db/models/index')

module.exports = {
  auth: payload => db.User.findOne({ where: payload }) //buscando usuario dentro do User com o payload (com o email e a senha)
}