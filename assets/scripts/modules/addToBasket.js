;(function() {
    $(document).on('click', '.product-row__button', function() {
        $(this).addClass("button--check");
        setTimeout(function() {
            $(this).removeClass("button--check");
        }.bind(this), 2000);
    });
})();
