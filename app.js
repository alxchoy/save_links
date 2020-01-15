const express = require('express')

const auth = require('./components/auth/network')

const app = express()
app.use(express.json())
app.use('/auth', auth)

module.exports = app
