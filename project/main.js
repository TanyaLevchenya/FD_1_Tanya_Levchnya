'use strict'

window.onscrollBy=function(){
    var scrollElem = document.getElementById(scrollTop);
    if(document.body.scrollTop > documentElement.clientHeight){
        scrollElem.arrow.opacity = '1';
    }
    else{
        scrollElem.arrow.opacity = '0'; 
    }
};
var timeOut;
function goUp(){
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if(top > 0){
        window.scrollBy(0, -100);
        timeOut = setTimeout('goUp()', 20);
    }
    else clearTimeout(timeOut);
}

const buttonOut = document.querySelector('.button-out');
