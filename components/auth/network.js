const express = require('express');
const jwt = require('jsonwebtoken');

const controller = require('./controller');

const router = express.Router();

router.post('/create', (req, res) => {
  controller.create(req, res);
});

router.post('/login', (req, res) => {
  console.log(req.body);
  const token = jwt.sign({user: 'choy'}, 'mySecretKey', {
    expiresIn: 5000
  });

  res.status(200).send({auth: true, token});
});

module.exports = router;