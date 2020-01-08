const queries = require('./queries');

function addUser(data) {
  const { user, email, passDigest } = data;
  return new Promise((resolve, reject) => {
    queries.createUser([user, email, passDigest])
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  })
}

module.exports = {
  add: addUser
};