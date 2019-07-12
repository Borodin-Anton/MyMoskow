<?php 

    $title = "Контакты";
    $style = $style = "href='styles/contacts.css'";;
    include($_SERVER['DOCUMENT_ROOT'] . "/functions/debug.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/modules/head.php");

?>
<body  id="main">
    <div class="over">
    <header class="header-flex">
        <div class="header-flex-opacity"> 
            <div class="wrapper padding-bottom">    
            <?php include($_SERVER['DOCUMENT_ROOT'] . "/modules/menu.php");?>
                <div class="header-flex-title">
                    <div>
                        <h1>Необычная Москва</h1>
                        <h3 class="main-h2">агенство интересных маршрутов</h3><br><h2 class="main-h2">-Контакты-</h2>
                    </div>
                </div>        
                <div class="header-flex-button">
                        <a href="#">ПОДРОБНЕЕ О НАС</a>
                </div>
            </div>
        </div>
    </header>
    <main class="wrapper border-bottom">
        <h2>Контакты</h2>
        <p>Мы - команда тех, кто любит историю и любит Москву.</p>
        <p>Москва – это не только место по «заколачиванию денег» и «взращиванию карьеры», а еще и бесконечно красивые памятники природы, заказники, парки, заповедники. Активный отдых в Москве и Подмосковье – это отличная возможность вырваться из душного мегаполиса куда-нибудь в «дебри», навстречу приключениям. К счастью, не все Подмосковье еще «облагорожено» асфальтными дорожками и высоченными коттеджными заборами. Еще встречаются места, настолько глухие и далекие, что, очутившись там, кажется, что ты – первый человек, ступивший на эту землю.</p>
        <p>Там, где не проедет автомобилист и даже велосипедист, найдет лазейку и откроет для себя все красоты 100% бездорожья турист, проводящий свой активный отдых в Подмосковье.</p>
        <div class="sotrudniki">
            <div class="sotrudniki-item">
                <div class="sotrudniki-photos ch1"></div>
                <div class="sotrudniki-text">
                    <h3>Александр Рыбаков</h3>
                    <div class="sotrudniki-dol">директор</div>
                    <div>По всем вопросам пишите на почту:</div>
                    <a href="#">rybakov@mymoscow.ru</a>
                </div>
            </div>
            <div class="sotrudniki-item">
                <div class="sotrudniki-photos ch2"></div>
                <div class="sotrudniki-text">
                    <h3>Елена Белкина</h3>
                    <div class="sotrudniki-dol">руководитель корпоративного отдела</div>
                    <div>По всем вопросам пишите на почту:</div>
                    <a href="#">belkina@mymoscow.ru</a>
                </div> 
            </div>
        </div>
        <div class="feedback">
            <div class="feedback-contacts">
                <div class="feedback-item">
                    <div class="feedback-image placeholder"></div>
                    <div>
                        <div>Москва,</div>
                        <div>Большая Спасская 12</div>
                    </div>
                </div>
                <div class="feedback-item">
                    <div class="feedback-image mail"></div>
                    <div>
                        <div>E-mail:</div>
                        <a href="#">info@mymoscow.ru</a>
                    </div>
                </div>
                <div class="feedback-item">
                    <div class="feedback-image telephone"></div>
                    <div>
                        <div>Телефон:</div>
                        <div>8 (495) 626-46-00</div>
                    </div>
                </div>
            </div>
            <div class="feedback-form">
                <form method="GET" action="form.php" class="main-page-form">
                    <div class="form-inputs">
                        <div>Напишите нам</div>
                        <input type="text" name="name" placeholder="ФИО"><br>
                        <input type="text" name="email" placeholder="E-mail"><br>
                        <textarea name="message" id="" cols="50" rows="7" placeholder="Введите ваше сообщение..."></textarea>
                        <input type="submit">
                    </div>
                </form>
            </div>
        </div>
    </main>
    <iframe class="border-top" src="https://yandex.ru/map-widget/v1/-/CBRbiMbcCA" width="100%" height="570" frameborder="1" allowfullscreen="true"></iframe>
    <?php include($_SERVER['DOCUMENT_ROOT'] . "/modules/footer.php")?>
    <div class="arrow" href="#main"></div>
    </div>
</body>

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/main.js"></script>
</html>