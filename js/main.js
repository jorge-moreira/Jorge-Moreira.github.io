$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
});

function tooltip(tag, message) {
    $(tag).tooltip({
        delay: 50,
        tooltip: message
    });
}