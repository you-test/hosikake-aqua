$(function() {

$('.menu-btn').on('click', function() {
  $('.header-nav').fadeToggle(300);
  $('.musk, .menu, .close').toggleClass('open');
});

$('.mv-slick').slick({
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  speed: 1800,
});

$(window).on('scroll', function() {
  let scrollTop = $(window).scrollTop();
  let imgPosition = scrollTop / 2;

  if(imgPosition) {
    $('.scroll-img').css('transfrom', 'translateY(' + imgPosition + 'px)');
  }
});












});