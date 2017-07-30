$(document).ready(function (){
  $("#about").click(function (){
    $('html, body').animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
  });

  $(".droparrow-properties").click(function (){
    $('html, body').animate({
      scrollTop: $("#about-section").offset().top
    }, 1000);
  });

  // Top Menu Positioning
  var num = 1; //number of pixels before modifying styles

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar-links').addClass('fixed');
    } else {
        $('.navbar-links').removeClass('fixed');
    }
  });

  var windowXArray = [],
    windowYArray = [];

for (var i = 0; i < $(window).innerWidth(); i++) {
    windowXArray.push(i);
}
    
for (var i = 0; i < $(window).innerHeight(); i++) {
    windowYArray.push(i);
}

function randomPlacement(array) {
    var placement = array[Math.floor(Math.random()*array.length)];
    return placement;
}
// ----------------------
    
  //Background Canvas
var canvas = oCanvas.create({
  canvas: '#canvas',
  background: '#00000',
  fps: 60
});

setInterval(function(){
  var rectangle = canvas.display.ellipse({
   x: randomPlacement(windowXArray),
   y: randomPlacement(windowYArray),
   origin: { x: 'center', y: 'center' },
   radius: 0,
   fill: '#80be00',
   opacity: 1
  });

  canvas.addChild(rectangle);

  rectangle.animate({
  radius: 7,
  opacity: 0
  }, {
    duration: '1000',
    easing: 'linear',
    callback: function () {
      this.remove();
    }
});

  }, 100);

$(window).resize(function(){
  canvas.width = $(window).innerWidth();
  canvas.height = $(window).innerHeight();
});

$(window).resize();
// ------------------

});
