-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Фев 12 2019 г., 14:06
-- Версия сервера: 10.1.37-MariaDB
-- Версия PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `02112018_borodin`
--

-- --------------------------------------------------------

--
-- Структура таблицы `leads`
--

CREATE TABLE `leads` (
  `id` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `connect` varchar(100) NOT NULL,
  `connect_time` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `agreement` varchar(50) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `leads`
--

INSERT INTO `leads` (`id`, `email`, `connect`, `connect_time`, `city`, `agreement`, `message`) VALUES
(1, 'мыло', 'тел', '11', 'мск', 'до', 'сооб'),
(2, 'dfg', 'email', '14-18', 'Москва', 'on', 'dfg'),
(3, 'morbiysaminoff@gmail.com', 'asd', 'ssss', 'Moscow', '', '````'),
(4, 'morbiysaminoff@gmail.com', 'email', '18-22', 'Москва', 'on', 'Сообщение'),
(5, 'вап', 'tel', '14-18', 'Москва', 'on', 'пппп');

-- --------------------------------------------------------

--
-- Структура таблицы `our_offers`
--

CREATE TABLE `our_offers` (
  `id` int(11) NOT NULL,
  `img_src` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `priority` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `our_offers`
--

INSERT INTO `our_offers` (`id`, `img_src`, `name`, `content`, `priority`) VALUES
(1, '/images/icons/map.png', 'Необычные маршруты', 'Мы обязательно порадуем тебя необычными маршрутами Москвы, которые прокладывают наши опытные гиды. Ты увидишь и узнаешь о Москве то, что никогда не знал!', 10),
(2, '/images/icons/souvenir.png', 'Классные сувениры', 'Отличная новость! У нас появился магазин сувениров! И самое примечательное, что все эти сувениры мы делаем сами! Заходи к нам в гости!', 20),
(3, '/images/icons/compass.png', 'Интересные экскурсии', 'За время экскурсий, которых у нас больше 20, ты узнаешь и увидишь все основные досопримечательности: Кремль, Храм Христа Спаителя, так и пройдешься по пешеходным улицам Москвы, узнаешь их историю и сделаешь самые классные фотографии.', 30),
(4, '/images/icons/picture.png', 'Фотосессии в москве', 'Команда MyMoscow рада провести креативные фотосессии в любом уголке Москвы. Не важно, свадьба у Вас или просто захотелось добавить в альбом или инстаграм красивых фоток.', 40),
(5, '/images/icons/discussion.png', 'Новые знакомства', 'MyMoscow - это целый клуб, где после московских проулок ты сможешь продолжить общение с теми, кому интересна Москва , знакомиться с новыми людьми и делиться впечатлениями.', 50),
(6, '/images/icons/sun.png', 'Яркие впечатления', 'Самое важное - это яркие эмоции, которые остануться с тобой на долгое время! Поэтому в нашей команде мы ждем именно тебя!', 60);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(6) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`) VALUES
(1, 'Бородин Антон', '79067155699@ya.ru', '9067155699'),
(2, 'Вася Пупкин', 'vasyp@ya.ru', '9010003322'),
(10, 'Маша', 'ma@mail.ru', '88005553555'),
(15, 'Чубака', 'mail', '555'),
(45, 'Маша', 'mash@mail.ru', '89990003311'),
(46, 'Антон Бородин', '79067155699@ya.ru', '89067155699'),
(47, 'Вася', 'vas@ya.ru', '88005553555'),
(48, 'Кот', 'kot@kote.ru', '89002221188'),
(49, 'xcv', 'xcv', 'xcv'),
(50, 'xcv', 'xcv', 'xcv'),
(51, 'sdfsdf', 'dfsdf', 'sdfsdf'),
(52, 'ddfg', 'dfg', 'dfg'),
(53, 'sdf', 'sdf', 'sdf'),
(54, 'sdf', 'sdf', 'sdf'),
(55, 'asd', 'asd', 'asd'),
(56, 'asd', 'asd', 'asd'),
(57, 'asd', 'asd', 'sd'),
(58, 'Антон Бородин', '343434', '89067155699'),
(59, 'Anton', 'morbiysaminoff@gmail.com', '89067155699'),
(60, 'Anton', 'morbiysaminoff@gmail.com', '89067155699'),
(61, 'Anton', 'morbiysaminoff@gmail.com', '89067155699'),
(62, 'Антон Бородин', 'morbiysaminoff@gmail.com', '89067155699'),
(63, 'Антон Бородин', 'morbiysaminoff@gmail.com', '89067155699'),
(64, 'вап', 'вап', 'вап');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `our_offers`
--
ALTER TABLE `our_offers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `leads`
--
ALTER TABLE `leads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `our_offers`
--
ALTER TABLE `our_offers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
