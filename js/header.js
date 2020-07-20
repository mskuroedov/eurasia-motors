$('.header .menu-btn').on('click', function () {
    $('.mobile__menu').addClass('--open');
    $('body').addClass('mobile-menu-opened')
})
$('.mobile__menu .menu-btn').on('click', function () {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.level.second').addClass('d-none');
        $('.level.main').removeClass('d-none');
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
})
$('.mobile__menu__bg').on('click', function () {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.level.second').addClass('d-none');
        $('.level.main').removeClass('d-none');
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
});
$('[mm-data]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let section = $(this).attr('mm-data');
    $('.level.second' + section).removeClass('d-none');
    $('.level.main').addClass('d-none');
})
$('.level.second .back').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let id = $(this).parent().parent().attr('id');
    $('.level.second#' + id).addClass('d-none');
    $('.level.main').removeClass('d-none');

})
//header highlight on scroll
$(window).on('scroll', function (e) {
    if (window.innerWidth < 1200) {
        return;
    }
    if (window.pageYOffset > 50) {
        $('.header .desktop').addClass('--highlighten')
    } else {
        $('.header .desktop').removeClass('--highlighten')
    }
});
$(document).ready(function () {
    if (window.innerWidth < 1200) {
        return;
    }
    if (window.pageYOffset > 50) {
        $('.header .desktop').addClass('--highlighten')
    } else {
        $('.header .desktop').removeClass('--highlighten')
    }
})
//header desktop menu managing
let menu_content = {
    services:
        '<a href="#">Trade-in</a>\n' +
        '<a href="#">Кредитование</a>\n' +
        '<a href="#">Страхование</a>\n' +
        '<a href="#">Корпоративным клиентам</a>\n' +
        '<a href="#">Сервисное обслуживание</a>\n' +
        '<a href="#">Кузовной ремонт</a>\n' +
        '<a href="#">Срочный выкуп авто</a>',
    sale:
        '<a href="#">Спец предложения</a>\n' +
        '<a href="#">Спец предложения</a>\n' +
        '<a href="#">Спец предложения</a>\n' +
        '<a href="#">Спец предложения</a>',
    news:
        '<a href="#">Новости</a>\n'+
        '<a href="#">Акции</a>'
}
$('.header .popup-link[data-popover="services"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.services
})
$('.header .popup-link[data-popover="sale"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.sale
})
$('.header .popup-link[data-popover="news"]').popover({
    html: true,
    placement: 'bottom',
    trigger: 'focus',
    template: '<div class="header-menu-popover popover" role="tooltip"><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    content: menu_content.news
})