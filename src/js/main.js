(function ($) {

  'use strict';

    //Слайдер с галереей
    $('#product1').lightSlider({
      galleryMargin: 30,
      controls: false,
      gallery:true,
      item:1,
      loop:true,
      thumbItem:4,
      slideMargin:0,
      thumbMargin:0,
      enableDrag: false,
      currentPagerPosition:'middle',
      onSliderLoad: function(el) {
        el.lightGallery({
          selector: '#product1 .lslide'
        });
      }
    });

  $('#product2').lightSlider({
    galleryMargin: 30,
    controls: false,
    gallery:true,
    item:1,
    loop:true,
    thumbItem:4,
    slideMargin:0,
    thumbMargin:0,
    enableDrag: false,
    currentPagerPosition:'middle',
    onSliderLoad: function(el) {
      el.lightGallery({
        selector: '#product2 .lslide'
      });
    }
  });

  //Прокрутка плавная
  $('#product_n').on('click', function (e) {

    e.preventDefault();

    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');

    var plansOffset = $('#product').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#demo_n').on('click', function (e) {

    e.preventDefault();

    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');

    var plansOffset = $('#demo').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#form_n').on('click', function (e) {

    e.preventDefault();

    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');

    var plansOffset = $('#form').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#btn-scroll-demo').on('click', function (e) {

    e.preventDefault();

    var plansOffset = $('#demo').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#form-call').on('click', function (e) {

    e.preventDefault();

    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');

    var plansOffset = $('#form').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  //Работа гамбургера меню
  document.querySelector('.menu-hamburger').addEventListener('click', function () {
    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');
  });

  document.querySelector('.film').addEventListener('click', function () {
    document.querySelector('.menu-hamburger__icon').classList.toggle('menu-hamburger__icon_active');
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.phone').classList.toggle('phone_active');
    document.querySelector('.film').classList.toggle('film_active');
  });

})(jQuery);