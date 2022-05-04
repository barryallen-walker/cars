var mybutton = document.getElementById("myBtn");
var myNav = document.getElementById('navbar');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // "use strict";
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        myNav.classList.add("navbar-choice2");
        myNav.classList.remove("navbar-choice1");
        mybutton.style.display = "block";
    }
    else {
        myNav.classList.add("navbar-choice1");
        myNav.classList.remove("navbar-choice2");
        mybutton.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true,
                dots: false,dotsData: true,
            },
            600:{
                items:4,
                nav:true,
                dots: false,dotsData: true,
            },
            1000:{
                items:6,
                nav:true,
                loop:false,
                dots: false,dotsData: true,
            }
        }
    })
});
