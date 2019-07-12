<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Train</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <script src="../jquery-3.3.1.min.js"></script>
    <script src="tr.js"></script>

<?php

// 1.	Найти сумму  1+4+7+10+...+112. 

$a = 1;
$b = 0;
while ($a < 112) {
    $a += 3;
    $b += $a;
}
echo 'Ответ на первую задачу: '.$b.'</br>';
?>

<!-- 3.	Вывести на черном фоне n красных квадратов случайного размера в случайной позиции в браузере. -->

    <div class="black">

        <?php
            $block = 0;
            while ($block < 10) {
                $block++;
                $r = rand(10, 100);
                echo "
                <div class='red' style='width: {$r}px; height: {$r}px; left: ".rand(0, 700)."px; right: ".rand(0, 700)."px; top: ".rand(0, 700)."px; bottom: ".rand(0, 700)."px'>
                </div></br>               
                ";
            }
        ?>
    </div>
</body>
</html>

<!-- 4.	Вывести все числа, меньшие 10000, у которых есть хотя бы одна цифра 3 и которые не делятся на 5. -->

<?php
    $n = 10000;
    while ($n <= 10000 && $n != 0) {
        $n--;
        if ($n % 5 != 0 && preg_match('/3/', $n)) {
            echo $n.'</br>';
        }
    }
?>

<!-- 5.	Cоздать массив из n чисел, каждый элемент которого равен квадрату своего номера. -->

<?php

    include($_SERVER['DOCUMENT_ROOT'] . "/functions/debug.php");

    $mass = [];
    $con = -1;

    while ($con++ < 10) {
        array_push($mass, $con**2);
    }
    
    d($mass);
?>

<!-- 6.	Удалите в массиве повторы значений. Например, для массива 1 2 4 4 2 5 результатом будет 1 2 4 5. Задание необходимо выполнить как с помощью функции array_unique(), так и без. -->

<?php

    // $mass_m = [1, 2, 4, 4, 2, 5];

    // $mass_new = array_unique($mass_m);

    // d($mass_new);

?>

<?php

    $arr = [1, 2, 4, 4, 2, 5, 3, 2, 3, 6];
    $i = 0;
    foreach ($arr as $key1 => $value) {

        foreach ($arr as $key2 => $val) {

            if ($value == $val) {
                if ($i == 0) {
                    $i++;    
                } else {
                    unset($arr[$key2]);
                }
            }        
        }

        $i = 0;
    }
    d($arr);

?>




<!-- <?php
function test3 ($array){
    foreach ($array as $key1 => $value1) {
    $a=0;
        foreach ($array as $key2 => $value2) {
            if ($value1 == $value2){
                if ($a == 0){
                    $a++;
                    continue;
                }
                unset($array[$key2]);
                }
            }
        }

    return $array;
    }

    $a = [123,1,2,3,4,2,2,2,2,2,33];
    $a = test3($a);
    d($a);
?> -->