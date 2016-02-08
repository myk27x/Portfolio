$(document).ready(function(){

  function view(clicked, goto) {
    $(clicked).click(function(){
      $('body').animate({scrollTop: $(goto).offset().top}, 1300);
      // $(this).children().fadeIn();
    })
  }

  view('#toTop'     , '#header');
  view('#toAbout'   , '#about');
  view('#toProjects', '#projects');
  view('#toContact' , '#contact');

});
