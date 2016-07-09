$(document).ready(

    function () {
       
        $("#showHome").click(
          function(){
            $('#riparazioni').fadeOut('slow');
            $('#contatti').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').delay(500).fadeIn('slow');

          }
        )
        $("#showRiparazioni").click(
          function(){
            $('#contatti').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#riparazioni').delay(500).fadeIn('slow');
          }
        )
        $("#showOrari").click(
          function(){
            $('#riparazioni').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#orari').delay(500).fadeIn('slow');
          }
        )
        $("#showContatti").click(
          function(){
            $('#riparazioni').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#contatti').delay(500).fadeIn('slow');
          }
        )

        $('#showPortfoliomobile').click(
           function(){
            $('#riparazioni').fadeOut('slow');
            $('#contatti').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').delay(500).fadeIn('slow');

          }
        );
        $('#showLavorimobile').click(
            function(){
            $('#contatti').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#riparazioni').delay(500).fadeIn('slow');
          }
        );
        $('#showScuolamobile').click(
            function(){
            $('#riparazioni').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#orari').delay(500).fadeIn('slow');
          }
        );
        $('#showContattimobile').click(
            function(){
            $('#riparazioni').fadeOut('slow');
            $('#orari').fadeOut('slow');
            $('#chisiamo').fadeOut('slow');
            $('#contatti').delay(500).fadeIn('slow');
            }
        );
        
    }
);


//WIP
/*
(function ($) {



  var getUnqueuedOpts = function (opts) {
    return {
      queue: false,
      duration: opts.duration,
      easing: opts.easing
    };
  };
  $.fn.fadeOutLeft = function (opts) {
    opts = opts || {};
    $(this).show().slideUp(opts).animate({ opacity: 0 }, getUnqueuedOpts(opts));
    /*hide().slideDown(opts).animate({ opacity: 1 }, getUnqueuedOpts(opts));
  };
  $.fn.fadeInRight = function (opts) {
    opts = opts || {};
    $(this).animate({ opacity: 1 }, opts).show("slide", { direction: "right" }, opts);
    /*show("slide", { direction: "right" }, opts).animate({ opacity: 1 }, opts);
    /*show().slideUp(opts).animate({ opacity: 0 }, getUnqueuedOpts(opts));
  };
  $.fn.verticalFade = function (opts) {
    opts = opts || {};
    if ($(this).is(':visible')) {
      $(this).hideUp(opts);
    } else {
      $(this).showDown(opts);
    }
  };
}(jQuery));*/



