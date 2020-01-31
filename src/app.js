const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const routerApi = require('./api/network/routes')

const app = express()
const API_VERSION = 'api/v1'

app.use(helmet())
app.use(morgan('combined'))
app.use(express.json())

app.use(`/${API_VERSION}`, routerApi)

module.exports = app
