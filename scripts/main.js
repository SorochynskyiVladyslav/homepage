$(document).ready(() => {
    $('#contacts').hide();
    console.log($(window).width());
    if ($(window).width() >= 560) $('#avatar').removeClass("centered medium circular image").addClass("left floated medium circular image");;

    $('#contact-button').on('click', ()=>{
        $('#contacts').toggle(300);
    })

    $( window ).resize(function() {
        if ($(window).width()<= 560)
            $('#avatar').removeClass("left floated medium circular image").addClass("centered medium circular image");
        else
            $('#avatar').removeClass("centered medium circular image").addClass("left floated medium circular image");
        });

});