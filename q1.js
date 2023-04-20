const readline = require('readline');
const { Worker } = require('worker_threads');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Type a number: ', (answer) => {
    number = parseInt(answer);

    if(number) {
      
      for (let i = 0; i < number; i++) {
        const newThread = new Worker('./threads/thread-q1.js')
        }
      }

    rl.close();
});




  