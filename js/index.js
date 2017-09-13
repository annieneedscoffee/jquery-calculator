$(document).ready(function(){
  $('span').on('click', function(){
    if($(this).text() !== '='){
    var copy = $(this).clone();
    console.log(copy);
    $(copy).appendTo('#screen');
  }});
    $('#equals').on('click', function(){
      var total = $('#screen').text();
      console.log("hello");
      var answer = eval(total);
      console.log(total);
      $('#screen').empty();
      // $('#screen').appendTo(answer);

      $('#screen').text(answer);
  })
    $('#clear').on('click', function(){
      $('#screen').empty();
    })
  })
