'use strict'

let a = 20;
let b = 15;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

let a = 20;
let b = 15;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);