$(document).ready(function(){

  $('#toTop').click(function() {
    if (pageYOffset < 75){
      $('body').animate({scrollTop: $('#projects').offset().top},1300);
    } else {
      $('body').animate({scrollTop: $('#header').offset().top},1300);
    }
  });

  function clickGoto(clicked, goto) {
    $(clicked).click(function(){
      $('body').animate({scrollTop: $(goto).offset().top}, 1300);
    })
  };

  clickGoto('#toAbout'   , '#about');
  clickGoto('#toProjects', '#projects');
  clickGoto('#toContact' , '#contact');

});
