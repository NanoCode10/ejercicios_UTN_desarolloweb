$(document).ready(function() {
    
    $('#myform').submit(function(e) {
      e.preventDefault(); // prevenir el envío del formulario
      $('#confirmacion').text('El formulario ha sido enviado.');

    });
});      