$(document).ready(function () {
  if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    $('[data-typer-targets]').typer();
  } else {
    $('.main-headline').text("Hey Pearl, add the last marketing expense and recalculate burn rate");
  }
  $('.down-arrow').click(function () {
    var $elem;
    if ($(this).hasClass('to-info-pane')) {
      $elem = $('.info-pane');
    } else if ($(this).hasClass('to-century-pane')) {
      $elem = $('.century-pane');
    } else {
      $elem = $('.end-pane');
    }
    $('html,body').animate({
     scrollTop: $elem.offset().top - 50
    });
  });
});