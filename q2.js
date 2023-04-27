const Piscina = require('piscina');
const path = require('path'); 

const sumMatrix = require('./utils/sum-matrix');
const generateMatrix  = require('./utils/generate-matrix');
const separateMatrix  = require('./utils/separate-matrix');

const MATRIX_SIZE = 5000;

const matrixA = generateMatrix(MATRIX_SIZE);
const matrixB = generateMatrix(MATRIX_SIZE);

const submatrixA = separateMatrix(matrixA);
const submatrixB = separateMatrix(matrixB);

const startedAt = process.hrtime();

sumMatrix(matrixA, matrixB); 

const fineshedAt = process.hrtime(startedAt);

const timeWithoutThreads = (fineshedAt[0] * 1e9) + fineshedAt[1];
console.log("Time without using threads: ", timeWithoutThreads);


const pool = new Piscina();

const options = {
  filename: path.resolve(__dirname, 'thread-q2')
};

const startedWithThreadsAt = process.hrtime();

(async function() {
  await Promise.all([
    pool.run({
      A: submatrixA[0],
      B: submatrixB[0],
    }, options),
    pool.run({
      A: submatrixA[1],
      B: submatrixB[1],
    }, options),
    pool.run({
      A: submatrixA[2],
      B: submatrixB[2],
    }, options),
    pool.run({
      A: submatrixA[3],
      B: submatrixB[3],
    }, options),
    ])
})();

const fineshedWithThreadsAt = process.hrtime(startedWithThreadsAt);

const timeWithThreads = (fineshedWithThreadsAt[0] * 1e9) + fineshedWithThreadsAt[1];
console.log("Time with threads: ", timeWithThreads);
