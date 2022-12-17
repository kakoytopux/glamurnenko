// прикрепление верхнего меню к верху окна
$(window).scroll(() => {
  let coordinates = $('.consultations').offset().top;
  let verticalPos = $(this).scrollTop();

  if (verticalPos >= coordinates) {
    $('.header').addClass('header_type_position');
  } else if(verticalPos < coordinates) {
    $('.header').removeClass('header_type_position');
  }
});

// плавная прокрутка вверх
$('.footer__up').click(() => {
  $('#body').get(0).scrollIntoView({behavior: "smooth"});
});

// burger menu на маленьких экранах
$('.header__navigation').click(evt => {
  if ($(evt.target).is($('.header__navigation'))) {
    $('.header__lists').toggleClass('header__lists_type_display');
    $('.header__navigation').toggleClass('header__navigation_type_close');
  }
});