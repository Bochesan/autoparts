;(function(){

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

    class Filter {
        constructor(containerBrands, containerFilter) {
            this._containerBrands = containerBrands;
            this._brandItem = this._containerBrands.querySelectorAll(".catalog-nav__controls-link");

            this._containerFilter = containerFilter;
            this._filterItem = this._containerFilter.querySelectorAll(".catalog-filter__col-btn");
            this.searchItem = this._containerFilter.querySelectorAll(".catalog-filter__form")[0];
            this._activeClass = "is-active";
            this._sortTypeAsc = {
                class: "sort-down",
                dataSort: "asc"
            },
            this._sortTypeDesc = {
                class: "sort-up",
                dataSort: "desc"
            }

            this.init();
        }

        _cleanClassFilterAll() {
            let self = this;

            this._filterItem.forEach(function(item){
                let parent = item.closest(".catalog-filter__col");

                    item.classList.remove(self._activeClass);
                    item.classList.remove(self._sortTypeAsc.class);
                    parent.removeAttribute("data-sort");

                    // parent["data-sort"] = this._sortTypeAsc.dataSort;

            });
        }

        _addClassFilter(item) {
            let parent = item.closest(".catalog-filter__col");

            item.classList.add(this._activeClass);
            item.classList.add(this._sortTypeAsc.class);

            parent.setAttribute("data-sort", this._sortTypeAsc.dataSort);
        }

        _toogleSort(item) {
            let parent = item.closest(".catalog-filter__col");

            if (item.classList.contains(this._sortTypeAsc.class)) {
                item.classList.remove(this._sortTypeAsc.class);
                item.classList.add(this._sortTypeDesc.class);

                parent.setAttribute("data-sort", this._sortTypeDesc.dataSort);
            } else {
                item.classList.remove(this._sortTypeDesc.class);
                item.classList.add(this._sortTypeAsc.class);

                parent.setAttribute("data-sort", this._sortTypeAsc.dataSort);
            }

        }

        _selectBrand(item) {
            if (!item.classList.contains("is-active")){
                this._brandItem.forEach(function(item) {
                    item.classList.remove("is-active");
                });
                item.classList.add("is-active");
            }
        }

        _queryFormation() {
            //Метод формирования get запроса
        }

        init() {
            let self = this;
            this._filterItem.forEach(function(item){
                item.addEventListener("click", function() {
                    if (item.classList.contains(self._activeClass)) {
                        self._toogleSort(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation();
                    } else {
                        self._cleanClassFilterAll();
                        self._addClassFilter(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation();
                    }
                });
            });

            this._brandItem.forEach(function(item) {
                item.addEventListener("click", function(event) {
                    event.preventDefault();
                    self._selectBrand(this);
                })
            })

            this.searchItem.getElementsByTagName("input")[0].addEventListener("input", function() {
                console.log(this.value);
                //Вызов метода формирования Get запроса
                self._queryFormation();
            })
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

        _complete() {
            // if (this.status != 200) {
            //   // обработать ошибку
            //   console.log( this.status + ': ' + this.statusText ); // пример вывода: 404: Not Found
            // } else {
            //   // вывести результат
            //   let obj = JSON.parse(this.response)
            //   console.log( obj ); // responseText -- текст ответа.
            let result = JSON.parse(this.response);
                console.log(result);

        }

        send(data) {
            this.ajax.addEventListener("progress", this._progress, false);
            this.ajax.addEventListener("load", this._complete, false);

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
    let filter = new Filter(document.querySelectorAll(".catalog-nav__controls")[0], document.querySelectorAll(".catalog-filter")[0]);

    ajaxConnect.send({data: 1});

    //Тест
    // window.divArray = divArray;
    window.filter = filter;
})();
