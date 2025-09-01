//3)Break a whole number into digits like -> 4,5,6,2
  
let number = 4562;
let digits = [];
let temp = number;

while (temp > 0) {
  let digit = temp % 10;
  digits.unshift(digit);
  temp = Math.floor(temp / 10);
}

console.log(digits);
