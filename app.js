const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const auth = require('./components/auth/network')

const app = express()
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json())

app.use('/auth', auth)

module.exports = app
