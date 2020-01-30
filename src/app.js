const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')

const routerApi = require('./api/network/routes')

const app = express()
const API_VERSION = 'api/v1'

app.use(helmet())
app.use(express.json())
app.use(morgan('combined'))
app.use(`/${API_VERSION}`, routerApi)

module.exports = app
