<?php
// добавление функции. d - debug. $arr - добавление переменной (название произвольное)
function d($arr) {
    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}

function vd($arr) {
    echo '<pre>';
    var_dump($arr);
    echo '</pre>';
}

function parse_date($date) {
    // разбивает строчку на элементы массива и записывает в строку
    $date_array = explode('-', $date);
    $mounths = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];
    $date_array[1];
    $mounth = $mounths[$date_array[1] - 1]; //минус один для отображения месяца

    $date_result = $date_array[2] . ' ' . $mounth . ' ' . $date_array[0] . ' года';

    return $date_result;
}
// создать функцию, которая выдает последнюю строчку из БД - ДЗ
?>