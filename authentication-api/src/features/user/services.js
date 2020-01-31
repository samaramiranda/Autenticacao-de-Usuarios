const db = require('../../_db/models/index')

module.exports = {
  create: payload => db.User.create(payload)
}