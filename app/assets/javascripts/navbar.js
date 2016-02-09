$(document).ready(function(){

  function view(clicked, goto) {
    $(clicked).click(function(){
      $('body').animate({scrollTop: $(goto).offset().top}, 1300);
    })
  }

  view('#toTop'     , '#header');
  view('#toAbout'   , '#about');
  view('#toProjects', '#projects');
  view('#toContact' , '#contact');

});
