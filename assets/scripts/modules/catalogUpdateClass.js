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
        constructor(containerBrands, containerFilter, containerMore) {
            if (containerBrands === undefined) {
                return false;
            }
            if (containerFilter === undefined) {
                return false;
            }
            if (containerMore === undefined) {
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

            this._containerMore = containerMore;

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

            console.log(item);

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

        _queryFormation(productUpdate, delay) {
            clearTimeout(this.timeOutAjax);
            //Метод формирования get запроса
            let arrayQuery = [],
                searchItem = this.searchItem.getElementsByTagName("input")[0],
                pageString,
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

            if (productUpdate) {
                this._moreReset();
                // arrayQuery.push("page=" + this._containerMore.querySelectorAll(".catalog__more-button")[0].getAttribute("data-page"));
            }

            pageString = "page=" + this._containerMore.querySelectorAll(".catalog__more-button")[0].getAttribute("data-page")

            getQuery = "?" + arrayQuery.join("&");

            getQuery = encodeURI(getQuery);

            historyObj.setHistory(getQuery, brand);

            //Todo: здесь надо будет сделать актуальный урл для ajax запросов
            // Пример: let ajaxConnect = new AjaxGetProducts(window.location.href + getQuery, "get", true);
            let ajaxConnect = new AjaxGetProducts("test.json" + getQuery + "&" + pageString, "get", productUpdate);

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

        _moreReset() {
            let moreButton = this._containerMore.querySelectorAll(".catalog__more-button")[0];

            moreButton.setAttribute("data-page", "1");
        }

        _morePage() {
            let moreButton = this._containerMore.querySelectorAll(".catalog__more-button")[0],
                page = moreButton.getAttribute("data-page");

                page = Number(page) + 1;

                moreButton.setAttribute("data-page", page);
        }

        updateStateFilterFromUrl(arrayResult) {
            // updateStateFilterFromUrl(arrayResult[0][1], arrayResult[2][1], arrayResult[1][1], arrayResult[3][1])
            let self = this;


            if (arrayResult[0] !== undefined) {
                this._brandItem.forEach(function(item) {
                    if (item.getAttribute("data-brand") === arrayResult[0][1]) {
                        self._selectBrand(item);
                    }
                })
            } else {
                this._selectBrand(this._brandItem[0]);
            }

            if (arrayResult[2] !== undefined) {
                this._filterItem.forEach(function(item) {
                    if (item.closest(".catalog-filter__col").getAttribute("data-filter") === arrayResult[2][1]) {
                        self._cleanClassFilterAll();
                        self._addClassFilter(item);
                        item.closest(".catalog-filter__col").setAttribute("data-sort", arrayResult[1][1]);

                        if (arrayResult[1][1] === "asc") {
                            item.classList.add(self._sortTypeAsc.class);
                            item.classList.remove(self._sortTypeDesc.class);
                        } else {
                            item.classList.remove(self._sortTypeAsc.class);
                            item.classList.add(self._sortTypeDesc.class);
                        }
                    }
                })
            } else {
                this._filterItem.forEach(function(item) {
                    if (item.closest(".catalog-filter__col").getAttribute("data-filter") === "name"){
                        self._cleanClassFilterAll();
                        self._addClassFilter(item);
                    }
                });
            }

            if (arrayResult[3] !== undefined) {
                console.log(arrayResult[3][1]);
                self.searchItem.getElementsByTagName("input")[0].value = arrayResult[3][1];
            } else {
                self.searchItem.getElementsByTagName("input")[0].value = "";
            }

        }

        init() {
            let self = this;
            this._filterItem.forEach(function(item){
                item.addEventListener("click", function() {
                    if (item.classList.contains(self._activeClass)) {
                        self._toogleSort(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation(true);
                    } else {
                        self._cleanClassFilterAll();
                        self._addClassFilter(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation(true);
                    }
                });
            });

            this._brandItem.forEach(function(item) {
                item.addEventListener("click", function(event) {
                    event.preventDefault();
                    if (!this.classList.contains("is-active")) {
                        self._selectBrand(this);
                        //Вызов метода формирования Get запроса
                        self._queryFormation(true);
                    }
                })
            })

            this.searchItem.getElementsByTagName("input")[0].addEventListener("input", function() {
                //Вызов метода формирования Get запроса
                self._queryFormation(true, 1000);
            })

            this._containerMore.querySelectorAll(".catalog__more-button")[0].addEventListener("click", function(event) {
                event.preventDefault();
                self._morePage();
                self._queryFormation(false);
            });
        }
    }

    class HistoryConrtol {
        constructor() {
            this._url;
            this._historyObj = window.history;

            this.init();
        }

        setHistory(getQuery, brand) {
            if (brand === this._historyObj.state) {
                this._historyObj.replaceState(brand, brand, getQuery);
            } else {
                this._historyObj.pushState(brand, brand, getQuery);
            }
        }

        _readHistory() {
            let url = document.location.href,
                arrayUrl = decodeURI(url).split("?"),
                arrayGet = [],
                arrayResult = [];

                if (arrayUrl[1] !== undefined) {
                    arrayGet = arrayUrl[1].split("&");


                    arrayGet.forEach(function(item) {
                        arrayResult.push(item.split("="));
                    })

                    console.log(arrayResult);

                    filter.updateStateFilterFromUrl(arrayResult);

                    //Todo: здесь надо будет сделать актуальный урл для ajax запросов
                    // Пример: let ajaxConnect = new AjaxGetProducts(url, "get", true);
                    let ajaxConnect = new AjaxGetProducts("test.json" + "?" + arrayGet + "&page=1", "get", true);
                    ajaxConnect.send();

                } else {

                    filter.updateStateFilterFromUrl([]);

                    //Todo: здесь надо будет сделать актуальный урл для ajax запросов
                    // Пример: let ajaxConnect = new AjaxGetProducts(url, "get", true);
                    let ajaxConnect = new AjaxGetProducts("test.json", "get", true);
                    ajaxConnect.send();

                }


        }

        init() {
            let self = this;

            window.addEventListener("popstate", self._readHistory);
        }

    }

    class AjaxGetProducts {
        constructor(url, type, productUpdate) {
            this._url = url;
            this._type = type;
            this._productUpdate = productUpdate;
            this.ajax = new XMLHttpRequest();
        }

        _progress() {
            catalodTest.playPreloader();
        }

        _complete() {
            let result = JSON.parse(this.response);

            if (productUpdate === true) {
                catalodTest.updateTitle(result.title);
                catalodTest.updateListProducts(result.elements);
            } else {
                catalodTest.addProducts(result.elements);
            }

            catalodTest.stopPreloader();

            console.log(result);

        }

        _completeUpdatePrpoducts() {
            let result = JSON.parse(this.response);

            catalodTest.updateTitle(result.title);
            catalodTest.updateListProducts(result.elements);

            catalodTest.stopPreloader();

            console.log(result);
        }

        _completeAddProducts() {
            let result = JSON.parse(this.response);

            catalodTest.addProducts(result.elements);

            catalodTest.stopPreloader();

            console.log(result);
        }


        send(data) {
            let productUpdate = this._productUpdate,
                self = this;

            this.ajax.addEventListener("progress", this._progress, false);
            this.ajax.addEventListener("load", (function() {
                if (productUpdate === true) {
                    return self._completeUpdatePrpoducts;
                } else {
                    return self._completeAddProducts;
                }
            })(), false);

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

    let filter = new Filter(document.querySelectorAll(".catalog-nav__controls")[0], document.querySelectorAll(".catalog-filter")[0], document.querySelectorAll(".catalog__more")[0]);

    let historyObj = new HistoryConrtol();

    //Тест
    // window.divArray = divArray;
    window.filter = filter;
})();
