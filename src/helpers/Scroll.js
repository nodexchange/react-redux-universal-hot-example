/* eslint-disable */
// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

// main function

export default class Scroll {
  static scrollViewportToOffsetRatio() {
    const clientH = window.innerHeight;
    let scrollBarPosition = window.pageYOffset || document.body.scrollTop;
    if (scrollBarPosition === 0) {
      scrollBarPosition = 1;
    }
    const ratioValue = Math.round((scrollBarPosition / clientH) * 100) / 100;
    return ratioValue; 
  }
  static scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollTargetY = scrollTargetY || 0;
    speed = speed || 2000;
    easing = easing || 'easeOutSine';
    let currentTime = 0;

    // min time .1, max time .8 seconds
    const time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    const easingEquations = {
      easeOutSine: function (pos) {
        return Math.sin(pos * (Math.PI / 2));
      },
      easeInOutSine: function (pos) {
        return (-0.5 * (Math.cos(Math.PI * pos) - 1));
      },
      easeInOutQuint: function (pos) {
        if ((pos /= 0.5) < 1) {
          return 0.5 * Math.pow(pos, 5);
        }
        return 0.5 * (Math.pow((pos - 2), 5) + 2);
      }
    };

    // add animation loop
    function tick() {
      currentTime += 1 / 60;

      const p = currentTime / time;
      const t = easingEquations[easing](p);

      if (p < 1) {
        requestAnimFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
      } else {
        console.log('scroll done');
        window.scrollTo(0, scrollTargetY);
      }
    }

    // call it once to get started
    tick();
  }
  static isScrolledIntoView(el) {
    const elemTop = el.getBoundingClientRect().top;
    const elemBottom = el.getBoundingClientRect().bottom;

    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
    // document.documentElement.clientHeight
    // window.scrollTop
  }
}
/* eslint-enable */
