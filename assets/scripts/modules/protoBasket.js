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
        }

        _delete() {
            let self = this;
            
            this._del.addEventListener('click', function() {
                self._self.classList.add('remove');
                setTimeout(()=>{
                    self._self.remove();
                }, 550);
            });
        }

        _numAdd() {
            let self = this;

            this._numPlus.addEventListener('click', function() {
                let numProd = +self._numProducts.innerHTML;
                numProd = numProd + 1;
                self._numProducts.innerHTML = numProd;
            });
        }

        _numDel() {
            let self = this;

            this._numMinus.addEventListener('click', function() {
                let numProd = +self._numProducts.innerHTML;
                numProd = numProd - 1;
                if (numProd <= 1) {
                    self._numProducts.innerHTML = 1;
                }
                else {
                    self._numProducts.innerHTML = numProd;
                }
            });
        }

        init() {
            this._delete();
            this._numAdd();
            this._numDel();
        }

    }

    let productsArr = [];
    let products = document.querySelectorAll('.basket-products__product');

    products.forEach(function(item) {
        let product = new basketProduct(item, 'basket-products__product-size-num', 'basket-products__product-num-change--minus', 'basket-products__product-num-change--plus', 'basket-products__product-remove');
        productsArr.push(item);
        product.init();
    })
    window.productsArr = productsArr;

})();
