AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _initSwipers = function () {
    // private stuff

    var swiper = new Swiper('.testimonials-slider', {
      pagination: {
        el: '.swiper-pagination',
      },
    });


  };

  var _shrink_header = function () {
    $(document).on("scroll", function () {
      if ($(document).scrollTop() > 100) {
        $(".navbar").addClass("ke-header-shrink");
      } else {
        $(".navbar").removeClass("ke-header-shrink");
      }
    });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function () {
    _initSwipers();
    _shrink_header();
  };

  return {
    init: init
  };
})();
