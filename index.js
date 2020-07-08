$(document).ready(function() {
    console.log("document ready");
    $("#about").click( function(event) {
    $('html,body').animate({
        scrollTop:$('.aboutUs').offset().top
    },500);
    });
    $('#projects').click(function(event) {
    $('html,body').animate({
        scrollTop:$('.project').offset().top
        },500);    
    });

    $('#contact').click( function(event) {
        $('html,body').animate({
            scrollTop:$('.contact').offset().top
            },500);    
        });
    $('.hamburger').click(function(event) {
        console.log('i am working');
        event.preventDefault();
        
    
    });
});