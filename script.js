$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_flower = $("#flower");
  
    envelope.click(function () {
      open();
    });
    btn_open.click(function () {
      open();
    });
    btn_reset.click(function () {
      close();
    });
    btn_flower.click(function () {
      createSunflower();
    });
  
    function open() {
      envelope.addClass("open").removeClass("close");
    }
    function close() {
      envelope.addClass("close").removeClass("open");
    }
    
    function createSunflower() {
        var flower = $('<div class="sunflower"></div>');
        for (let i = 0; i < 12; i++) {
            flower.append('<div class="petal"></div>');
        }
        flower.append('<div class="center"></div>');
        $('body').append(flower);
    }
  });
  $(document).ready(function() {
    // Mostrar la imagen cuando se hace clic en el botón "Mirame"
    $('#flower').click(function() {
      $('#image-container').removeClass('hidden').fadeIn();
    });
  
    // Opción para cerrar la imagen
    $('#reset').click(function() {
      $('#image-container').fadeOut().addClass('hidden');
    });
  });
  