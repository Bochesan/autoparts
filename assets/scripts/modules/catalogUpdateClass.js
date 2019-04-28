;(function(){

    class Catalog {
        constructor(self, titleClass, productsContainerClass, productsPreloaderClass){
            if (self === undefined) {
                return false;
            }
            this._self = self;
            this._title = this._self.querySelectorAll("." + titleClass)[0];
            this._products = this._self.querySelectorAll("." + productsContainerClass)[0];
            this.preloader = this._self.querySelectorAll("." + productsPreloaderClass)[0];
        }


        _cleanProducts() {
            this._products.innerHTML = "";
        }

        playPreloader() {
            this.preloader.classList.add("preloader--active");
        }

        stopPreloader() {
            this.preloader.classList.remove("preloader--active");
        }

        updateTitle(title) {
            this._title.innerHTML = title;
            this._title.setAttribute("data-name", title);
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
            if (containerBrands === undefined) {
                return false;
            }
            if (containerFilter === undefined) {
                return false;
            }

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

            this.timeOutAjax;
            this.init();
        }

        _cleanClassFilterAll() {
            let self = this;

            this._filterItem.forEach(function(item){
                let parent = item.closest(".catalog-filter__col");

                    item.classList.remove(self._activeClass);
                    item.classList.remove(self._sortTypeAsc.class);
                    parent.removeAttribute("data-sort");

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

        _queryFormation(delay) {
            clearTimeout(this.timeOutAjax);
            //Метод формирования get запроса
            let arrayQuery = [],
                searchItem = this.searchItem.getElementsByTagName("input")[0],
                brand,
                getQuery;

            this._brandItem.forEach(function(item) {
                if (item.classList.contains("is-active")) {
                    arrayQuery.push("brand=" + item.getAttribute("data-brand"));
                    brand = item.getAttribute("data-brand");
                }
            });

            this._filterItem.forEach(function(item) {
                let parent = item.closest(".catalog-filter__col");
                if (item.classList.contains("is-active")) {
                    arrayQuery.push("sort=" + parent.getAttribute("data-sort"));
                    arrayQuery.push("sortType=" + parent.getAttribute("data-filter"));
                }
            });

            if (searchItem.value !== "") {
                arrayQuery.push("search=" + searchItem.value);
            }

            getQuery = "?" + arrayQuery.join("&");

            //Todo: здесь должен вызываться ajax и принимать get строку
            //Todo: здесь должен вызываться historyAPI для сохранения истории с get запросами
            let historyObj = new HistoryConrtol(getQuery);
            historyObj.setHistory(brand);

            //Тестовое ajax Нужно будет указывать новый адрес
            let ajaxConnect = new AjaxGetProducts("test.json", "get");

            if (delay === undefined){
                ajaxConnect.send();
            } else {
                catalodTest.playPreloader();
                this.timeOutAjax = setTimeout(function(){
                    ajaxConnect.send();
                }, delay)
            }

            console.log(getQuery);

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
                    if (!this.classList.contains("is-active")) {
                        self._selectBrand(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation();
                    }
                })
            })

            this.searchItem.getElementsByTagName("input")[0].addEventListener("input", function() {
                //Вызов метода формирования Get запроса
                self._queryFormation(1000);
            })
        }
    }

    class HistoryConrtol {
        constructor(url) {
            this._url = url;
            this._historyObj = window.history;
        }

        setHistory(brand) {
            if (brand === this._historyObj.state) {
                this._historyObj.replaceState(brand, brand, this._url);
            } else {
                this._historyObj.pushState(brand, brand, this._url);
            }
        }

        readHistory(getQuery) {
            //Todo: здесь нужно парсить get запрос и преводить состояние страницы к актуальному виду
        }
    }

    class AjaxGetProducts {
        constructor(url, type) {
            this._url = url;
            this._type = type;
            this.ajax = new XMLHttpRequest();
        }

        _progress() {
            catalodTest.playPreloader();
        }

        _complete() {
            let result = JSON.parse(this.response);

            catalodTest.updateTitle(result.title);
            catalodTest.updateListProducts(result.elements);

            catalodTest.stopPreloader();

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


    let catalodTest = new Catalog(document.querySelectorAll(".catalog")[0], "catalog__title", "catalog__product", "preloader");

    let filter = new Filter(document.querySelectorAll(".catalog-nav__controls")[0], document.querySelectorAll(".catalog-filter")[0]);


    //Тест
    // window.divArray = divArray;
    window.filter = filter;
})();
