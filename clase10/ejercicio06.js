var colores =  ["azul", "amarillo", "rojo", "verde", "café", "rosa"] ;

$(document).ready(function() {
    $('#button').click(function() {
      var color = $('#color').val();
       
      var compara = colores.some(function(colorArray) {
        return color === colorArray; 
        

      });  

      
      if( compara ){
        alert("El color ingresado esta en el array");
      }else{
        alert("El color ingresado no esta en el array");
      }
      
    });
  });
