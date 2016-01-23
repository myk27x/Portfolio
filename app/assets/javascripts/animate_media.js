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
      if (distanceY >= 337){
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

// toggles toTop div when scrolling down
    switch (true) {
      case (distanceY > 150):
        $('#footerOverlay').slideDown(400)
        break;
      case (distanceY < 150):
        $('#footerOverlay').slideUp(400);
        break;
      default:
    }

// fill the navbar background after scrolling down
    if ((distanceY >= 304) && ($('#navFiller').height() < 51)) {
      $('#navFiller')
        .css('top', (354 - distanceY))
        .css('height', (distanceY - 304))
      if ($('#navFiller').height() > 50) {
        $('#navFiller').css('top', 0).css('height', 50)
      }
    } else {
      $('#navFiller').css('top', 50).css('height', 0)
    }

// positions section names under navbar as section header
    if (distanceY >= 390) {
      $('#sectionHeader, #section1, #testSpacer').css('visibility', 'visible')
      if ((distanceY < 635) && ($('#sectionNames').position().top <= 0)) {
        $('#sectionNames').css('bottom', 0)
      }
      if (distanceY > 673 ) {
        $('#section2').css('visibility', 'visible')
        $('#sectionNames').css('bottom', (distanceY - 673))
      }
      if (distanceY > 740) {
        $('#sectionNames').css('bottom', 67)
      }
      if (distanceY < 706) {
        $('#section2').css('visibility', 'hidden')
      }
    } else {
      $('#sectionHeader, #section1, #section2, #testSpacer').css('visibility', 'hidden')
    }

  });
};
