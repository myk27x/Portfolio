var images = new Array('bricks.jpg', 'binary_world.jpg')
var nextImage = 0
function cycleImages(){
  if(nextImage >= images.length){ nextImage=0; }
  $('#header')
  .css('background-image', 'url("'+images[nextImage++]+'")')
  .fadeIn(1000, function(){
    setTimeout(cycleImages,5000);
  });
};

var colors = new Array('black', 'white')
var nextColor = 0
function cycleColors(){
  if(nextColor >= colors.length){ nextColor=0; }
  $('#navbar')
  .css('color', colors[nextColor++])
  .fadeIn(1000, function(){
    setTimeout(cycleColors,5000);
  });
};
