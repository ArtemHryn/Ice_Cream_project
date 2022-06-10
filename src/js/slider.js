$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 800,
    mobileFirst: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    variableWidth: true,
  });
});
