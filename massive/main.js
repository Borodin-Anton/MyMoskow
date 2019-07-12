console.log( $('p') );

var par = $('p');

// выбор элемента
par.eq(0).css('background', 'red');

// цикл выборки четное / нечетное
par.each(function(index) {

    if (index % 2 == 0) {
        par.eq(index).css('background', 'red');
    }
    console.log()
});

var slides = $('.slider-flex-item');
var counter = 1;

// добавление в конец элемента используя клонирование
var firstSlide = slides.eq(0).clone()
$('.slider-flex').append(firstSlide)

// добавить переменную к slider-flex

// слайдер
$('.right').click(function(){

    // $(slides).eq(counter).css("display", "none");
    // $(slides).eq(++counter).css("display", "flex");

    // if (counter > slides.length - 1) {
    //     counter = 0;
    //     $(slides).eq(0).css("display", "flex");
    // }

    if (counter > slides.length - 1) {

        $('.slider-flex').animate({
            'left' : -100 * counter + '%'
        }, 1000, function() {
            $('.slider-flex').css('left', '0')
        })

        counter = 1;

    } else {

        $('.slider-flex').animate({
            'left' : -100 * counter + '%'
        }, 1000)

        counter++
    }
})

$('.left').click(function(){

    if (counter > slides.length - 1) {

        $('.slider-flex').animate({
            'left' : 100 * counter + '%'
        }, 1000, function() {
            $('.slider-flex').css('left', '0')
        })

        counter = 1;

    } else {

        $('.slider-flex').animate({
            'left' : 100 * counter + '%'
        }, 1000)

        counter++
    }
})

$('.elements-item')
$('.elements-item').on('click', function() {
    $(this).next().css('background', 'orange');
})