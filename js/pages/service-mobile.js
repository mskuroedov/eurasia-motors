//mobile-applications
let calc_content = $('#mobile-service .content'),
    service_auto_input = $('#service-auto'),
    service_time_input = $('#service-time'),
    service_item_input = $('#service-item'),
    service_contacts_input = $('#service-contacts'),
    current_step = '1';

//nav functions
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
//input on-click go to
$('#mobile-service .left.back').on('click', goback)
service_auto_input.parent().on('click', function (e) {
    e.preventDefault();
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