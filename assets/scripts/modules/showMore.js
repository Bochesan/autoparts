;(function() {
    $(document).on('click', '.slide-info__button', function() {
        $(this).closest('.slide-info').find('.slide-info__button').toggleClass('is-active');
        $(this).closest('.slide-info').find('.slide-info__content').slideToggle(300);
    });
})();
