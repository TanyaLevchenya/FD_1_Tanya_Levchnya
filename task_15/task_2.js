'use strict'

let a = 20;
let b = 15;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

let c = 20;
let d = 15;

c = c + d;
d = c - d;
c = c - d;

console.log(c);
console.log(d);