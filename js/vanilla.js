// document.getElementById('wrap');
// let wrap = document.getElementById('wrap');

// let form = wrap.getElementsByTagName('form');
// console.log(form);

let photos = document.querySelectorAll('.moskow-photos > div');

console.log(photos[0]);



// for(let i = 0; i < photos.length; i++) {

//     if (i % 2 == 0) {

//     photos[i].classList.add('new');
//     photos[i].style.borderRight = '2px solid red';
//     }

// };

// поиск элемента
let body = document.getElementsByTagName('body');

// функция для создания снежинок
function createFlake() {

    let newFlake = document.createElement('img');
    newFlake.setAttribute('src', snowFlakeArr[ Math.floor(Math.random() * snowFlakeArr.length)] );
    newFlake.classList.add('flake');
    
    newFlake.style.left = Math.random() * 100 + '%';

    let flakeSize = (Math.random() * 45) + 45 + 'px';
    newFlake.style.height = flakeSize;
    newFlake.style.width = flakeSize;

    body[0].appendChild(newFlake);

}

// массив снежинок
let snowFlakeArr = [
    'images/snowflake/snowflake1.svg',
    'images/snowflake/snowflake2.svg',
    'images/snowflake/snowflake3.svg',
    'images/snowflake/snowflake4.svg',
    'images/snowflake/snowflake5.svg',
    'images/snowflake/snowflake6.svg',
    'images/snowflake/snowflake7.svg',
    'images/snowflake/snowflake8.svg',
]

// установление интервала србатывания функции
let countFlake = 0;
setInterval(function(){
   
    if (countFlake < 20) {
        createFlake();
    }

    countFlake++;

}, 1800);

newFlake.style.cssText = 'color: red; background: white' // вписать несколько свойств css