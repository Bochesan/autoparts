;(function() {

    class basketProduct {
        constructor(self, numProducts, numMinus, numPlus, del) {
            if (self === undefined) {
                return false;
            }
            this._self = self;
            this._numProducts = this._self.querySelectorAll('.' + numProducts)[0];
            this._numMinus = this._self.querySelectorAll('.' + numMinus)[0];
            this._numPlus = this._self.querySelectorAll('.' + numPlus)[0];
            this._del = this._self.querySelectorAll('.' + del)[0];
            this._size = +this._numProducts.innerHTML;
        }

        get valueProducts() {
            let self = this;
            return self._size;
        }

        _delete() {
            this._self.classList.add('remove');
            setTimeout(()=>{
                this._self.remove();
                productsContainer._sumValues();
            }, 550);
        }

        _numAdd() {
            this._size += 1;
            this._numProducts.innerHTML = this._size;
            productsContainer._sumValues();
        }

        _numDel() {
            this._size -= 1;
            this._numProducts.innerHTML = this._size;
            if (this._size <= 1) {
                this._size = 1;
                this._numProducts.innerHTML = 1;
            }
            else {
                this._numProducts.innerHTML = this._size;
            }
            productsContainer._sumValues();
        }

        init() {
            let self = this;

            self._del.addEventListener('click', function() {
                self._delete();
            });

            self._numPlus.addEventListener('click', function() {
                self._numAdd();
            });

            self._numMinus.addEventListener('click', function() {
                self._numDel();
            });
        }

    }

    let productsArr = [];
    let products = document.querySelectorAll('.basket-products__product');

    products.forEach(function(item) {
        let product = new basketProduct(item, 'basket-products__product-size-num', 'basket-products__product-num-change--minus', 'basket-products__product-num-change--plus', 'basket-products__product-remove');
        productsArr.push(item);
        product.init();
        product.valueProducts;
    })
    window.productsArr = productsArr;

    class productsControl {
        constructor(self, productsSize, productsRemove, products) {
            if (self === undefined) {
                return false;
            }
            this._self = self;
            this._productsSize = this._self.querySelectorAll('.' + productsSize)[0];
            this._productsRemove = this._self.querySelectorAll('.' + productsRemove)[0];
            this._products = productsArr;
        }

        _deleteAll() {
            this._products.forEach(function(item) {
                item.classList.add('remove');
                setTimeout(()=>{
                    item.remove();
                }, 550);
            });
            this._productsSize.innerHTML = 0;
        }

        _sumValues() {
            let value = 0;

            this._self.querySelectorAll('.basket-products__product-size-num').forEach(function(item) {
                value += +item.innerHTML;
            });

            this._productsSize.innerHTML = value;
        }

        init() {
            let self = this;

            self._productsRemove.addEventListener('click', function() {
                self._deleteAll();
            });

            self._productsSize.addEventListener('click', function() {
                self._sumValues();
            });

            productsContainer._sumValues();
        }
    }

    let productsContainer = new productsControl(document.querySelectorAll('.basket-products')[0], 'products-num', 'basket-products__remove-products', productsArr);
    productsContainer.init();

})();
