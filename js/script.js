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

  // 슬라이더 플러그인 추가
  const pList = new Swiper('.p-list', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,

    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.p-btn .btn-next',
      prevEl: '.p-btn .btn-prev',
    },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
});
