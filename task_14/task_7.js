// Программа, которая проверят, является ли массив зеркальным

let arr = prompt();
let flag = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - i - 1]){
        flag = false;
    }
}

if (flag){
    console.log('Word is mirred');
}
else{
    console.log('Word is not mirred');
}