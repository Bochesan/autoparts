;(function() {
    let menuBtn = document.getElementById('menu-button');
    //let menu = document.getElementsByClassName('main-menu')[0];

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('opened');
        //menu.classList.toggle('is-opened');
    });
})();
