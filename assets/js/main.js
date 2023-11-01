$(document).ready(function () {
  // Magnific Popup Active
  $(".popup-image").magnificPopup({
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

  // Projects Filter

  // init Isotope
  var $grid = $('.project-items').isotope({
    // options
  });
  // filter items on button click
  $('.projects-menu').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.projects-menu').on('click', 'li', function () {
    $(this).siblings(".active").removeClass('active');
    $(this).addClass("active");
  })

});

