const { workerData } = require('worker_threads');
const sumMatrix = require('../utils/sum-matrix');

const { A, B } = workerData;

sumMatrix(A, B);
