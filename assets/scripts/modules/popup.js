;(function() {

    document.addEventListener("DOMContentLoaded", function() {
        // Popup opened
        $(document).on("click", ".button--buy", function(event) {
            event.preventDefault();
            $('.i-popup').addClass('opened');
        });

        // Popup closed
        $(document).on("click", ".i-popup__button, .i-popup__overlay", function(event) {
          event.preventDefault();
          $('.i-popup').removeClass('opened');
        });
    });

})();
