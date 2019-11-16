$(document).ready(()=>{
    $('#Sponsors').owlCarousel({
        margin:0,
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0:{items: 2},

            600: {items: 4},

            1300: {items: 6}
        },
    })
})

$(document).ready(()=>{
    $('#About-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{items:1},
            1000:{items: 2},
        }
    })
})