;(function() {
    var button = $('.footer__col-title');

    button.on('click', function(e) {
        e.preventDefault();
        $(this).closest('.footer__col').find('.footer__col-list').slideToggle(300);
    });
})();
