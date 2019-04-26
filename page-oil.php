<? require_once $_SERVER['DOCUMENT_ROOT'] . '/header.php'; ?>

<div class="head-banner">
    <div class="head-banner__content">
        <div class="head-banner__parallax">
            <div class="head-banner__parallax-inner head-banner__parallax-inner--oil">
                <ul id="scene" class="head-banner__parallax-scene">
                    <li class="head-banner__parallax-layer" data-depth="0.10"><img src="/media/images/oil.png" alt=""></li>
                    <li class="head-banner__parallax-layer head-banner__parallax-layer--small" data-depth="0.50"><img src="/media/images/oil-sm.png" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="head-banner__title">
            <h1 class="double-text" data-name="Моторные масла">Моторные<br> масла</h1>
        </div>
        <div class="head-banner__nav">
            <a href="/page-clamp.php" class="head-banner__nav-button head-banner__nav-button--prev">
                <img src="/media/images/arrow.svg" alt="arrow" class="head-banner__nav-button-arrow">
                <span class="head-banner__nav-button-title">Клеммы</span>
                <div class="head-banner__nav-button-image">
                    <img src="/media/images/pic-1.png" alt="Клемы">
                </div>
            </a>
            <a href="/page-him.php" class="head-banner__nav-button head-banner__nav-button--next">
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
                    <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link" data-brand="shell">Shell</a></li>
                    <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link is-active" data-brand="mobil">Mobil</a></li>
                    <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link" data-brand="gl_sint">GL Синт</a></li>
                    <li class="catalog-nav__controls-item"><a href="#" class="catalog-nav__controls-link" data-brand="gl_miner">GL Минер</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="catalog__title double-text" data-name="Shell">Shell</div>

    <div class="catalog__filter">
        <div class="catalog-filter">
            <div class="catalog-filter__col catalog-filter__col-1" data-filter="name" data-sort="asc">
                <span class="catalog-filter__col-btn is-active sort-up">Название</span>
            </div>
            <div class="catalog-filter__col catalog-filter__col-3" data-filter="price" data-sort="asc">
                <span class="catalog-filter__col-btn">Цена</span>
            </div>
            <div class="catalog-filter__col catalog-filter__col-4" data-search="search">
                <form class="catalog-filter__form" action="index.html" method="post">
                    <input type="input" name="" value="">
                    <input type="submit" name="" value="">
                </form>
            </div>
        </div>
    </div>
    <div class="catalog__container">
        <div class="preloader">
            <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="load load-1" d="M40 3C40 1.34315 38.6569 0 37 0C35.3431 0 34 1.34315 34 3V17C34 18.6569 35.3431 20 37 20C38.6569 20 40 18.6569 40 17V3Z" fill="#EE2B2A"/>
                <path class="load load-2" d="M63.1584 15.0778C64.33 13.9063 64.33 12.0068 63.1584 10.8352C61.9869 9.66361 60.0874 9.66361 58.9158 10.8352L49.0163 20.7347C47.8447 21.9063 47.8447 23.8058 49.0163 24.9773C50.1879 26.1489 52.0874 26.1489 53.2589 24.9773L63.1584 15.0778Z" fill="#EE2B2A"/>
                <path class="load load-3" d="M71 40C72.6569 40 74 38.6569 74 37C74 35.3431 72.6569 34 71 34H57C55.3431 34 54 35.3431 54 37C54 38.6569 55.3431 40 57 40H71Z" fill="#EE2B2A"/>
                <path class="load load-4" d="M58.9251 63.1614C60.0967 64.3329 61.9962 64.3329 63.1677 63.1614C64.3393 61.9898 64.3393 60.0903 63.1677 58.9187L53.2682 49.0192C52.0967 47.8477 50.1972 47.8477 49.0256 49.0192C47.854 50.1908 47.854 52.0903 49.0256 53.2619L58.9251 63.1614Z" fill="#EE2B2A"/>
                <path class="load load-5" d="M34 71C34 72.6569 35.3431 74 37 74C38.6569 74 40 72.6569 40 71V57C40 55.3431 38.6569 54 37 54C35.3431 54 34 55.3431 34 57V71Z" fill="#EE2B2A"/>
                <path class="load load-6" d="M10.8357 58.9222C9.66414 60.0937 9.66414 61.9932 10.8357 63.1648C12.0073 64.3364 13.9068 64.3364 15.0784 63.1648L24.9778 53.2653C26.1494 52.0937 26.1494 50.1943 24.9778 49.0227C23.8063 47.8511 21.9068 47.8511 20.7352 49.0227L10.8357 58.9222Z" fill="#EE2B2A"/>
                <path class="load load-7" d="M3 34C1.34315 34 0 35.3431 0 37C0 38.6569 1.34315 40 3 40H17C18.6569 40 20 38.6569 20 37C20 35.3431 18.6569 34 17 34H3Z" fill="#EE2B2A"/>
                <path class="load load-8" d="M15.0808 10.8386C13.9092 9.66707 12.0097 9.66707 10.8381 10.8386C9.66654 12.0102 9.66654 13.9097 10.8381 15.0813L20.7376 24.9808C21.9092 26.1523 23.8087 26.1523 24.9803 24.9808C26.1518 23.8092 26.1518 21.9097 24.9803 20.7381L15.0808 10.8386Z" fill="#EE2B2A"/>
            </svg>
        </div>
        <div class="catalog__product">
            <div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">
                        <div class="product-row__title-image">
                            <img src="/media/images/oil.png" alt="">
                        </div>
                        <div class="product-row__title-name">Helix HX8 A5/B5 5/30</div>
                    </div>
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
