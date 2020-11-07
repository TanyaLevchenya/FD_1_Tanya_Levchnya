'use strict'
// Копировать массив.

function arrCopy(arr) {
    return arr.slice();
   }
   
   let space = ['комета', 'галактика', 'метеорит', 'звезда'];
   
   let arr = arrCopy(space);
   
   console.log(arr);