//before-after slider
let baSliders = $('.ba-slider')
baSliders.owlCarousel({
    margin: 20,
    dots: true,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            autoWidth: true,
        }
    }
})

//partners slider
var pSlider = $('.r-partners-slider');
pSlider.owlCarousel({
    autoWidth: true,
    nav: false,
    margin: 4,
    dots: true,
    dotsEach: 4,
})
