$(document).ready(function() {
  $('.menu-trigger').click(function () {
    $('header ul').slideToggle(500);
  });
});
$(window).resize(function() {
  if ($(window).width() > 500) {
    $('header ul').removeAttr('style');
  }
})
