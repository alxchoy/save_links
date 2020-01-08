const bcrypt = require('bcryptjs');

const store = require('./store');

function createUser(req, res) {
  if (!req.body.user || !req.body.email || req.body.pass !== req.body.confirmPass) {
    return res.status(400).json({
      error: true,
      message: 'Invalid request'
    });
  }

  const userData = {
    user: req.body.user,
    email: req.body.email,
    passDigest: bcrypt.hashSync(req.body.pass, 8)
  };

  store.add(userData)
    .then(res => {
      console.log(res);
      res.status(200).json({'saludos': 'qwe'});
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({'saludos': 'ert'});
    })
}

module.exports = {
  create: createUser
}