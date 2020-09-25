'use strict'
// Составьте программу, которая будет считать сумму введенных чисел. 

let sumArr = [ 1, 9 , 3 , 15 , 5 , 22 , 7, 8 ,5];
let reducer = (rev, curr) => rev + curr;

console.log(sumArr.reduce(reducer));

