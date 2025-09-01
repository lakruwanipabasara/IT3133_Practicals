/*2) find  3 large numbers among given array of numbers */

let arr = [12, 45, 7, 89, 23, 56, 90, 34];
let first = -Infinity;
let second = -Infinity;
let third = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];

  if (num > first) {
    third = second;
    second = first;
    first = num;
  } else if (num > second) {
    third = second;
    second = num;
  } else if (num > third) {
    third = num;
  }
}

console.log("Top 3 largest numbers:", first, second, third);
