const route = require('./route')
const controller = require('./controller')
const store = require('./store')

module.exports = {
  authRouter: route,
  authController: controller,
  authStore: store,
}
