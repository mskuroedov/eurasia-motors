//selects
$(document).ready(function () {
    $('.select').select2({width: '100%'})
});

//animating label
let form_input = $('.form-input input'),
    form_label = $('.form-input label');
form_label.on('click', function () {
    $(this).next().focus();
})
form_input.on('focusin', function () {
    let input_container = $(this).parent();
    input_container.addClass('focus')
})
form_input.on('focusout', function () {
    if (!$(this).val()) {
        let input_container = $(this).parent();
        input_container.removeClass('focus')
    }
})

$('.reveal-input-icon').on('click', function () {
    let input = $(this).parent().find('input')
    input.attr('type', 'text');
    $(this).parent().addClass('revealed');
    input.focus();
});
$('.password-input-icon').on('click', function () {
    let input = $(this).parent().find('input')
    input.attr('type', 'password');
    $(this).parent().removeClass('revealed');
    input.focus();
});

//inputmask scripts
$(document).ready(function () {
    $('[data-inputmask]').inputmask({
        jitMasking: true
    });

    $('input[required]').on('focusout', function () {
        if ($(this).attr('data-inputmask')) {

            if ($(this).inputmask("isComplete")) {
                console.log()
                $(this).parent().addClass('--success')
                if ($(this).parent().hasClass('error')) {
                    $(this).parent().removeClass('error')
                }
            } else {
                $(this).parent().removeClass('--success')
                $(this).parent().addClass('error');
            }
        } else {
            if ($(this).val() === '') {
                $(this).parent().removeClass('--success')
                $(this).parent().addClass('error');
            } else {
                $(this).parent().addClass('--success')
                if ($(this).parent().hasClass('error')) {
                    $(this).parent().removeClass('error')
                }
            }
        }

    });

    $('#reg-password-r').on('focusout', function () {
        if ($(this).val() !== $('#reg-password').val()) {
            $(this).parent().find('.error-text').text('Пароли не совпадают')
            $(this).parent().addClass('error')
        }
        if ($(this).val() === '') {
            $(this).parent().find('.error-text').text('Пароль обязателен')
        }
    })
    $('#recover-password-r').on('focusout', function () {
        if ($(this).val() !== $('#recover-password').val()) {
            $(this).parent().find('.error-text').text('Пароли не совпадают')
            $(this).parent().addClass('error')
        }
        if ($(this).val() === '') {
            $(this).parent().find('.error-text').text('Пароль обязателен')
        }
    })

});

//smooth scroll
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    };
                });
            }
        }
    });