'use strict'

let result = document.getElementsByClassName('result');

let numbers = prompt();
let sum = 0;
console.log(numbers);

let i = 0;
while (i < numbers.length) {
    if(i == 0) {
        sum = +numbers[i];
    } else {
        sum *= +numbers[i];
        console.log(sum)
    }
    i++;
}