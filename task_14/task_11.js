// Удалите одинаковые значения из массива.

let arr = ['вселенная', 'галактика', 'вселенная', 'комета', 'планета', 'галактика', 'вселенная'];
function removeIdentical(arr) {
  let obj = {}, out=[];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    obj[str] = true;
  }
     for (i in obj) {
       out.push(i);
     }
     return out;
}
result = removeIdentical(arr);

console.log(result); 