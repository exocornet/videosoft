(function ($) {

  'use strict';

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


  $('#product_n').on('click', function (e) {

    e.preventDefault();

    var plansOffset = $('#product').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#demo_n').on('click', function (e) {

    e.preventDefault();

    var plansOffset = $('#demo').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });

  $('#form_n').on('click', function (e) {

    e.preventDefault();

    var plansOffset = $('#form').offset().top;

    $('html, body').animate({
      scrollTop: plansOffset
    }, 1000);

  });


})(jQuery);