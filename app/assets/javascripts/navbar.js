$(document).ready(function(){

  function view(clicked, goto) {
    $(clicked).click(function(){
      $('body').animate({scrollTop: $(goto).offset().top}, 600);
    })
  }

  view('#toTop'     , '#header');
  view('#toAbout'   , '#about');
  view('#toProjects', '#projects');
  view('#toContact' , '#contact');

});
