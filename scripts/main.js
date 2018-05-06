$(document).ready(() => {
    $('#contacts').hide();

    check_screen($(window).width());

    if ($(window).width() >= 560) $('#avatar').removeClass("centered small circular image").addClass("left floated medium circular image");;

    $('#contact-button').on('click', ()=>{
        $('#contacts').toggle(300);
    })

    $( window ).resize(function() {
        check_screen($(window).width());
        });

    $('.life-event').on('click', ()=>{
        $(event.currentTarget).siblings().toggle(300);
    })
    $('.life-event').on('mouseenter', ()=>{
        $(event.currentTarget).css({
            'color': 'rgb(100, 154, 205)',
            'cursor': 'pointer'
        });
    }).on('mouseleave', ()=>{
        $(event.currentTarget).css({
            'color': 'black',
            'cursor': 'default'
        });
    })
});

function check_screen(width){
    if (width <= 560)
        $('#avatar').removeClass("left floated medium circular image").addClass("centered small circular image");
    else
        $('#avatar').removeClass("centered small circular image").addClass("left floated medium circular image");
    if (width < 750) {
        $('#left-section').removeClass("teal");
        $('.facebook.icon').removeClass('black').addClass('blue');
        $('.google.icon').removeClass('black').addClass('red');
    }
    else if (!$('#left-section').hasClass("teal")) {
        $('#left-section').addClass("teal");
        $('.facebook.icon').removeClass('blue').addClass('black');
        $('.google.icon').removeClass('red').addClass('black');
    }
}