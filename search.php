<?php 

    $title = "Поиск по клиентам";
    $style = "href='styles/style.css'";
    include($_SERVER['DOCUMENT_ROOT'] . "/functions/debug.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/head.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/header.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/db.php");

    $error = '';
    if ( !empty($_GET) ) {
        if ( !empty($_GET['search']) ) {

            $query = "SELECT * FROM `users` WHERE `email` = '{$_GET['search']}' OR `name` LIKE '%{$_GET['search']}%' OR `phone` = '{$_GET['search']}'";
            $user_data = mysqli_query($db, $query);

            $template = []; // массив пользователей

            while($row = mysqli_fetch_assoc($user_data)) {
                $template['search'][] = $row;
            }
        } else {
            $error = 'Данные не найдены';
        }
    }
?>

    <main>
        <div class="wrapper">
            <h3>Поиск по клиентам</h3>
            <?=$error?>
            <form method="GET">
                <input type="text" name="search" placeholder="Введите данные">
                <input type="submit" value="Поиск">
            </form>
            <?php if ( !empty($_GET['search'])):?>
            <h3>Результаты поиска</h3>
            <div class="table">
            <?php foreach($template['search'] as $key => $value): ?>
                <div class="table-row">
                    <div class="table-cell"><?=(++$key)?></div>
                    <div class="table-cell"><?=($value['name'])?></div>
                    <div class="table-cell"><?=($value['email'])?></div>
                    <div class="table-cell"><?=($value['phone'])?></div>
                </div>
            <?php endforeach;?>
            <?php endif;?>
            </div>    
        </div>
    </main>

<?php include($_SERVER['DOCUMENT_ROOT'] . "/modules/footer.php")?>