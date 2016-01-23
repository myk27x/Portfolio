$(document).ready(function(){

  $('#toTop').click(function(){
    $('body').animate({scrollTop: $('#header').offset().top}, 600);
  })

  $('#toAbout').click(function(){
    $('body').animate({scrollTop: $('#about').offset().top - 35}, 600);
  });

  $('#toProjects').click(function(){
    $('body').animate({scrollTop: $('#projects').offset().top -32}, 600);
  });

  $('#openContact').children('.navlinks').click(function(){
    $('#info').slideToggle(500);
  });

});
