'use strict'

let query = prompt('Your name?');

if (query.trim() == '') {
    alert('Invalid Name');
}
else {
    alert(' Hello ' + name + query);
}

