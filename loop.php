<?php
    $num = 999999;
    while($num > 1) {
        $num = $num / 2;
        echo $num . "<br>";
    }

    $n = 0;
    while($n < 100) {

        $n++;

        if ($n == 50) {
            echo "<b>".$n."</b><br>";
        } 
        else {
            if ($n > 50) {
                if ($n % 2 == 0) {
                    echo $n."<br>";
                }
            } 
            else {
                echo $n . "<br>";
            }
        }
    }

    $auto = [
        'audi' => [
            'color' => 'red',
            'horses' => '300'
        ],
        'bmw' => [
            'color' => 'black',
            'horses' => '250'
        ],
        'lada' => [
            'color' => 'white',
            'horses' => '100'
        ]
    ];

    // когда используется as, означает, что учитывается только наполнение элемента массива (цвет, мощность)
    foreach($auto as $key => $auto_item) {
        echo $key.": " ;
        echo $auto_item['color']."-".$auto_item['horses']."<br>";
    }

    foreach($auto as $key => $auto_item) {
        $auto[$key]['horses'] += 100;
    }

    echo "<pre>";
    print_r($auto);
    echo "</pre>";
?>