const sumMatrix  = require('./utils/sum-matrix');
const measureTime = require('./utils/measure-time');
const generateMatrix  = require('./utils/generate-matrix');

function withoutThreads() {
  const matrixA = generateMatrix();
  const matrixB = generateMatrix();
  
  sumMatrix(matrixA, matrixB); 
};

const timeWithouThreads = measureTime(withoutThreads);

console.log("Time without using threads: ", timeWithouThreads);