function sumMatrix(matrixA, matrixB) {
  const size = matrixA.length;
  const result = [];
    
  for (let lin = 0; lin < size; lin++) {
    result[lin] = [];
      
    for (let col = 0; col < size; col++) {
      result[lin][col] = matrixA[lin][col] + matrixB[lin][col];
    }
  }
    
  return result;
} 

module.exports = sumMatrix;
