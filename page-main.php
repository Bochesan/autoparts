<? require_once $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<div class="head-banner">
    <div class="head-banner__content">
        <div class="head-banner__parallax">
            <ul id="scene" class="head-banner__parallax-scene">
                <li class="head-banner__parallax-layer" data-depth="0.10"><img src="/media/images/oil.png" alt=""></li>
                <li class="head-banner__parallax-layer head-banner__parallax-layer--small" data-depth="0.50"><img src="/media/images/oil-sm.png" alt=""></li>
            </ul>
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
    <div class="catalog__nav">
        <div class="catalog-nav">
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

    <div class="catalog__title double-text" data-name="Shell">Shell</div>

    <div class="catalog__filter">
        <div class="catalog-filter">
            <div class="catalog-filter__col catalog-filter__col-1">Название</div>
            <div class="catalog-filter__col catalog-filter__col-2">Литраж</div>
            <div class="catalog-filter__col catalog-filter__col-3 is-active">Цена</div>
            <div class="catalog-filter__col catalog-filter__col-4"></div>
        </div>
    </div>
    <div class="catalog__container">
        <div class="catalog__product">
            <div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">Helix HX8 A5/B5 5/30</div>
                    <div class="product-row__size">4 л</div>
                    <div class="product-row__prise">2 080,00 р</div>
                    <div class="product-row__buttons">
                        <a class="product-row__button button button--red">В корзину</a>
                        <a class="product-row__button button button--white">Купить в 1 клик</a>
                    </div>
                </div>
            </div>

            <div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">Helix HX8 A5/B5 5/30</div>
                    <div class="product-row__size">4 л</div>
                    <div class="product-row__prise">2 080,00 р</div>
                    <div class="product-row__buttons">
                        <a class="product-row__button button button--red">В корзину</a>
                        <a class="product-row__button button button--white">Купить в 1 клик</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<? require $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>
