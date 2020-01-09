const express = require('express');
const jwt = require('jsonwebtoken');

const controller = require('./controller');
const response = require('../../network/response');

const router = express.Router();

router.post('/create', (req, res) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  controller.create(userData)
    .then(data => response.success(res, data))
    .catch(err => response.error(res, err));
});

router.post('/login', (req, res) => {
  const data = req.body;

  controller.login(data)
    .then(data => response.success(res, data))
    .catch(err => response.error(res, err));
});

module.exports = router;