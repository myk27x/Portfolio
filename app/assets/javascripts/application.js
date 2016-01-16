// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require jquery.modal
//= require_tree .

$(function() {
    var canvas = document.createElement("canvas");
    canvas.width = 30;
    canvas.height = 30;
    //document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "24px FontAwesome";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("\uf259", 15, 15);
    var dataURL = canvas.toDataURL('image/png')
    $('body').css('cursor', 'url('+dataURL+'), auto');
});

$(document).ready(function(){

  $.modal.defaults = ({
    overlay: "#000",
    opacity: 0.80,
    zIndex: 1,
    escapeClose: true,
    clickClose: true,
    closeText: 'Close',
    modalClass: "modal",
    spinnerHtml: null,
    showSpinner: false,
    showClose: true,
    fadeDuration: 300,    // Number of milliseconds the fade animation takes.
    fadeDelay: .75        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  });

  $('#contact').children('.navlinks').click(function(){
    $('#info').slideToggle(500);
  });

  cycleImages();
  cycleColors();
  animateMedia();

});
