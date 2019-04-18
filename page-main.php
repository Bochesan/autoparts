<? require_once $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<div class="head-banner">
    <div class="head-banner__content">
        <div class="head-banner__parallax">
            <img src="/media/images/oil-bg.jpg" alt="">
            <div class="head-banner__parallax-container">
                <div id="scene" class="head-banner__parallax-scene">
                    <img src="/media/images/oil.png" alt="Oil" data-depth="0.1">
                    <img src="/media/images/oil-sm.png" alt="Oil" data-depth="0.3">
                </div>
            </div>
        </div>
        <div class="head-banner__title">
            <h1 class="double-text" data-name="Моторные масла">Моторные<br> масла</h1>
        </div>
        <div class="head-banner__nav">
            <a href="#" class="head-banner__nav-button head-banner__nav-button--prev">
                <div class="head-banner__nav-button-image">
                    <img src="/media/images/pic-1.png" alt="Клемы">
                </div>
                <span class="head-banner__nav-button-title">Клеммы</span>
                <img src="/media/images/arrow.svg" alt="arrow" class="head-banner__nav-button-arrow">
            </a>
            <a href="#" class="head-banner__nav-button head-banner__nav-button--next">
                <div class="head-banner__nav-button-image">
                    <img src="/media/images/pic-2.png" alt="Автохимия">
                </div>
                <span class="head-banner__nav-button-title">Автохимия</span>
                <img src="/media/images/arrow.svg" alt="arrow" class="head-banner__nav-button-arrow">
            </a>
        </div>
    </div>
</div>

<div class="catalog">
    <div class="catalog__nav catalog-nav">
        <div class="catalog-nav__title">Выберите марку</div>
        <div class="catalog-nav__controls">
            <span class="catalog-nav__hover"></span>
            <ul class="catalog-nav__controls-list">
                <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link">Shell</a></li>
                <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link is-active">Mobil</a></li>
                <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link">GL Синт</a></li>
                <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link">GL Минер</a></li>
            </ul>
        </div>
    </div>
</div>



<? require $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>
