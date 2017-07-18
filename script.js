$(document).ready(() => {
        console.log('script loaded');
         var inProgress = false
$(window).scroll(function() {
  if (!inProgress) {
    inProgress = true;
    $('.baffle').each(function(i) {
      (function() {
        var Baffle;
        Baffle = function() {
          function Baffle() {
            var $baffle, b;
            $baffle = $('.baffle');
            b = baffle('.baffle', {
              characters: '+-\u2022~\u2591\u2588\u2593 \u2593\u2592\u2591!=*',
              speed: 100
            });
            $baffle.addClass('is-started');
            b.start();
            b.reveal(2000);
            setTimeout(()=>inProgress = false,2500)
          }
          return Baffle;
        }();
        $(function() {
          return new Baffle();
        });
      }.call(this));
    });
  } else {
    console.log('throttled');
  }
});




    }) // ends document.ready
