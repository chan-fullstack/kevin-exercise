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

  var _initSmoothScrolling = function () {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 500, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function () {
    _initSwipers();
    _shrink_header();
    _initSmoothScrolling();
  };

  return {
    init: init
  };
})();
