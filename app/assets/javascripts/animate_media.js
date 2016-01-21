function animateMedia() {
  picWidth = document.getElementById('photo').offsetWidth
  window.addEventListener('scroll', function(){
    distanceY = window.pageYOffset || document.documentElement.scrollTop
    shrinkOn = 1;

// resizes profile image on scroll
    if (distanceY > shrinkOn){
      $('#photo').css('width', (picWidth-(distanceY-29)))
    } else {
      $('#photo').css('width', picWidth)
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
        if ((distanceY >= 348) && (distanceY < 388)) {
          $('#name')
            .css('position', 'absolute')
            .css('top', '')
            .css('left', (53 + ((distanceY-265)/2)))
        }
        if (pageYOffset >= 389) {
          $('#name')
            .css('position', 'fixed')
            .css('top', 36)
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

    // slides toTop div up when after scrolling
    switch (true) {
      case (distanceY > 150):
        $('#footerOverlay').slideDown(400)
        break;
      case (distanceY < 150):
        $('#footerOverlay').slideUp(400);
        break;
      default:

    }
  });
};
