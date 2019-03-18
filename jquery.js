$(document).ready(function () {
    $(".owl-carousel").owlCarousel( {
        dots: false,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1,
                nav: true
            },
            1000:{
                items:1,
                nav: true
            }
        }
    });
});
