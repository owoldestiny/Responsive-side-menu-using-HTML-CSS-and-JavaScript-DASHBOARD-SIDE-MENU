// Yes, it's this simple.

var slidingMenu = function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var body = document.body;

    menuToggle.addEventListener('click', function(ev) {
        ev.preventDefault();
        body.classList.toggle('menu-active');
        body.classList.toggle('span-active');
        body.classList.toggle('toggle-active');

        /* 
        ? to change the body color, use this after the toturial is done with the full width 
        */
        // body.classList.toggle('body-active');
    });
}
slidingMenu();