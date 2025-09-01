//4)scale a matrix
let matrix = [
  [1, 2],
  [3, 4]
];

let scaleFactor = 3;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = matrix[i][j] * scaleFactor;
  }
}

console.log(matrix);
