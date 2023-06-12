const http = require('http');

const PORT = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader = ('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(PORT);

module.exports = app;
