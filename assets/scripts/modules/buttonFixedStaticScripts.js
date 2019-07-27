(function() {
    var buttonCart = $(".buttonCart__button"),
        formBuy = $(".delivery");

        $(window).scroll(function(){
            if ($(this).scrollTop() + $(this).height() >= formBuy.offset().top) {
                buttonCart.addClass("buttonCart__button--hide");
            } else {
                buttonCart.removeClass("buttonCart__button--hide");
            }
        });

        $(".buttonCart").click(function() {
            $('body').animate({ scrollTop: formBuy.offset().top - $("header").height()}, 1100); //1100 - скорость
            $('html').animate({ scrollTop: formBuy.offset().top - $("header").height()}, 1100);
        });

})();
