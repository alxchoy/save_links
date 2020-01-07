const http = require('http');

const app = require('./app');

const server = http.createServer(app);

server.listen(8080, () => {
  console.log('Run at port 8080')
});