const bcrypt = require('bcryptjs')

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

    const data = {
      name: userData.name,
      email: userData.email,
      passwordHash: bcrypt.hashSync(userData.password, 8),
      created_at: new Date(),
    }

    store
      .add(data)
      .then(() => resolve('Created user'))
      .catch(err => reject(err.detail))
  })
}

function updateUser() {}

module.exports = {
  createUser,
  updateUser,
}
