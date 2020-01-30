const express = require('express')

const controller = require('./controller')

const router = express.Router()

router.post('/signin', controller.signIn)
router.post('/signup', controller.signUp)

module.exports = router
