;(function() {

    document.addEventListener("DOMContentLoaded", function() {
        // Popup opened
        $(document).on("click", ".button--buy", function(event) {
            event.preventDefault();
            $('.i-popup').addClass('opened');
            var nameItem = this.getAttribute('data-itemname'),
                priceItem = this.getAttribute('data-itemprice');
                document.getElementById('itemName').value = nameItem;
                document.getElementById('itemPrice').value = priceItem;

        });

        // Popup closed
        $(document).on("click", ".i-popup__button, .i-popup__overlay", function(event) {
          event.preventDefault();
          $('.i-popup').removeClass('opened');
        });
    });

})();
