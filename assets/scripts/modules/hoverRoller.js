;(function() {

    window.addEventListener('load', function() {

        var menuLink = $('.catalog-nav__controls-link'),
            menu = $('.catalog-nav__controls-list');

        var menuItem = $('.catalog-nav__controls-item'),
            activeLink = $('.catalog-nav__controls-link.is-active'),
            hoverBox = $('.catalog-nav__hover'),
            activeLinkPosLeft = activeLink.position().left,
            activeLinkPosTop = activeLink.position().top,
            activeLinkWidth = activeLink.innerWidth(),
            activeLinkHeight = activeLink.innerHeight();

        var check = false;
        menuLink.hover(
          function() {
            var newLinkPosLeft = $(this).position().left,
                newLinkPosTop = $(this).position().top,
                newLinkWidth = $(this).innerWidth(),
                newLinkHeight = $(this).innerHeight();
            hoverBox.css({'left' : newLinkPosLeft, 'top' : newLinkPosTop, 'width' : newLinkWidth, 'height' : newLinkHeight});
            check = false;
        },
          function() {
            setTimeout(function(){
              if (check) {
                hoverBox.css({'left' : activeLinkPosLeft, 'top' : activeLinkPosTop, 'width' : activeLinkWidth, 'height' : activeLinkHeight});
              }
            }, 1000);
            check = true;
          }
        );

        function resizePos() {
            activeLinkPosLeft = activeLink.position().left,
            activeLinkPosTop = activeLink.position().top,
            activeLinkWidth = activeLink.innerWidth(),
            activeLinkHeight = activeLink.innerHeight();

            hoverBox.css({'left' : activeLinkPosLeft, 'top' : activeLinkPosTop, 'width' : activeLinkWidth, 'height' : activeLinkHeight});
        }

        var widthAllButtons = 0,
            menuWidth = $(window).width() - menu.width();
        menuItem.each(function() {
            widthAllButtons += $(this).width();
        });
        function widthContainer() {

            if (menu.width() < widthAllButtons) {
                menu.addClass('full-size');
            }
            if ($(window).width() - menuWidth > widthAllButtons) {
                menu.removeClass('full-size');
            }
        }

        $(window).resize(function() {
            widthContainer();
            resizePos();
        });
        widthContainer();
        resizePos();
    });


})();
