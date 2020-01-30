const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { userStore } = require('../user')
const response = require('../../network/response')

function signInUser(req, res) {
  const { email, password } = req.body

  if (!email || !password) {
    response.error(res, 'Invalid request', 400)
    return
  }

  userStore
    .getUser(email)
    .then(data => {
      if (!bcrypt.compareSync(password, data.password)) {
        response.error(res, 'Invalid data', 404)
        return
      }

      const token = jwt.sign(
        { user: data.name, email: data.email },
        process.env.SECRET_KEY,
        { expiresIn: 3000 }
      )

      response.success(
        res,
        {
          name: data.name,
          email: data.email,
          access_token: token,
        },
        'Login success'
      )
    })
    .catch(err => response.error(res, err))
}

function signUpUser(req, res) {
  const { name, email, password, confirmPassword } = req.body

  if (!name || !email || password !== confirmPassword) {
    response.error(res, 'Invalid request', 400)
    return
  }

  const user = {
    name,
    email,
    passwordHash: bcrypt.hashSync(password, 8),
    createdAt: new Date(),
  }

  userStore
    .add(user)
    .then(data => response.success(res, 'Created user', data))
    .catch(err => response.error(res, err))
}

module.exports = {
  signIn: signInUser,
  signUp: signUpUser,
}
