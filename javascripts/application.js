$(function() {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var canvasWidth = $(document).width();
  var canvasHeight = $(document).height();

  var radius = 300;

  $("#bubbles").append("<div id='first-bubble'/>");
  $("#first-bubble").css ({
    'border-radius': radius/2,
    'height': radius,
    'left': getRandomInt(0, canvasWidth),
    'margin-top': -radius/2,
    'margin-left': -radius/2,
    'top': getRandomInt(0, canvasHeight),
    '-webkit-animation-duration': getRandomInt(1, 10) + 's',
    'width': radius
  });
});

