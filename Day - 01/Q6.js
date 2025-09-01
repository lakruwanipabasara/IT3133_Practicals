//6) create a function to print elements from multi dimensional array

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let i = 0;
while (i < matrix.length) {
  let j = 0;
  while (j < matrix[i].length) {
    console.log(matrix[i][j]);
    j++;
  }
  i++;
}
