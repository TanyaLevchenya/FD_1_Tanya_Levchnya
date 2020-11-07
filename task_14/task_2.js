'use strict'
// Пользователь вводит имя браузера, и программа отображает информацию о каждом браузере.

let answer = prompt();
switch(answer){
    case 'Edge':
    case 'IE': 
    case 'Opera':    {
        console.log('partial support');
    break;
    }
    case 'Chrome':
    case 'Mozila':
    case 'Safari': {
        console.log('support');
        break;
    }
    default: {
        console.log('not support');
    }
}

    