const http = require('http');

const countStudents = require('./3-read_file_async');

const PORT = 1245;

function requestHandler(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the list of our students\n', countStudents);
  }
}

const app = http.createServer(requestHandler);

app.listen(PORT);

module.exports = app;
