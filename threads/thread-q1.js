const { threadId } = require('worker_threads');

function greeting() {
  return `Eu sou a thread com TID ${threadId}!`;
}

console.log(greeting()); 