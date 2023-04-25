function generateMatrix(size) {
    const matrix = [];
  
    for (let lin = 0; lin < size; lin++) {
      matrix[lin] = [];

      for (let col = 0; col < size; col++) {
        matrix[lin][col] = Math.floor(Math.random() * 100);
      }
    }
  
    return matrix;
  }

module.exports = generateMatrix;
