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

//mobile-applications
let calc_block = $('#mobile-service'),
    calc_content = $('#mobile-service .content'),
    left_step1 = $('#mobile-service .left[step="1"]'),
    service_auto_input = $('#service-auto'),
    service_time_input = $('#service-time'),
    service_item_input = $('#service-item'),
    service_contacts_input = $('#service-contacts'),
    current_step = '1';

//nav functions
function showMobileCalc() {
    calc_block.addClass('active');
    $('body').css('overflow', 'hidden')
}
function hideMobileCalc() {
    calc_block.removeClass('active');
    $('body').css('overflow', 'auto')
}
function goto(step_name) {
    current_step = step_name;
    $('#mobile-service .center').hide()
    $('#mobile-service .center[step='+step_name+']').show();
    if(step_name !== '1'){
        $('#mobile-service .left').hide()
        $('#mobile-service .left.back').show()
    }else{
        $('#mobile-service .left').hide()
        $('#mobile-service .left:not(.back)').show()
    }
    switch (step_name) {
        case 'mark':
            $('.step-2').hide()
            $('.step-2.mark').show()
            calc_content.css('transform', `translateX(-100vw)`)
            break;
        case 'model':
            calc_content.css('transform', `translateX(-200vw)`)
            $('.step-3').hide()
            $('.step-3.model').show()
            break;
        case 'date':
            $('.step-2').hide()
            $('.step-2.date').show()
            calc_content.css('transform', `translateX(-100vw)`)
            break;
        case 'time':
            calc_content.css('transform', `translateX(-200vw)`)
            $('.step-3').hide()
            $('.step-3.time').show()
            break;
        case 'service':
            $('.step-2').hide()
            $('.step-2.service').show()
            calc_content.css('transform', `translateX(-100vw)`)
            break;
        case 'contacts':
            $('.step-2').hide()
            $('.step-2.contacts').show()
            calc_content.css('transform', `translateX(-100vw)`)
            break;
        case '1':
            $('.step-2').hide()
            $('.step-3').hide()
            calc_content.css('transform', `translateX(0)`)
            break;
        default:
            return
    }
}
function goback(){
    switch (current_step) {
        case 'mark':
            goto('1')
            break;
        case 'model':
            goto('mark')
            break;
        case 'date':
            goto('1')
            break;
        case 'time':
            goto('date')
            break;
        case 'service':
            goto('1')
            break;
        case 'contacts':
            goto('1')
            break;
        default:
            return
    }
}
$('#open-mob-app').on('click', showMobileCalc)
//input on-click go to
$('#mobile-service .left.back').on('click', goback)
service_auto_input.parent().on('click', function () {
    goto('mark')
})
service_time_input.parent().on('click', function () {
    goto('date')
})
service_item_input.parent().on('click', function () {
    goto('service')
})
service_contacts_input.parent().on('click', function () {
    goto('contacts')
})
left_step1.on('click', hideMobileCalc)
//nav func end

//on pick mark
$('.mark-item').on('click',function () {
    goto('model')
    service_auto_input.parent().addClass('focus')
    service_auto_input.val($(this).find('.title').text())
})
$('.model-item').on('click',function () {
    goto('1')
    service_auto_input.val(service_auto_input.val()+', '+$(this).find('.title').text())
})
$('.date .days div').on('click',function () {
    goto('time')
})
$('.time .calendar .time div').on('click',function () {
    goto('1')
})
//contacts
$('#contacts-finish').on('click',function () {
    goto('1')
})
$('#service-finish').on('click',function () {
    goto('1')
})