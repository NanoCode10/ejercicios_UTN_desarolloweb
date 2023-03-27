
//Ejercicio 4

var lado;
function IngresarDatos(){
   
    lado = parseInt (prompt("Ingrese El lado de un cuadrado para el calculo de superficie y perimetro") );   
   
}
function calculo(){
   superficie = lado * lado;
   perimetro = lado * 4;
}
IngresarDatos();
calculo();
console.log('La superficie es '+ superficie + 'cm2');
console.log('El perimetro es '+ perimetro + 'cm');

