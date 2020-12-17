$(document).ready(function(){
$('.slider').slick({
    arrows: false,
    dots: true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});

let hamburger = document.querySelector('.hamburger');
let cross = document.querySelector('.cross');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

cross.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

});