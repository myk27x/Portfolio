function animateMedia() {

// animate top page text into view on load -- independent of scroll
  function showIntro() {
    $('#welcome').fadeIn(1000);
  }

  function slideIn1() {
    $('#name').animate({'left':'0%'},700);
  };

  function slideIn2(){
    $('#subName').animate({'left':'0%'},700);
  };

  setTimeout(showIntro, 500);
  setTimeout(slideIn1, 1500);
  setTimeout(slideIn2, 2500);

// function variables un-modified by scroll event
  var stop = 0
  var shown = false
  var position = $(window).scrollTop();

// start of scroll event listener
  $(window).scroll(function(){
    distanceY = window.pageYOffset || document.documentElement.scrollTop

// animates text on top page
    if ((distanceY > 150) && (stop == 0) && (distanceY > position)) {
      $('#name').animate({'left':'-100%'}, 200,
        function(){
          $(this).css('left', '100%');
        })
      $('#subName').animate({'left':'100%'}, 200,
        function(){
          $(this).css('left', '-100%');
        })
      $('#welcome').animate({'top':'-65px'}, 200);
      stop++
    } else if ((distanceY < 400) && (stop == 1) && (distanceY < position)) {
      $('#name, #subName').animate({'left':'0%'},400);
      $('#welcome').animate({'top':'0px'}, 400);
      stop--
    }
    position = distanceY;

// toggles toTop div when scrolling down
    switch (true) {
      case ((distanceY > 150) && shown == false):
        $('#footerOverlay').slideDown(400)
        shown = true
        break;
      case ((distanceY < 150) && shown == true):
        $('#footerOverlay').slideUp(400);
        shown = false
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
    // function highlight(section, navlink, color, next, sectionOffset, nextOffset) {
    //   if (($(section).position().top <= distanceY + sectionOffset) && !($(next).position().top <= distanceY + nextOffset)) {
    //     $(navlink).css('background-color', color).css('color', 'black').css('font-size', '20px');
    //   } else {
    //     $(navlink).css('background-color', '').css('color', '').css('font-size', '');
    //   }
    // }
    //
    // highlight('#main', '#toProjects', 'white', '#about', 30, 50);
    // highlight('#about', '#toAbout', 'lightgray', '#contact', 50, 50);
    // highlight('#contact', '#toContact', '#5D5D5D', '#photo', 50, 50);

    function highlight(section, navlink, color, next, sectionOffset, nextOffset) {
      if (($(section).position().top <= distanceY + sectionOffset) && !($(next).position().top <= distanceY + nextOffset)) {
        $(navlink).css('background-color', color).css('color', '')
          .children().fadeIn(300);
      } else {
        $(navlink).css('background-color', '').css('color', '')
          .children().fadeOut(100);
      }
    }

    highlight('#main', '#toProjects', '', '#about', 30, 50);
    highlight('#about', '#toAbout', '', '#contact', 50, 50);
    highlight('#contact', '#toContact', '', '#photo', 50, 50);

  });
};
