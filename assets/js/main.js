$(document).ready(function () {
  // Magnific Popup Active
  $(".project-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".video-popup").magnificPopup({
    type: "iframe"
  });

  // Counter Active
  $(".counterup").counterUp();

  // Slick JS
  $('.testimonials').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    loop: true
  });
  // Slick JS
  $('.clients').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    loop: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  });

});

// sticky menu
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 20) {
    $('.header-area').addClass('sticky');
  } else {
    $('.header-area').removeClass('sticky');
  }
});

