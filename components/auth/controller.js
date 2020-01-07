const bcrypt = require('bcryptjs');

const store = require('./store');

function createUser(req, res) {
  const { user, pass, confirmPass } = req.body;

  if (!user || pass !== confirmPass) {
    return res.status(400).json({
      error: true,
      message: 'Invalid request'
    });
  }

  const hashPassword = bcrypt.hashSync(pass, 8);
  console.log(hashPassword);

  res.status(200).json({'saludos': 'wenas'});
}

module.exports = {
  create: createUser
}