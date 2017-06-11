$(function scro(){
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".sample").offset().top},
        'slow');
});
});