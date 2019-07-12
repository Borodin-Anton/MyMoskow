$('nav a, .arrow').click(function(){

    // отображение атрибута
    console.log( $(this).attr('href') );

    // измерение высоты через консоль
    console.log( $( $(this).attr('href') ).offset().top );

    // задание переменной
    var getHref = $(this).attr('href');

    var getOffset = $(getHref).offset().top;
    
    $('html, body').animate({
        scrollTop : getOffset
    }, 1000);

})

// всплывающее меню
$('.menu-btn').click(function() {
    
    // изменение класса
    $('.header-flex-links').toggleClass('header-flex-links-active');

    // трансформация кнопки меню
    $(this).toggleClass('menu-btn-open');

    // прокрутка
    var scrollMenuBtn = $(window).scrollTop();
    $(".header-flex-links").css("top" , scrollMenuBtn);
})

// addClass добавить класс - removeClass убрать класс

// attr добавить атрубут removeAttr удалить атрибут

console.log(window);

// восстановление меню при изменении размера экрана
var  myWindow = $(window);

$(window).resize(function(){
    var winWidth = myWindow.width();
    if (winWidth > 850) {
        $('.header-flex-links').removeAttr('style')
    }
})

// валидация форм
// function name(){} - создание функции
function findError(el) {
    $(el).css('border', '2px solid red');

    var answer = $('.form-inputs').find('.error')
    if (answer.length == 0) {
        $('.form-inputs').prepend('<div class="error" style="color: red">Исправьте ошибки заполнения</div>')
    }
}

var userName = $('[name="name"]');
var userEmail = $('[name="email"]');
var userPhone = $('[name="telephone"]');

$('form').submit(function(event){

    var userNameS = $(userName).val();
    var userEmailS = $(userEmail).val();
    var userPhoneS = $(userPhone).val();

    if (userNameS == '' || userEmailS == '' || userPhoneS == '') {

        if (userNameS == '') {
            // запишется в el
            findError(userName);
        }
        if (userEmailS == '') {
            findError(userEmail);
        }
        if (userPhoneS == '') {
            findError(userPhone);
        }
    } else {
        $(userName, userEmail, userPhone).css('border', '2px solid #ffc155');
        $('form').submit();
    }

    console.log(userName, userEmail, userPhone);

    return false;
})

// валидация формы при введеннии данных
$('input').keyup(function(event){
    
    if ($(this).val() == '') {
        $(this).css('border', '2px solid red');
        
    }
    else {
        $(this).css('border', '2px solid  #ffc155');
    }

})

// массив записывается в []
var autos = ['bmw', 'audi', 'honda', 'ferrari', 'lada', 'skoda'];

// добавить элемент в массив (всегда идет в конце)
autos.push('vw');
console.log(autos.length);

// цикл текстовый
autos.forEach(function(value, index){
    console.log(index + ':' + value)
})

// цикл цифровой
var nums = [22, 22, 22, 22, 33, 66, 99, 45, 5, 108, 11, 11, 11];

// возведение в степень
var S = 0;
nums.forEach(function(value, index){
    // то же самое что S = S + value
    S += Math.pow(value, 4);
    console.log(S)
})

console.log(S);
console.log(Math.round(Math.random() * 100))

// цикл, отображение большего числа
var M = 0;
var newIndex = 0;
nums.forEach(function(value, index){
    if (M < value) {
        M = value;
        newIndex = index
    }
})

console.log(M + ':' + newIndex)

// при любом написании первая буква в имени будет заглавной, остальные строчными
var name = 'aNton';
var firstLetter = name[0].toUpperCase();
var lastText = name.slice(1).toLowerCase()

console.log( firstLetter + lastText )

// вывод массива повторяющихся (максимально) значений
var findMe = [9, 33, 33, 22, 22, 22, 22, 33, 66, 99, 45, 5, 108, 11, 11, 11, 11, 33, 44];

var counter = 0;
var result = 0;
var mass = [];

// вывод массива повторяющихся (максимально) значений
findMe.forEach(function(value) {

    findMe.forEach(function(val) {

        if (value == val) {
            counter++;
        }

    })

    if (counter > result) {
        result = counter;
        // добавить значение первым в массиве (то, что терялось)
        mass[0] = value;
    } 
    else if (counter == result) {
        mass.push(value);
    }

    counter = 0;

});

console.log(mass)

// вывод одного повторяющегося числа и количество повторений
var findMeOne = [9, 33, 33, 22, 22, 22, 22, 33, 66, 99, 45, 5, 108, 11, 11, 11, 11, 33, 44];

var counterOne = 0;
var resultOne = 0;
var X = 0;

findMeOne.forEach(function(value) {

    findMeOne.forEach(function(val) {

        if (value == val) {
            counterOne++;
        }

    })

    if (counterOne > resultOne) {
        resultOne = counterOne;
        X = value;
    }

    counterOne = 0;

});

console.log(resultOne + ':' + X)

// задание элементу слайда переменной
var slides = $('.header-img-item');

// задание переменной всего слайдера
var slideFlex = $('.header-img-flex')

// счетчик начинается с единицы, так как отображается второй слайд
var counter = 1;

// добавление в конец элемента используя клонирование
var firstSlide = slides.eq(0).clone()
$('.header-img-flex').append(firstSlide)

// добавление в начало элемента используя клонирование
var lastSlide = slides.eq(2).clone()
$('.header-img-flex').prepend(lastSlide)

// отображение не первого, а второго слайда
$('.header-img-flex').css('left', '-100%');

// слайдер
$('.right-btn').click(function(){

    counter++

    if (counter > slides.length) {
        $(slideFlex).animate({
            'left' : -100 * counter + '%'
        }, 1000, function() {
            $(slideFlex).css('left', '-100%')
        })

        counter = 1;

    } else {

        $(slideFlex).animate({
            'left' : -100 * counter + '%'
        }, 1000)
    }
    console.log(counter);
})

$('.left-btn').click(function(){

    counter--

    if (counter == 0) {
        $(slideFlex).animate({
            'left' : 300 * counter + '%'
        }, 1000, function() {
            $(slideFlex).css('left', '-300%')
        })
        counter = 3;
    } else {

        $(slideFlex).animate({
            'left' : -100 * counter + '%'
        }, 1000)
    }
    console.log(counter);
})

// первый вариант:

/*
$('[type="text"]').focusin(function(){
    $(this).parent().find("div").animate({
        'top' : '-30px',
        'left' : '-15px',
        'font-size' : '10px'
    }, 300)
})

$('[type="text"]').focusout(function(){

    if ($(this).val() == 0) {
        $(this).parent().find("div").animate({
            'top' : '-20px',
            'left' : '-10px;',
            'font-size' : '16px'
        }, 300)
    }
})
*/

// более корректный вариант:

$('[type="text"]').focusin(function(){

    if ($(this).val() == 0) {
    $(this).parent().find("div").toggleClass('form-text form-text-focusin')
    }
})

$('[type="text"]').focusout(function(){

    if ($(this).val() == 0) {
        $(this).parent().find("div").toggleClass('form-text-focusin form-text')
    }
})