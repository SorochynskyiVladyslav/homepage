$(document).ready(() => {
    $('#contacts').hide();

    $('#contact-button').on('click', ()=>{
        $('#contacts').toggle(300);
    })

});