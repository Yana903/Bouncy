$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    singleItem: true,
    navigation: true,
    navigationText: [ 'prev', 'next' ],
    items:1
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:2
    //     },
    //     1000:{
    //         items:3
    //     }
    // }
});

