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
            this._del.addEventListener('click', function() {
                console.log('del');
                this.closest('.basket-products__product').remove();
            });
        }

    }

    let product = new basketProduct(document.querySelectorAll('.basket-products__product')[0], 'basket-products__product-size-num', 'basket-products__product-num-change--minus', 'basket-products__product-num-change--plus', 'basket-products__product-remove');

    product._delete();
})();
