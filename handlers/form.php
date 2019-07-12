<?php 

    $title = "Главная страница";
    $style = "href='../styles/style.css'";
    $date = date('Y-m-d');
    include($_SERVER['DOCUMENT_ROOT'] . "/functions/debug.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/head.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/header.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/db.php");

    //так же можно проверить наличие email через musqli_num_rows($get_user) - получает количество строк, которые были найдены в БД

    $get_user = mysqli_query($db, "SELECT `email` FROM `users` WHERE `email` =  '{$_POST['email']}'");
    if ( mysqli_num_rows($get_user) == 0 ) {
    $result = mysqli_query($db, "INSERT INTO `users` 
                                                        (`name`, 
                                                        `email`, 
                                                        `phone`) 
                                                VALUES ('{$_POST['name']}', 
                                                        '{$_POST['email']}', 
                                                        '{$_POST['telephone']}');");
            if ( !$result ) {
                echo 'Данные не были переданы. Повторите попытку.</br>';
            } else {
                echo $_POST['name'] . ', вы отправили сообщение ' . parse_date($date) . '!</br>';
            }
    } else {
        echo 'Пользователь с таким E-mail уже есть</br>';
    }

    // рельтатом обращения к базе может быть только true или false, поэтому можно не сравнивать, $result == true, а писать сразу $result
    // нужно вводить не $result, а !$result, так как при запросе доп. инфы результат может быть не только true и false

    $connect_time = '';
    if (isset($_POST['connect-time'])) {
        $connect_time =  implode(' :: ', $_POST['connect-time']);
    }

    $resultLeads = mysqli_query($db, "INSERT INTO `leads` 
                                                            (`email`, 
                                                            `connect`, 
                                                            `connect_time`, 
                                                            `city`, 
                                                            `agreement`, 
                                                            `message`,
                                                            `date`) 
                                                    VALUES ('{$_POST['email']}', 
                                                            '{$_POST['connect']}', 
                                                            '{$connect_time}', 
                                                            '{$_POST['city']}', 
                                                            '{$_POST['agreement']}', 
                                                            '{$_POST['message']}',
                                                            NOW());");
?>


<main class="form-main wrapper">
<?php

    echo $_POST['name'] . ', вот введённые данные:<br>' .
         $_POST['email'] . ' - введенный адрес электронной почты;<br>' .
         $_POST['telephone'] . ' - введенный номер телефона;<br>';

    // d($_POST);

    // empty() - проверяет ключ массива на пустоту. ! - противоположность
    // isset() - проверяет существование элемента массива
    // {} - можно не использовать, если выполняется только одно действие

    if ( !empty ($_POST['message']) ) {
        echo 'Ваше сообщение: ' . $_POST['message'] . '<br>';
    } else {
        echo $_POST['name'] . ', введите сообщение <br>';
    }

    // if ( isset($_POST['connect']) ) {
    //     echo $_POST['name'] . ', мы свяжемся с вами по ' . $_POST['connect'] . '<br>';
    // }

    // тернарный оператор - условие ? true : false

    $connect = '';
    // if ($_POST['connect'] == 'email') {
    //     $connect = 'по email';
    // } else {
    //     $connect = 'по телефону';
    // }

    // if else выше можно записать так:
    $connect = ($_POST['connect'] == 'email') ? 'по email' : 'по телефону';

    if ( isset($_POST['agreement']) ) {
        echo $_POST['name'] . ', мы свяжемся с вами по ' . $connect . ' в период ' . $connect_time . '!<br>';
    } else {
       echo 'Прочь!';
    }
?>
<script src="../jquery-3.3.1.min.js"></script>
<script src="../main.js"></script>
</main>

<?php
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/footer.php");
?>
