var fade = {
  flag: false,
  isIE: navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/), //判断是否为IE
  show: function(obj, fn) //渐显
    {
      var i = 0;
      fade.flag = window.setInterval(
        function() {
          if (!fade.isIE) {
            if (i <= 1) {
              obj.style.opacity = (i += 0.01);
            } else {
              fade.clearFade();
            }
          } else {
            if (i <= 100) {
              obj.style.filter = "alpha(opacity=" + (i += 1) + ")";
            } else {
              fade.clearFade();
            }
          }
        }, 20
      );
    },
  hide: function(obj, fn) //渐隐
    {
      var i = fade.isIE ? 100 : 1;
      fade.flag = window.setInterval(
        function() {
          if (!fade.isIE) {
            if (i >= 0) {
              obj.style.opacity = (i -= 0.01);
            } else {
              fade.clearFade();
            }
          } else {
            if (i >= 0) {
              obj.style.filter = "alpha(opacity=" + (i -= 1) + ")";
            } else {
              fade.clearFade();
            }
          }
        }, 10
      );
    },
  clearFade: function() {
    clearInterval(fade.flag);
  }
}
