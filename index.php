<?php 

    $people = [
        [
        'name' => 'Sergey',
        'age' => '20',
        'city' => 'Msk',
        'state' => 'N',
        ],
        [
        'name' => 'Anton',
        'age' => '25',
        'city' => 'Pit',
        'state' => 'Y',    
        ],
        [
        'name' => 'Maria',
        'age' => '22',
        'city' => 'Tver',
        'state' => 'Y',    
        ]
    ];

    // foreach ($people as $i => $man) {
    //     echo $man['name'] . ', age - ' . $man['age'] . ' :: ';
    // };

    $title = "Главная страница";
    $style = "href='styles/style.css'";
    include($_SERVER['DOCUMENT_ROOT'] . "/functions/debug.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/head.php");

    // echo vd($people);
    // echo d($people);

    // C:\xampp\apache\conf\extra\httpd-vhosts.conf

    // массивы
    // $auto = ['audi', 'bmw', 'lada', 'ferrari', 'nissan', 'OKA'];

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

    // $auto['bmw']['color'] = 'orange';
    // echo "Цвет моей машины - {$auto['bmw']['color']}";

    // вывод массива, $auto передается выше в $arr
    //d($auto);

?>
<body  id="main">
    <div class="over">
    <header class="header-flex">
        <div class="header-img">
            <div class="header-img-flex">
                <div class="header-img-item sl1"></div>
                <div class="header-img-item sl2"></div>
                <div class="header-img-item sl3"></div>
            </div>
        </div>
        <div class="header-flex-opacity"> 
                <div class="header-btn left-btn"></div>
                <div class="header-btn right-btn"></div>
            <div class="wrapper padding-bottom">    
                <?php include($_SERVER['DOCUMENT_ROOT'] . "/modules/menu.php");?>
                <div class="header-flex-title">
                    <div>
                        <h1>Необычная Москва</h1>
                        <h2 class="main-h2">MyMoscow - агенство интересных маршрутов</h2>
                    </div>
                </div>        
                <div class="header-flex-button">
                        <a href="http://localhost/trips.php">ПОДРОБНЕЕ О НАС</a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="wrapper">
            <section class="offer-question" id="offer-question">
                <div>
                    <h2>ЧТО МЫ ПРЕДЛАГАЕМ? </h2>
                    <span>Наша главная цель - рассказать о Москве так, чтобы это было интересно всем!</span>
                </div>
                <div class="offer-answer">
                    <?php
                        $db = mysqli_connect ('localhost', 'root', '', '02112018_borodin');
                        mysqli_set_charset($db, 'utf8');
                        $sql = "SELECT * FROM our_offers ORDER BY priority DESC";

                        $result = mysqli_query($db, $sql);

                        while( $row = mysqli_fetch_assoc($result) ){
                            if($row['priority'] == 0) {
                                continue;
                            }
                            else {
                            echo "
                            <div class='offer-answer-choice'>
                                <div class='offer-answer-choice-icon' style='background-image: url({$row['img_src']})'></div>
                                <div>
                                    <h3>{$row['name']}</h3>
                                    <span>{$row['content']}</span>
                                </div>
                            </div>
                            ";}
                        }
                    ?>
                </div>    
            </section>
        </div>    
        <section class="about-us" id="about-us">
            <div></div>
            <div>
                <h2>Кто мы такие</h2>
                <span>Мы - команда тех, кто любит историю и любит Москву. </span>
                <span>Москва – это не только место по «заколачиванию денег» и «взращиванию карьеры», а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье – это отличная возможность вырваться из душного мегаполиса куда-нибудь в «дебри», навстречу приключениям. К счастью, не все Подмосковье еще «облагорожено» асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты – первый человек, ступивший на эту землю.</span>
                <span>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</span>
                <a href="http://localhost/trips.php">Подробнее о нас</a>
            </div>
        </section>
        <section>
            <div class="moskow">
                <h2>Москва в фотографиях</h2>
                <span>Проще всего рассказать обо всем в фотографиях. Смотрите наши фотоотчеты и присылайте нам свои фотографии.</span>
            </div>
            <div class="moskow-photos">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>    
        <section class="feedback wrapper" id="feedback">
            <h2>Отзывы</h2>
            <div class="feedback-f">
                <div class="feedback-item">
                    <div class="feedback-item-text">Были с дочкой и подругой на ночной экскурсии. Все таки как много зависит от экскурсовода! Мы все четыре часа ходили за Станиславом Симоновым, как кролики. Боялись пропустить хоть одно слово. При этом моей дочке - которая побывала во многих местах и с детства искушенная на интересные события - была сильно увлечена.
                    </div>
                    <div class="feedback-item-char">
                        <div class="feedback-char-photo chr1"></div>
                        <span>Екатерина Васильева</span>
                    </div>
                </div>
                <div class="feedback-item">
                    <div class="feedback-item-text">Ездили на экскурсию с семиклассниками и родителями. Всем очень понравилось! Экскурсовод Михаил Борисович очень интересно, необычно и с юмором рассказывал о Москве 16 века. Гибко подстраивал эксукурсию под интересы и потребности слушателей, ловко «управлял» подачей автобуса, не давая нам замёрзнуть.) Огромное спасибо!
                    </div>
                    <div class="feedback-item-char">  
                        <div class="feedback-char-photo chr2"></div>
                        <span>Анна Крушевская</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <section class="write">
        <div class="wrapper">
            <h2>Напишите нам</h2>
            <form method="POST" action="/handlers/form.php" class="main-page-form" autocomplete="off">
                <div class="form-inputs">
                    <label>
                        <input type="text" name="name" list="names"><br>
                        <div class="form-text">ФИО</div>
                        <datalist id="names">
                            <option label="Сварщик">Вася</option>
                            <option label="Ноготочки">Маша</option>
                            <option label="Космический захватчик">Чубака</option>
                        </datalist>
                    </label>
                    <label>
                        <input type="text" name="email"><br>
                        <div class="form-text">E-mail</div>
                    </label>
                    <label>
                        <input type="text" name="telephone"><br>
                        <div class="form-text">Телефон</div>
                    </label>
                    <div>
                        <input type="radio" name="connect" value="email" checked> по email<br>
                        <input type="radio" name="connect" value="tel"> по телефону
                    </div>
                    <div>Когда с вами можно связаться?<br><br>
                        <input type="checkbox" name="connect-time[]" value="9-11" checked>9-11<br>
                        <input type="checkbox" name="connect-time[]" value="11-14">11-14<br>
                        <input type="checkbox" name="connect-time[]" value="14-18">14-18<br>
                        <input type="checkbox" name="connect-time[]" value="18-22">18-22<br>
                        <input type="checkbox" name="connect-time[]" value="в любое время">В любое время<br>
                    </div>
                    <div>
                        <select name="city" class="">
                        <option value="0" selected>Выберите город</option>
                        <optgroup label="Столицы">
                            <option value="Москва">Москва</option>
                            <option value="Питер">Питер</option>
                        </optgroup>
                        <optgroup label="Глубинка">
                            <option value="Брянск">Брянск</option>
                            <option value="Волгоград">Волгоград</option>
                            <option value="Краснодар">Краснодар</option>
                        </optgroup>
                        </select>
                    </div>
                    <label>
                    <input type="checkbox" name="agreement"> Я даю согласие на обработку персональных данных
                    </label>
                    <input type="submit">
                </div>
                <div class="send-message">
                    <textarea name="message" id="" cols="50" rows="7" placeholder="Введите ваше сообщение..."></textarea>
                </div>
            </form>
        </div>
    </section>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/modules/footer.php")?>
    <div class="arrow" href="#main"></div>
</body>

<script src="js/vanilla.js"></script>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/main.js"></script>

</html>