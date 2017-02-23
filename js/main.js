$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({delay: 50});
    var options = [
        {selector: '#staggered-test', offset: 10, callback: function(el) {
            Materialize.fadeInImage("#me_image"); } },
        {selector: '#staggered-test', offset: 205, callback: function(el) {
            Materialize.toast("Please continue scrolling!", 1500 ); } },
        {selector: '#staggered-test', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el)); } },
        {selector: '#image-test', offset: 500, callback: function(el) {
            Materialize.fadeInImage($(el)); } } ];
    Materialize.scrollFire(options);
});

function tooltip(tag, message) {
    $(tag).tooltip({
        delay: 50,
        tooltip: message
    });
}