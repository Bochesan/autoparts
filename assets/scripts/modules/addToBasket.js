;(function() {
    var check = true;
    $(document).on('click', '.product-row__button', function() {
        if (check) {
            check = false;
            $(this).addClass("button--check");
            setTimeout(function() {
                $(this).removeClass("button--check");
                check = true;
            }.bind(this), 2000);
        }
    });
})();
