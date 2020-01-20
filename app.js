const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const auth = require('./components/auth/network')

const app = express()

app.use(helmet())
app.use(express.json())
app.use(morgan('combined'))
app.use('/auth', auth)

module.exports = app
