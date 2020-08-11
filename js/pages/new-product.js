//color-picker in preview of car
$('.preview__buttons div').popover({
    trigger: 'hover',
    placement: 'top',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body tooltip-inner"></div></div>'
})

let banner_slider = $('.new-product__banner .owl-carousel')
banner_slider.owlCarousel({
    margin: 0,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
})

//features slider needs to be rebuilded when window resizes,because of rtl direction
let features_slider = $('.features-slider')

function initFeaturesSlider() {
    features_slider.trigger('destroy.owl.carousel')
    features_slider.owlCarousel({
        margin: 0,
        autoWidth: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 15L10.05 13.95L5.85 9.75L15 9.75L15 8.25L5.85 8.25L10.05 4.05L9 3L3 9L9 15Z" fill="#5F5F5F"/></svg>',
            '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 3L7.95 4.05L12.15 8.25H3L3 9.75H12.15L7.95 13.95L9 15L15 9L9 3Z" fill="#5F5F5F"/></svg>'],
        responsive: {
            0: {
                margin: 16,
                nav: false
            },
            768: {
                margin: 20,
                rtl: false
            },
            1200: {
                margin: 20,
                slideBy: 1,
                rtl: true
            },
        }
    })
}

let id;
$(window).resize(function () {
    clearTimeout(id);
    id = setTimeout(initFeaturesSlider, 500);
});
initFeaturesSlider()
//features slider end

$('#feat-text-toggle').on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    const expanded = $(this).attr('aria-expanded') === 'true' ? true : false
    $(this).attr('aria-expanded', !expanded)
    $(this).parent().find('.text-wrapper').toggleClass('expanded')

})

//equipment text toggle
$('.equipment-item .show-more').on('click', function (e) {
    e.preventDefault()
    e.stopPropagation()
    const expanded = $(this).attr('aria-expanded') === 'true' ? true : false
    $(this).attr('aria-expanded', !expanded)
    $(this).parent().find('.list').toggleClass('expanded')
})

function initCollapsedBlocks() {
    if ($(window).outerWidth() > 767 && $(window).outerWidth() < 1199) {
        let descriptionListBlocks = $('.equipment-item .description .list')
        descriptionListBlocks.each((i, item) => {
            item.style.transitionDuration = '0s'
            $(item).addClass('expanded')
            let height = $(item).outerHeight()
            console.log(height)
            if (height > 197) {
                console.log(item)
                $(item).addClass('w-collapse')
            } else {
                // $(item).removeClass('w-collapse')
            }
            item.style.transitionDuration = '.2s'
            $(item).removeClass('expanded')
        })
    }
}
let equipmentTimeout;
$(window).resize(function () {
    clearTimeout(equipmentTimeout);
    equipmentTimeout = setTimeout(initCollapsedBlocks, 500);
});
initCollapsedBlocks()

//products type view controls

$('.view-controls a').on('click',function (e) {
    e.preventDefault();
    e.stopPropagation();
    const row = $('.new-product-tile__row');
    $(this).attr('data-type') === 'rows' ? row.addClass('row-view') : row.removeClass('row-view')
    $('.view-controls a').attr('aria-active','false')
    $(this).attr('aria-active','true')
})


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

//more details slider

let details_slider = $('.more-details__slider')
details_slider.owlCarousel({
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