document.addEventListener('DOMContentLoaded', function(){
  var el = document.getElementById("main");

  function fadeIn(el) {
    el.style.opacity = 0;


    var tick = function() {
      el.style.opacity = +el.style.opacity + 0.01;


      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
      }
    };

    tick();
  }
  fadeIn(el);
}, false);
