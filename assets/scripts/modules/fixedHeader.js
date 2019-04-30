;(function() {
    var header = $('header');
    var content = $('.main-content');
    var headerHeight = header.height();

    $(window).on('load scroll', function() {
        if ($(this).scrollTop() > headerHeight) {
            header.addClass('fixed');
            content.css({'padding-top' : headerHeight});
        }
        else {
            header.removeClass('fixed');
            content.css({'padding-top' : 0})
        }
    });
})();
