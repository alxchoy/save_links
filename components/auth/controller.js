const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const store = require('./store');

function createUser(userData) {
  return new Promise((resolve, reject) => {
    if (!userData.name || !userData.email || userData.password !== userData.confirmPassword) {
      reject('Invalid request');
    }

    store.add({
      name: userData.name,
      email: userData.email,
      passwordHash: bcrypt.hashSync(userData.password, 8)
    })
      .then((data) => {
        console.log(data);

        resolve('User created!');
      })
      .catch(err => {
        console.log(err);
        reject(err.detail)
      });
  });
}

function loginUser(userData) {
  return new Promise((resolve, reject) => {
    if (!userData.email || !userData.pass) {
      reject('Invalid request');
    }

    store.getUser(userData.email)
      .then(res => {
        if (!bcrypt.compareSync(userData.pass, res.password)) {
          reject('Invalid data');
        }

        const token = jwt.sign(
          { user: res.name, email: res.email },
          process.env.SECRET_KEY,
          { expiresIn: 3000 }
        );

        resolve(token);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

module.exports = {
  create: createUser,
  login: loginUser
};