;(function(){

    //Тест
    let divArray = `<div class="product-row">
                <div class="product-row__content">
                    <div class="product-row__title">
                        <div class="product-row__title-image">
                            <img src="/media/images/oil.png" alt="">
                        </div>
                        <div class="product-row__title-name">Товар</div>
                    </div>
                    <div class="product-row__size">4 л</div>
                    <div class="product-row__prise">2 080,00 р</div>
                    <div class="product-row__buttons">
                        <a class="product-row__button button button--red">
                            <span class="button__text">В корзину</span>
                            <svg class="button__confirm" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 16L12 25L34 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
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
                            <div class="product-row__title-name">Товар 1</div>
                        </div>
                        <div class="product-row__size">4 л</div>
                        <div class="product-row__prise">2 080,00 р</div>
                        <div class="product-row__buttons">
                            <a class="product-row__button button button--red">
                                <span class="button__text">В корзину</span>
                                <svg class="button__confirm" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 16L12 25L34 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
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
                                <div class="product-row__title-name">Товар 2</div>
                            </div>
                            <div class="product-row__size">4 л</div>
                            <div class="product-row__prise">2 080,00 р</div>
                            <div class="product-row__buttons">
                                <a class="product-row__button button button--red">
                                    <span class="button__text">В корзину</span>
                                    <svg class="button__confirm" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 16L12 25L34 3" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path>
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
                    </div>`;

    class Catalog {
        constructor(self, titleClass, productsContainerClass){
            this._self = self;
            this._title = this._self.querySelectorAll("." + titleClass)[0];
            this._products = this._self.querySelectorAll("." + productsContainerClass)[0];
        }

        _cleanProducts() {
            this._products.innerHTML = "";
        }

        _playPreloader() {
            // Сделать запуск прелоудера
        }

        _stopPreloader() {
            // Сделать остановку прелоудера
        }

        updateTitle(title) {
            this._title.innerHTML = title;
        }

        updateListProducts(products) {
            this._products.innerHTML = products;
        }

        addProducts(products) {
            this._products.insertAdjacentHTML("beforeend", products);
        }
    }

    class AjaxGetProducts {
        constructor(url, type) {
            this._url = url;
            this._type = type;
            this.ajax = new XMLHttpRequest();
        }

        _progress() {
            // Сделать действие во время процесса загрузки
        }

        _compete() {
            if (this.status != 200) {
              // обработать ошибку
              console.log( this.status + ': ' + this.statusText ); // пример вывода: 404: Not Found
            } else {
              // вывести результат
              let obj = JSON.parse(this.response)
              console.log( obj ); // responseText -- текст ответа.
            }
        }

        send(data) {
            this.ajax.addEventListener("progress", this._progress, false);
            this.ajax.addEventListener("load", this._compete, false);

            if (this._type.toLowerCase() === "get") {

                this.ajax.open(this._type, this._url);
                this.ajax.send();

                console.log("get");
            } else if (this._type.toLowerCase() === "post") {
                console.log("post");
            } else {
                console.log("Error");
            }
        }
    }


    let catalodTest = new Catalog(document.querySelectorAll(".catalog")[0], "catalog__title", "catalog__container");
    let ajaxConnect = new AjaxGetProducts("test.json", "get");

    ajaxConnect.send({data: 1});

    //Тест
    window.divArray = divArray;
    window.catalodTest = catalodTest;
})();
