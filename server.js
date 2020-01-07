const http = require('http');

const app = require('./app');

const server = http.createServer(app);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

server.listen(8080, () => {
  console.log('Run at port 8080')
});