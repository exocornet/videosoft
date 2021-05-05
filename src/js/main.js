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
          selector: '#imageGallery .lslide'
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
        selector: '#imageGallery .lslide'
      });
    }
  });



})(jQuery);