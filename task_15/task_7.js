'use strict'
let result;

let numbers = prompt();
let sum = 1;
console.log(numbers);

let i = 0;
while (i < numbers.length) {
    sum *= +numbers[i];
    console.log(sum)
    i++;
}

let a = +prompt();
let sum = 1;
while (a > 0) {
    sum *= a % 10;
    a = (a - a % 10) / 10;
}
console.log(sum);

document.getElementsByClassName('result')[0].innerHTML = sum;