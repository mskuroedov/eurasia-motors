let sliders = $('.history__timeline .slider')
sliders.each((i, item) => {
    $(item).owlCarousel({
        margin: 2,
        autoWidth: true,
        dots: false,
        loop: false,
        responsive: {
            0: {},
            1200: {}
        }
    })
})
