$('.readmore').click (function(){
    event.preventDefault()
    $('#show-this-on-click').show()
    $('.readmore').addClass('hide')
    $('.readless').removeClass('hide')
})

$('.readless').click (function(){
    event.preventDefault()
    $('#show-this-on-click').slideUp()
    $('.readmore').removeClass('hide')
    $('.readless').addClass('hide')
})

$('.learnmore').click (function(){
    event.preventDefault()
    $('#learnmoretext').slideDown()
    $('.learnmore').addClass('hide')
})