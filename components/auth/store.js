const queries = require('./queries');

function addUser(data) {
  const { name, email, passwordHash } = data;

  return new Promise((resolve, reject) => {
    queries.createUser([name, email, passwordHash])
      .then(res => resolve(res))
      .catch(err => reject(err));
  })
}

function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    queries.getUserByEmail(email)
      .then(res => {
        const user = {
          name: res.rows[0].name,
          email: res.rows[0].email,
          password: res.rows[0].password,
        };

        resolve(user);
      })
      .catch(err => {
        reject(err);
      });
  })
}

module.exports = {
  add: addUser,
  getUser: getUserByEmail
};