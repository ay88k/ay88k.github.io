// JavaScript Document
var
  cursor = $(".cursor"),
  cWidth = 10,
  delay = 1,
  mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0;

TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function () {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;


    TweenMax.set(cursor, {
      css: {
        left: mouseX - (cWidth / 2),
        top: mouseY - (cWidth / 2)
      }
    });
  }
});

$(document).on("mousemove", function (e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

$("a").on({
  "mouseenter": function () {
    cursor.addClass("is-active");
  },
  "mouseleave": function () {
    cursor.removeClass("is-active");
  }
});
