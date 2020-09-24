// Копировать массив.

let space = ['комета', 'галактика', 'метеорит', 'звезда', 'планета', 'спутник'];

 function arrayClone(arr) {
 return arr.slice(0);
};

let arr1 = arrayClone(space);

console.log(arr1);