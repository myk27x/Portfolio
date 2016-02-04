function animateMedia() {
  window.addEventListener('scroll', function(){
    distanceY = window.pageYOffset || document.documentElement.scrollTop

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
    if ((($('#main').position().top - distanceY )< 51) && ($('#navFiller').height() < 51)) {
      $('#navFiller')
      .css('top', ($('#header').height() - distanceY))
      .css('height', ((($('#header').height() - 50)- distanceY)*-1))
      if ($('#navFiller').height() > 50) {
        $('#navFiller').css('top', 0).css('height', 50)
      }
    } else {
      $('#navFiller').css('top', 50).css('height', 0)
    }

  });
};
