;(function() {
    var container = $('.catalog-nav__controls');
    var containerWidth = Math.floor(container.width());
    var button = $('.catalog-nav__controls-item');
    var buttonsWidth = 0;
    var breakpoint = 0;
    var containerWidthResize = 0;

    button.each(function() {
        buttonsWidth += Math.floor($(this).width());
    });

    if (containerWidth < buttonsWidth) {
        breakpoint = buttonsWidth;
    }
    console.log('BREAKPOINT', JSON.stringify(breakpoint, null, 2))

    function widthContainer() {
        containerWidth = Math.floor(container.width());
        containerWidthResize = $(window).width() - ($(window).width() - containerWidth);

        console.log('CONTAINERWIDTH', JSON.stringify(containerWidth, null, 2))
        console.log('BUTTONSWIDTH', JSON.stringify(buttonsWidth, null, 2))
        if (containerWidthResize < buttonsWidth) {

            container.addClass('full-size');
            if (breakpoint == 0) {
                breakpoint = $(window).width();
            }
        }

        if (containerWidthResize > breakpoint) {
            container.removeClass('full-size');
        }
    }

    $(window).resize(function() {
        widthContainer();
        console.log(' ');
    });
    widthContainer();

})();
