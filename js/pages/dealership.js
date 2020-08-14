// count up numbers
$(document).ready(function () {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ' ',
    };
    $('.countupthis').each(function () {
        var num = $(this).attr('numx'); //end count
        var nuen = $(this).text();
        if (nuen === "") {
            nuen = 0;
        }
        var counts = new CountUp(this, nuen, num, 0, 1.5, options);
        counts.start();
    });
});

// spec slider start
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

// spec slider end

let news_slider = $('.news-block__slider')
news_slider.owlCarousel({
    dots: false,
    nav: true,
    navText: [
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="black"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="black"/></svg>'],
    loop: true,
    items: 1
})

var fbSlider = $('.feedback-slider');
fbSlider.owlCarousel({
    margin: 1,
    dots: true,
    loop: true,
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
var newsSlider = $('.news-slider');
newsSlider.owlCarousel({
    margin: 2,
    dots: false,
    responsive: {
        0: {
            items: 1.23,
            slideBy: 1,
            autoWidth: true,
        },
        768: {
            items: 3,
            slideBy: 3
        },
        1200: {
            items: 3,
            slideBy: 3
        }
    }
})

//mobile ceo text toggle
$('#ceoTextWrapperToggle').on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    const expanded = $(this).attr('aria-expanded') === 'true' ? true : false
    $(this).attr('aria-expanded', !expanded)
    $('#ceoTextWrapper').toggleClass('expanded')
})

let team_slider = $('.team-slider');
team_slider.owlCarousel({
    dots: true,
    nav: false,
    responsive: {
        0: {
            margin: 20,
            autoWidth: true,
        },
        768: {
            margin: 15,
            autoWidth: true,
        },
        1200: {
            margin: 30,
            autoWidth: true,
            slideBy: 3,
            loop: true,
        },
    }
})