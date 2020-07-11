$(document).ready(function() {
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
    $(this).hide();
    $("#horizontal-list").addClass('active')
    $("#horizontal-list").animate({
        right: "0"
        },600,function() {
    $(".close").show();
    });

});

$('.close').click(function(event) {
    $(this).hide();
$("#horizontal-list").removeClass('active')
$("#horizontal-list").animate({
       right: "-80%"
  },600,function() {
    $(".hamburger").show();
    });
   
});

$('body').on('click', '#horizontal-list.active li', function() {
    $("#horizontal-list").removeClass('active')
    $(".close").hide();
    $("#horizontal-list").animate({
        right: "-80%"
        },600,function() {
    $(".hamburger").show();
        });
   
    });

});