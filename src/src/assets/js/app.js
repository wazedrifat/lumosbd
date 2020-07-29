 
window.onload = function(){
   setInterval(function(){
       $('body').addClass( 'loaded' );
   }, 3000);
};
$('#home_slider_text').carousel({
    interval: false,
    ride: false,
    touch: true
});
$('#expand_menu_icon').click(function () {
   $('.expand_menu').toggleClass('active');
});

 $('.trash_icon').click(function () {
    $(this).closest('li').remove();
 });

 $(".sub-category-item-head .btn-group .btn").click(function() {
   //  $(".sub-category-item-head .btn-group .btn.active").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".carousel-item .bookmark_icon a").click(function(){
   $(this).toggleClass("active");
 });

/************* Flash Card  **************/

  var totalSteps = 3;
$('#flashcard-slider').carousel({
   interval: false,
   wrap:false
});
$('#flashcard-slider').on('slide.bs.carousel', function (e) {
  var step = $(e.relatedTarget).data('step');
  var percent = (parseInt(step) / totalSteps) * 100;

  $('.progress-bar').css({width: percent + '%'});
  $('.number span').text(step);
  
})

$('.flip').click(function(){
  //alert("xzXZ");
   $(this).find('.card').toggleClass('flipped');
   return true;
 });