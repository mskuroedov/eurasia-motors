//calculator
let money_input = $('#range-money'),
    time_input = $('#range-time'),
    price = $('#price').val() === '' ? 1000000 : +$(' #price').val(),
    range_money_control = document.getElementById('range-money-control'),
    range_time_control = document.getElementById('range-time-control');

function initCalc() {
    noUiSlider.create(range_money_control, {
        start: parseInt(price / 2),
        connect: [true, false],
        step: 10000,
        range: {
            'min': price * 0.1,
            'max': price * 0.9
        }
    });
    range_money_control.noUiSlider.on('update', function (values, handle) {
        money_input.val(
            parseInt(values[handle]).toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, '$& ').replace('.00', '')
            + ' ₽');
    });

    noUiSlider.create(range_time_control, {
        start: 8,
        // snap: true,
        connect: [true, false],
        range: {
            'min': [6],
            '15%': [7],
            '26%': [8],
            '33%': [9],
            '38%': [10],
            '43%': [11],
            '50%': [12],
            '75%': [24],
            'max': [36]
        }
    });
    range_time_control.noUiSlider.on('update', function (values, handle) {
        time_input.val(parseInt(values[handle]) + ' месяцев');
    });
    money_input.on('focusin', function () {
        $(this).val('');
    })
    money_input.on('focusout', function (e) {
        if ($(this).val() === '' || isNaN($(this).val())) {
            range_money_control.noUiSlider.set(range_money_control.noUiSlider.value);
        } else if ($(this).val() < parseInt(price * .1)) {
            range_money_control.noUiSlider.set(0);
        } else if ($(this).val() > parseInt(price * .9)) {
            range_money_control.noUiSlider.set(99999999999);
        } else {
            let val = parseInt(+e.target.value);
            range_money_control.noUiSlider.set(val);
        }
    })
    time_input.on('focusin', function () {
        $(this).val('');
    })
    time_input.on('focusout', function (e) {
        if ($(this).val() === '' || isNaN($(this).val())) {
            range_time_control.noUiSlider.set(range_time_control.noUiSlider.value);
        } else if ($(this).val() < 6) {
            range_time_control.noUiSlider.set(0);
        } else if ($(this).val() > 36) {
            range_time_control.noUiSlider.set(36);
        } else {
            let val = e.target.value;
            range_time_control.noUiSlider.set(val);
        }
    })
}
function updatePriceRange() {
    range_money_control.noUiSlider.updateOptions({
        start: parseInt(price / 2),
        connect: [true, false],
        step: 10000,
        range: {
            'min': price * 0.1,
            'max': price * 0.9
        }
    });
}
$('.calc-form #price').on('change', function (e) {
    if(!isNaN(+e.target.value) && e.target.value > 0){
        price = +e.target.value
        updatePriceRange()
    }
})
initCalc()

//banks slider
var bankSlider = $('.bank-slider');
bankSlider.owlCarousel({
    autoWidth: true,
    nav: false,
    margin: 4,
    dots: true,
    dotsEach: 4,
})

//mobile-calculator
let calc_block = $('#mobile-calc'),
    calc_content = $('#mobile-calc .content'),
    m_full_price_input = $('#m-price'),
    m_money_input = $('#m-range-money'),
    m_time_input = $('#m-range-time'),
    m_price = $('#m-price').val() === '' ? 1000000 : parseInt($(' #m-price').val()),
    m_range_money_control = document.getElementById('m-range-money-control'),
    m_range_time_control = document.getElementById('m-range-time-control'),
    left_step1 = $('#mobile-calc .left[step="1"]'),
    left_step2 = $('#mobile-calc .left[step="2"]'),
    btn_apply = $('#mobile-goto-res');

//nav functions
function showMobileCalc() {
    calc_block.addClass('active');
    $('body').css('overflow', 'hidden')
}

function hideMobileCalc() {
    calc_block.removeClass('active');
    $('body').css('overflow', 'auto')
}

$('#open-mob-calc').on('click', showMobileCalc)
left_step1.on('click', hideMobileCalc)
btn_apply.on('click', function () {
    left_step1.hide()
    left_step2.show()
    calc_content.css('transform', 'translateX(-100vw)')
})
left_step2.on('click', function () {
    left_step1.show()
    left_step2.hide()
    calc_content.css('transform', 'translateX(0)')
})
//nav func end

//ranges
noUiSlider.create(m_range_money_control, {
    start: parseInt(m_price / 2),
    connect: [true, false],
    step: 10000,
    range: {
        'min': m_price * 0.1,
        'max': m_price * 0.9
    }
});
noUiSlider.create(m_range_time_control, {
    start: 8,
    // snap: true,
    connect: [true, false],
    range: {
        'min': [6],
        '15%': [7],
        '26%': [8],
        '33%': [9],
        '38%': [10],
        '43%': [11],
        '50%': [12],
        '75%': [24],
        'max': [36]
    }
});
m_range_money_control.noUiSlider.on('update', function (values, handle) {
    m_money_input.val(
        parseInt(values[handle]).toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$& ').replace('.00', '')
        + ' ₽');
});
m_range_time_control.noUiSlider.on('update', function (values, handle) {
    time_input.val(parseInt(values[handle]) + ' месяцев');
});
m_full_price_input.on('change', function (e) {
    if(!isNaN(+e.target.value) && e.target.value > 0){
        m_price = +e.target.value
        updateMobilePriceRange()
    }
})

function initMobileCalc() {
    m_money_input.on('focusin', function () {
        $(this).val('');
    })
    m_money_input.on('focusout', function (e) {
        if ($(this).val() === '' || isNaN($(this).val())) {
            m_range_money_control.noUiSlider.set(m_range_money_control.noUiSlider.value);
        } else if ($(this).val() < parseInt(m_price * .1)) {
            m_range_money_control.noUiSlider.set(0);
        } else if ($(this).val() > parseInt(m_price * .9)) {
            m_range_money_control.noUiSlider.set(99999999999);
        } else {
            let val = parseInt(+e.target.value);
            m_range_money_control.noUiSlider.set(val);
        }
    })
    m_time_input.on('focusin', function () {
        $(this).val('');
    })
    m_time_input.on('focusout', function (e) {
        if ($(this).val() === '' || isNaN($(this).val())) {
            m_range_time_control.noUiSlider.set(range_time_control.noUiSlider.value);
        } else if ($(this).val() < 6) {
            m_range_time_control.noUiSlider.set(0);
        } else if ($(this).val() > 36) {
            m_range_time_control.noUiSlider.set(36);
        } else {
            let val = e.target.value;
            m_range_time_control.noUiSlider.set(val);
        }
    })
}
function updateMobilePriceRange() {
    m_range_money_control.noUiSlider.updateOptions({
        start: parseInt(m_price / 2),
        connect: [true, false],
        step: 10000,
        range: {
            'min': m_price * 0.1,
            'max': m_price * 0.9
        }
    });
}

initMobileCalc()





