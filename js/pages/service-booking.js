$('.finish-step').on('click', function () {

    let next_step = parseInt($(this).attr('step')) + 1,
        finished_step = parseInt($(this).attr('step'))
    console.log(next_step)
    $('.steps-row .item:nth-child(' + next_step + ')').addClass('active')
    $('.steps-row .item:nth-child(' + finished_step + ')').addClass('finished')
    $('html, body').animate({scrollTop: 0}, 500, function () {
    });
    $('.steps-stage').css('transform', `translateX(-${finished_step * 100}vw)`)
    //to not have a flex height of stage
    $('.steps-stage').css('height', `${$('.step-' + next_step + ' .container').outerHeight() + 120}px`)


})
$('.steps-stage').css('height', `${$('.step-1 .container').outerHeight() + 120}px`)