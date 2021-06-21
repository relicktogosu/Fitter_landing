$(document).ready(function() {
    $('.header-burger__menu').click(function() {
        $('.header-burger__menu').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});