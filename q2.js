const { Worker } = require('worker_threads');

const sumMatrix = require('./utils/sum-matrix');
const generateMatrix  = require('./utils/generate-matrix');
const separateMatrix  = require('./utils/separate-matrix');

const MATRIX_SIZE = 500;

const matrixA = generateMatrix(MATRIX_SIZE);
const matrixB = generateMatrix(MATRIX_SIZE);

const submatrixA = separateMatrix(matrixA);
const submatrixB = separateMatrix(matrixB);

const startedAt = process.hrtime();

sumMatrix(matrixA, matrixB); 

const fineshedAt = process.hrtime(startedAt);



const startedWithThreadsAt = process.hrtime();

submatrixA.forEach((matrix, index) => {
  const newThread = new Worker('./threads/thread-q2.js', { 
    workerData: {
      A: matrix,
      B: submatrixB[index]
    }
  })
}) 

const fineshedWithThreadsAt = process.hrtime(startedWithThreadsAt);


const timeWithoutThreads = (fineshedAt[0] * 1e9) + fineshedAt[1];
const timeWithThreads = (fineshedWithThreadsAt[0] * 1e9) + fineshedWithThreadsAt[1];

console.log("Time without using threads: ", timeWithoutThreads);
console.log("Time with threads: ", timeWithThreads);
