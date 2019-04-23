;(function() {
    $(document).on('click', '.product-row__button', function() {
        if (!$(this).hasClass('animate')) {
            $(this).addClass('animate');
            $(this).addClass("button--check");
            setTimeout(function() {
                $(this).removeClass("button--check");
                $(this).removeClass('animate');
            }.bind(this), 2000);
        }
    });
})();
