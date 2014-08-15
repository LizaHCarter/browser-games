(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addColor);
    $('#colors').on('click', '.color', paintBox);
    $('#canvas').on('mouseenter', '.pixel', paintPixel);
    makeCanvas();
  });

  function paintPixel(){
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  }

  function makeCanvas(){
    for(var i= 0; i < 10000; i++){
      var $pixel = $('<div>');
      $pixel.addClass('pixel');
      $('#canvas').append($pixel);
    }
  }

  function addColor(){
    var color   = $('input[type=color]').val(),
        $color  = $('<div>');
    $color.addClass('color');
    $color.css('background-color', color);
    $('#colors').append($color);
  }
  function paintBox(){
    var color = $(this).css('background-color');
    $('#selected').css('background-color', color);
  }

})();

