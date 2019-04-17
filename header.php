<?
$buildDest = "/assets/build/";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/media/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="<?=$buildDest?>main.min.css?<?php echo filemtime($_SERVER['DOCUMENT_ROOT'].$buildDest.'main.min.css'); ?>" media="all" />
</head>
<body>
<div class="outer">
    <header>
        <div class="info-line wrapper">
            <div class="info-line__information info-line__information--address">Фрунзе, 19/1, Звенигород, Московская область</div>
            <div class="info-line__information info-line__information--work-time">Ежедневно: 08:00 — 20:00</div>
            <div class="info-line__information info-line__information--phone">
                <a href="tel:+74959925321">+7 (495) 992–53–21</a>
            </div>
        </div>
        <div class="header wrapper">
            <div class="logo">
                <a href="/">Автозапчасти<br> в Звенигороде</a>
            </div>
            <nav class="main-menu">
                <ul class="main-menu__container">
                    <li class="main-menu__item"><a href="#" class="main-menu__link">Аккумуляторы</a></li>
                    <li class="main-menu__item"><a href="#" class="main-menu__link">Клеммы</a></li>
                    <li class="main-menu__item"><a href="#" class="main-menu__link is-active">Моторные масла</a></li>
                    <li class="main-menu__item"><a href="#" class="main-menu__link">Автохимия</a></li>
                </ul>
            </nav>
            <div class="header-buttons">
                <div class="header-buttons__search">
                    <img src="/media/images/search.svg" alt="">
                </div>
                <div class="header-buttons__cart">
                    <img src="/media/images/cart.svg" alt="">
                </div>
            </div>
        </div>
    </header>
    <main class="main-content wrapper">
