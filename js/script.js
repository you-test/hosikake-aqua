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

    
$(window).scroll(function(){
    let position = $(window).scrollTop() / 2.5;
    $('#scroll-img img').css({
      "transform" : "translateY("+position+"px)"
  });
});

});