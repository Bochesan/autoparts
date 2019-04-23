;(function() {
    let menuBtn = document.getElementById('menu-button');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('opened');
    });

    window.onresize = function() {
        menuBtn.classList.remove('opened');
    }
    window.onscroll = function() {
        menuBtn.classList.remove('opened');
    }
})();
