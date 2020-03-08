AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _initSwipers = function() {
    // private stuff

    var swiper = new Swiper('.testimonials-slider', {
      pagination: {
        el: '.swiper-pagination',
      },
    });


  };

  // var _changeNavbarBackground = function () {
  //   $('.navbar-toggler').on('click', function () {
  //     $('.navbar').toggleClass('ke-navbar-open');
  //   });
  // }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function () {
    _initSwipers();
    // _changeNavbarBackground();
  };

  return {
    init: init
  };
})();
