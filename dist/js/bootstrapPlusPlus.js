$(document).ready(function(){

  /* script for dropdown on hover */
  $('.dropdown-hover').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
  });

  /* script for label color */
  $('.form-group').click(function(){
    $(this).addClass('label-focus');
  });
  $('input').blur(function(){
    $('.form-group').removeClass('label-focus');
  });

});
