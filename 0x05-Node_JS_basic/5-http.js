const http = require('http');

const countStudents = require('./3-read_file_async');

const PORT = 1245;

async function requestHandler(req, res) {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
}

const app = http.createServer(requestHandler);

app.listen(PORT);

module.exports = app;
