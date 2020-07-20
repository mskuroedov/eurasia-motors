//spec offers
let specs_slider = $('.special-offers__slider')
specs_slider.owlCarousel({
    autoWidth:true,
    dots: false,
    loop:false,
    responsive:{
        0:{
            margin:16
        },
        768:{
            margin: 20
        },
        1200:{
            margin: 27
        }
    }
})