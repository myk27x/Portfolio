function animateMedia() {

// animate top page text into view on load -- independent of scroll
  function showIntro() {
    $('#container').animate({'opacity':'1'},2000)
    $('#name, #subName').animate({'top':'0%'},1000);
  }

  showIntro();

// function variables un-modified by scroll event
  var stop = 0
  var up = false
  var position = $(window).scrollTop();

// start of scroll event listener
  $(window).scroll(function(){
    distanceY = window.pageYOffset || document.documentElement.scrollTop

// animates text on top page
    if ((distanceY > 150) && (stop == 0) && (distanceY > position)) {
      $('#welcome, #name, #subName').animate({'top':'-100%'}, 200);
      stop++
    } else if ((distanceY < 400) && (stop == 1) && (distanceY < position)) {
      $('#welcome, #name, #subName').animate({'top':'0%'},400);
      stop--
    }
    position = distanceY;

// toggles toTop arrow when scrolling down
    switch (true) {
      case ((distanceY > 75) && up == false):
        $('#toTop').css('transform', 'rotate(0deg)');
        up = true
        break;
      case ((distanceY < 75) && up == true):
        $('#toTop').css('transform', 'rotate(180deg)');
        up = false
        break;
      default:
    }

// start filling navbar background when project(main) div meets bottom of navbar
    if ((($('#main').position().top - distanceY )< 83) && ($('#navFiller').height() < 51)) {
      $('#navFiller')
      .css('top', ($('#header').height() - distanceY))
      .css('height', ((($('#header').height() - 50)- distanceY)*-1))
      if ($('#navFiller').height() > 50) {
        $('#navFiller').css('top', 0).css('height', 50)
      }
    } else {
      $('#navFiller').css('top', 50).css('height', 0)
    }

// highlights navbar sections as section indicators
    function highlight(section, navlink, color, next, sectionOffset, nextOffset) {
      if (($(section).position().top <= distanceY + sectionOffset) && !($(next).position().top <= distanceY + nextOffset)) {
        $(navlink).css('background-color', color).css('color', '')
          .children().fadeIn(400);
      } else {
        $(navlink).css('background-color', '').css('color', '')
          .children().fadeOut(100);
      }
    }

    highlight('#main', '#toProjects', '', '#about', 30, 50);
    highlight('#about', '#toAbout', '', '#contact', 50, 50);
    highlight('#contact', '#toContact', '', '#footer', 50, 50);

  });
};
