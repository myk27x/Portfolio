$(document).ready(function(){

  $('#toTop').click(function(){
    console.log("I clicked");
    $('body').animate({scrollTop: $('#header').offset().top}, 600);
  })

  $('#toAbout').click(function(){
    $('body').animate({scrollTop: $('#about').offset().top - 10}, 600);
  });

  $('#toProjects').click(function(){
    $('body').animate({scrollTop: $('#projects').offset().top -15}, 600);
  });

  $('#openContact').children('.navlinks').click(function(){
    $('#info').slideToggle(500);
    if ($(this).css('display') == 'block') {
      $('#info').css('display', 'flex')
    }
  });

});
