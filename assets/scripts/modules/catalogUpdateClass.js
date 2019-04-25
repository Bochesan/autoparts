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

    ajaxConnect.send({data: 1});

    //Тест
    // window.divArray = divArray;
    window.catalodTest = catalodTest;
})();
