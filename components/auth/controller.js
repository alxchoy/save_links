const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const store = require('./store')

function createUser(userData) {
  return new Promise((resolve, reject) => {
    if (
      !userData.name ||
      !userData.email ||
      userData.password !== userData.confirmPassword
    ) {
      reject(new Error('Invalid request'))
    }

    store
      .add({
        name: userData.name,
        email: userData.email,
        passwordHash: bcrypt.hashSync(userData.password, 8),
        updateAt: new Date(),
      })
      .then(res => {
        console.log(res)
        resolve('Created user')
      })
      .catch(err => reject(err))
  })
}

function loginUser(userData) {
  return new Promise((resolve, reject) => {
    if (!userData.email || !userData.password) {
      reject(new Error('Invalid request'))
    }

    store
      .getUser(userData.email)
      .then(res => {
        if (!bcrypt.compareSync(userData.password, res.password)) {
          reject(new Error('Invalid data'))
        }

        const token = jwt.sign(
          { user: res.name, email: res.email },
          process.env.SECRET_KEY,
          { expiresIn: 3000 }
        )

        resolve({ auth_token: token, toke_type: 'Bearer' })
      })
      .catch(err => reject(err))
  })
}

module.exports = {
  create: createUser,
  login: loginUser,
}
