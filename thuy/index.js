function type(output, lines, idx_l = 0, idx_c = 0) {
  var $output = $(output);
  $output.addClass('typing');
  let rand = 40 + Math.round(Math.random()*100);
  if(lines[idx_l] === undefined) {
    $output.removeClass('typing');
    return;
  }
  setTimeout(function() {
    if(lines[idx_l][idx_c] === undefined) {
      $output.append('<br>');
      type(output, lines, ++idx_l);
    }
    else
    {
      $output.append(lines[idx_l][idx_c]);
      type(output, lines, idx_l, ++idx_c);
    }
  }, rand);
}

$(document).ready(function() {
  var content = [];
  $('.prompt p').each(function(idx) {
    content[idx] = $(this).text();
  });
  type($('.output'), content);

});
