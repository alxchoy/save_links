const queries = require('./queries')

function addUser(data) {
  const { name, email, passwordHash, updateAt } = data

  return new Promise((resolve, reject) => {
    queries
      .createUser([name, email, passwordHash, updateAt])
      .then(res => {
        console.log(res.rows[0])
        resolve(res)
      })
      .catch(err => reject(err.stack))
  })
}

function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    queries
      .getUserByEmail(email)
      .then(res => {
        if (res.rowCount < 1) {
          reject(new Error('User not exist'))
        }

        const user = {
          name: res.rows[0].name,
          email: res.rows[0].email,
          password: res.rows[0].password,
        }

        resolve(user)
      })
      .catch(err => reject(err.stack))
  })
}

module.exports = {
  add: addUser,
  getUser: getUserByEmail,
}
