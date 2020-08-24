//find service start
let input = $('.service__find input'),
    clearIcon = $('.service__find .clear-icon'),
    results = $('.service__find .find-results');
clearIcon.on('click', hideResults);
input.on('keyup', function (e) {
    if (e.target.value !== '') {
        showResults()
    } else {
        hideResults()
    }
})

function hideResults() {
    input.val('')
    results.hide()
    input.parent().removeClass('focus')
}

function showResults() {
    input.parent().addClass('focus')
    results.show()
}

//find service end

//spec slider start
$(document).ready(function () {
    if ($(window).width() > 767) {
        startCarousel();
    } else {
        $('.special-offers__slider').addClass('off');
    }
});
$(window).resize(function () {
    if ($(window).width() > 767) {
        startCarousel();
    } else {
        stopCarousel();
    }
});

function startCarousel() {
    let specs_slider = $('.special-offers__slider')
    specs_slider.owlCarousel({
        autoWidth: true,
        dots: false,
        loop: false,
        responsive: {
            0: {
                margin: 16
            },
            768: {
                margin: 20
            },
            1200: {
                margin: 20
            }
        }
    })
}

function stopCarousel() {
    let specs_slider = $('.special-offers__slider')
    specs_slider.trigger('destroy.owl.carousel');
    specs_slider.addClass('off');
}

//spec slider end


//details slider
let details_slider = $('.details-slider')
details_slider.owlCarousel({
    autoWidth: true,
    dots: false,
    nav: false,
    loop: false,
    responsive: {
        0: {
            margin: 16
        },
        768: {
            margin: 20
        },
        1200: {
            margin: 20
        }
    }
});

//more details slider
let more_details_slider = $('.more-details .more-details__slider')
more_details_slider.owlCarousel({
    autoWidth: true,
    dots: false,
    loop: false,
    responsive: {
        0: {
            margin: 16,
        },
        768: {
            margin: 20,
        }
    }
})

//comortable zones slider
let zones = $('.comfortable-zones .more-details__slider')
zones.owlCarousel({
    autoWidth: true,
    dots: false,
    loop: false,
    responsive: {
        0: {
            margin: 16,
        },
        768: {
            margin: 20,
        }
    }
})

//feedback
var fbSlider = $('.feedback-slider');
fbSlider.owlCarousel({
    margin: 1,
    dots: true,
    responsive: {
        0: {
            items: 1.23,
            autoWidth: true,
            margin: 20,
            slideBy: 1
        },
        768: {
            autoWidth: true,
            margin: 20,
            slideBy: 1
        },
        1200: {
            autoWidth: true,
            margin: 20,
            slideBy: 1
        }
    }
})