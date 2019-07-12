<?php
    $menuArray = [
    [
        'name' => 'Главная',
        'link' => 'index.php'
    ],
    [
        'name' => 'Наши услуги',
        'link' => '#offer-question'
    ],
    [
        'name' => 'О компании',
        'link' => 'trips.php'
    ],
    [
        'name' => 'Контакты',
        'link' => 'contacts.php'
    ],
    [
        'name' => 'Отзывы',
        'link' => '#feedback'
    ],

];
?>

<nav>
    <div class="menu-btn">
        <div></div>
    </div>
    <div class="header-flex-logo">
        <div></div>
        <div>MyMoscow</div>
    </div>
    <div class="header-flex-links">
    <?php
        foreach($menuArray as $point):
    ?>
        <a href="<?= $point['link']; ?>"><?= $point['name']; ?></a>

    <?php 
        endforeach;
    ?>
    </div>
</nav>