(function ($) {

  'use strict';

    $('#imageGallery').lightSlider({
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