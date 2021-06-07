$(document).ready(function () {
  /* ANIMATIONS */
  $('.main-content').addClass('main-show');
  $('.main-title').addClass('opacity-show');
  setTimeout(() => {
    $('.main-title').removeClass('opacity-show');
    $('.main-form').addClass('opacity-show');
  }, 4000);

  $(window).resize(()=>{
    if(window.screenX <= 1100){
      $('#cen').removeClass('col-4').addClass('col-10');
    } else {
      $('#cen').removeClass('col-10').addClass('col-4');
    }
  })
});