function animateMedia() {
  picWidth = document.getElementById('photo').offsetWidth
  window.addEventListener('scroll', function(){
    distanceY = window.pageYOffset || document.documentElement.scrollTop
    shrinkOn = 1;

// resizes profile image on scroll
    if (distanceY > shrinkOn){
      $('#photo').css('width', (picWidth-(distanceY-29)))
    }

// adjusts social media links to sit in navbar when div enters desired position
    leftGap = (88 + ((distanceY-265)/2))
    if (leftGap > 109){
      leftGap = 110
    }
    if (distanceY >= 249){
      headHeight = ($('#header').height()+3)
      $('#media-links')
        .addClass('fix2nav')
        .css('top', (headHeight-distanceY))
      if (distanceY >= 265){
        $('#media-links')
          .css('left', leftGap)
      }
      if ($('#media-links').position().top < 21){
        $('#media-links')
          .css('top', 20)
          .css('left', 110)
        $('#name')
          .css('position', 'absolute')
        if ((distanceY >= 348) && (distanceY < 388)) {
          $('#name')
            .css('left', (53 + ((distanceY-265)/2)))
        }
        if (pageYOffset >= 389) {
          $('#name')
            .css('top', (distanceY+38))
            .css('left', 114)
        }
      }
    } else {
      $('#media-links')
        .removeClass('fix2nav')
        .css('left', '')
        .css('top', '')
      $('#name')
        .css('position', '')
        .css('left', '')
        .css('top', '')
    }
  });
};
