<? require_once $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<div class="head-banner">
    <div class="head-banner__content">
        <div class="head-banner__parallax">
            <div class="head-banner__parallax-inner head-banner__parallax-inner--accum">
                <ul id="scene" class="head-banner__parallax-scene">
                    <li class="head-banner__parallax-layer" data-depth="0.10"><img src="/media/images/accum.png" alt=""></li>
                    <li class="head-banner__parallax-layer head-banner__parallax-layer--small" data-depth="0.50"><img src="/media/images/accum-sm.png" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="head-banner__title">
            <h1 class="double-text" data-name="Аккумуляторы">Аккумуляторы</h1>
        </div>
        <div class="head-banner__nav">
            <a href="/page-him.php" class="head-banner__nav-button head-banner__nav-button--prev">
                <img src="/media/images/arrow.svg" alt="arrow" class="head-banner__nav-button-arrow">
                <span class="head-banner__nav-button-title">Автохимия</span>
                <div class="head-banner__nav-button-image">
                    <img src="/media/images/pic-2.png" alt="Клемы">
                </div>
            </a>
            <a href="/page-clamp.php" class="head-banner__nav-button head-banner__nav-button--next">
                <div class="head-banner__nav-button-image">
                    <img src="/media/images/pic-1.png" alt="Автохимия">
                </div>
                <span class="head-banner__nav-button-title">Клеммы</span>
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
            <div class="catalog-filter__col catalog-filter__col-1" data-filter="active" data-sort="">
                <span class="catalog-filter__col-btn is-active sort-up">Название</span>
            </div>
            <div class="catalog-filter__col catalog-filter__col-2" data-filter="noactive" data-sort="">
                <span class="catalog-filter__col-btn is-active sort-down">Литраж</span>
            </div>
            <div class="catalog-filter__col catalog-filter__col-3" data-filter="noactive" data-sort="">
                <span class="catalog-filter__col-btn">Цена</span>
            </div>
            <div class="catalog-filter__col catalog-filter__col-4">
                <form class="catalog-filter__form" action="index.html" method="post">
                    <input type="input" name="" value="">
                    <input type="submit" name="" value="">
                </form>
            </div>
        </div>
    </div>
    <div class="catalog__container">
        <div class="catalog__product">
            <div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">
                        <div class="product-row__title-image">
                            <img src="/media/images/oil.png" alt="">
                        </div>
                        <div class="product-row__title-name">Helix HX8 A5/B5 5/30</div>
                    </div>
                    <div class="product-row__size">4 л</div>
                    <div class="product-row__prise">2 080,00 р</div>
                    <div class="product-row__buttons">
                        <a class="product-row__button button button--red">
                            <span class="button__text">В корзину</span>
                            <svg class="button__confirm" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 16L12 25L34 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a class="product-row__button button button--white">Купить в 1 клик</a>
                    </div>
                </div>
                <div class="product-row__info">
                    <div class="product-row__info-controls">
                        <span class="product-row__info-button is-active">Подробнее</span>
                        <span class="product-row__info-button">Скрыть</span>
                    </div>
                    <div class="product-row__info-content">
                        <ul>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatum vero ab sapiente nihil fuga.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est voluptatibus voluptatum eligendi debitis culpa laboriosam quis dolore sit, sapiente soluta ab ex, at, eaque. Natus sit, rerum! Optio distinctio, voluptatem accusamus commodi, quisquam consequatur, corporis obcaecati labore explicabo vitae illum sed voluptatibus. Consequuntur inventore, fugit autem repudiandae cumque error?</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor sit amet:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit, quibusdam eligendi delectus voluptatem incidunt obcaecati, repellat fugit labore nemo, rem, repellendus nostrum necessitatibus ratione.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor sit:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, doloremque.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">
                        <div class="product-row__title-image">
                            <img src="/media/images/oil.png" alt="">
                        </div>
                        <div class="product-row__title-name">Helix HX8 A5/B5 5/30</div>
                    </div>
                    <div class="product-row__size">4 л</div>
                    <div class="product-row__prise">2 080,00 р</div>
                    <div class="product-row__buttons">
                        <a class="product-row__button button button--red">
                            <span class="button__text">В корзину</span>
                            <svg class="button__confirm" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 16L12 25L34 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a class="product-row__button button button--white">Купить в 1 клик</a>
                    </div>
                </div>
                <div class="product-row__info">
                    <div class="product-row__info-controls">
                        <span class="product-row__info-button is-active">Подробнее</span>
                        <span class="product-row__info-button">Скрыть</span>
                    </div>
                    <div class="product-row__info-content">
                        <ul>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatum vero ab sapiente nihil fuga.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est voluptatibus voluptatum eligendi debitis culpa laboriosam quis dolore sit, sapiente soluta ab ex, at, eaque. Natus sit, rerum! Optio distinctio, voluptatem accusamus commodi, quisquam consequatur, corporis obcaecati labore explicabo vitae illum sed voluptatibus. Consequuntur inventore, fugit autem repudiandae cumque error?</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, maxime.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor sit amet:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sit, quibusdam eligendi delectus voluptatem incidunt obcaecati, repellat fugit labore nemo, rem, repellendus nostrum necessitatibus ratione.</span>
                            </li>
                            <li>
                                <span class="product-row__info-title">Lorem ipsum dolor sit:</span>
                                <span class="product-row__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, doloremque.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




<? require $_SERVER['DOCUMENT_ROOT'] . '/footer.php'; ?>
