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

            var src = $(this).closest(".product-row__content").find(".product-row__title-image a").attr("href");

            $(".i-popup__box-image").attr("src", src);
        });

        // Popup closed
        $(document).on("click", ".i-popup__button, .i-popup__overlay", function(event) {
          event.preventDefault();
          $('.i-popup').removeClass('opened');
        });
        $(document).on("click", ".i-popup__closeElement", function(event) {
          $('.i-popup').removeClass('opened');
        });
    });

})();
