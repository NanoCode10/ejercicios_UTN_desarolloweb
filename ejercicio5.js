
//Ejercicio 5

var fahrenheit;
function IngresarDatos(){
   
    fahrenheit = parseInt (prompt("Ingrese grados fahrenheit para convertirlo a celcius") );   
   
}
function convertidorCelcius(){
    celcius = (fahrenheit - 32) * 5/9;

}
IngresarDatos();
convertidorCelcius();
alert('Los Grados convertidos a celcius es ' + celcius);

