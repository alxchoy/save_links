const http = require('http')
const dotenv = require('dotenv')

const app = require('./app')

const server = http.createServer(app)

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

server.listen(8080, () => {
  console.log('Run at port 8080')
})
