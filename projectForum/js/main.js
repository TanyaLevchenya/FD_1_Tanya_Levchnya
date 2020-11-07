// Создаем переменную, в которую положем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положем меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
    // отслеживаем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle('visible');
})