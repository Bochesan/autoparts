;(function() {

    class basketProduct {
        constructor(self, priceBlock, numPlus, numMinus, del) {
            if (self === undefined) {
                return false;
            }
            this._self = self;
            this._price = this._self.querySelectorAll('.' + priceBlock)[0];
            this._numPlus = this._self.querySelectorAll('.' + numPlus)[0];
            this._numMinus = this._self.querySelectorAll('.' + numMinus)[0];
            this._del = this._self.querySelectorAll('.' + del)[0];
        }

        _delete() {
            let self = this;
            this._del.addEventListener('click', function() {
                console.log('del');
                self._self.remove();
            });
        }

        init() {
            this._delete();
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
