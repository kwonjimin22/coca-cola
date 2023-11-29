$(function () {
  const $window = $(window);
  const $header = $('#header');

  $window.on('wheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      $header.removeClass('hide');
    } else {
      $header.addClass('hide');
    }
  });
});
