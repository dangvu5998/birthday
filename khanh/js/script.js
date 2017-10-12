$(document).ready(function() {
  $('h1').show().lettering();
  // $('h1').addClass('animated lightSpeedIn');
  $('h1 span').hide();
  $('h1 span').each(function(index) {

    var that = this;
    setTimeout(function() {
      $(that).show().addClass('animated slideInUp');
      console.log('ok');
    }, 600*index);
  });
});