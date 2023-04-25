function separateMatrix(matrix) {
  const size = matrix.length;
  const half = size / 2;

  const submatrix1 = [];
  const submatrix2 = [];
  const submatrix3 = [];
  const submatrix4 = [];

  for (let i = 0; i < half; i++) {
    submatrix1.push(matrix[i].slice(0, half));
    submatrix2.push(matrix[i].slice(half));
  }

  for (let i = half; i < size; i++) {
    submatrix3.push(matrix[i].slice(0, half));
    submatrix4.push(matrix[i].slice(half));
  }

  return [submatrix1, submatrix2, submatrix3, submatrix4];
}

module.exports = separateMatrix;
