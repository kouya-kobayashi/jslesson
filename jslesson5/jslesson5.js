$(function () {
    $("#button").on("click", function () {
      var v = $('input').val();
      if (v == 1) {
        $('#box').css('background-color', 'red');
      }
      else if (v == 2) {
        $('#box').css('background-color', 'green');
      }
      else if (v == 3) {
        $('#box').css('background-color', 'blue');
      }
     else {
        $('#box').css('background-color', 'white');
      }
    }
  
    )});