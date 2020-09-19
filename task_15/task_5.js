'use strict'

let query = prompt('Your name?');
let name = 'Hello ';

if (query.trim() == '') {
    alert('Invalid Name');
}
else {
    alert(name + query);
}

