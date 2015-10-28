$(document).ready(function () {
  $('[data-typer-targets]').typer();
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