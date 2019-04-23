;(function() {
    var buttons = $('.product-row__info-button');

    $(document).on('click', '.product-row__info-button', function() {
        $(this).closest('.product-row').find('.product-row__info-button').toggleClass('is-active');
        $(this).closest('.product-row').find('.product-row__info-content').slideToggle(300);
    });
})();
