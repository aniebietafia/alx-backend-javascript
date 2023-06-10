const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', function (input) {
  rl.write(`Your name is: ${input} \n`);
});

rl.on('close', () => {
  rl.write('This important software is now closing\n');
});
