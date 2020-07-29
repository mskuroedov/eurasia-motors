//banner
let banner_slider = $('.l1__banner')
banner_slider.owlCarousel({
    margin: 0,
    items: 1,
    dots: true,
    loop:true,
    navText: [
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
    responsive: {
        0: {
            nav: false,
        },
        1200: {
            nav: true,
        }
    }
})

//search input
let search = $('.catalog__search .input input'),
    search_results = $('.catalog__search .input .search-results'),
    search_clear = $('.catalog__search .input .clear');
search.on('focusin', function () {
    search_results.addClass('shown')
});
search.on('focusout', function (e) {
    if (e.target.value === '') {
        search_results.removeClass('shown');
    }
});
search.on('input', function (e) {
    if (e.target.value !== '') {
        search_clear.addClass('active');
        //here any async call .then((res)=>
        search_results.addClass('shown')
        console.log(search_results)
    } else {
        search_clear.removeClass('active');
    }
});
search_clear.on('click', function () {
    search_clear.removeClass('active');
    search_results.removeClass('shown');
    search.val('')
})

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

var fbSlider = $('.feedback-slider');
fbSlider.owlCarousel({
    margin: 1,
    dots: false,
    responsive: {
        0: {
            items: 1.23,
            autoWidth: true,
            slideBy: 1
        },
        800: {
            items: 1.23,
            autoWidth: true,
            margin: 20,
            slideBy: 1
        },
        1200: {
            items: 1.23,
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
        800: {
            items: 3,
            slideBy: 3
        },
        1200: {
            items: 3,
            slideBy: 3
        }
    }
})
