
 //Ejercicio 10
 
 function IngresarDatos(){
    do
    var mes = parseInt (prompt("Ingrese un mes en mes para saber cuantos dias tiene el mes ") );   
    while ( (mes > 12) || (mes <= 0));
    return mes;
 }
 
 var getDaysInMonth = function(month,year) {
   
   return new Date(year, month, 0).getDate();
 
  };
  alert('El mes que ingreso tiene ' +(getDaysInMonth(IngresarDatos(), 2023)) + ' dias' );
  