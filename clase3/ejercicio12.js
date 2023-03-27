//Ejercicio 12

var cantBultosCajas;
var cantBultos;
function IngresarDatos(){
    
     cantBultos = parseInt (prompt("Ingrese la cantida de bultos en stock") );   
     cantBultosCajas = parseInt (prompt("Ingrese la cantida de bultos que pueden entrar por caja") );

 }

function CalculoCajas() {
    var totalCajas = Math.trunc( cantBultos / cantBultosCajas );
    console.log('El total de cajas a utilizar son ' + totalCajas);
    var sobranteCajas = cantBultos  - (totalCajas * cantBultosCajas);
    console.log('El total de bultos que sobran son  ' + sobranteCajas);
}
IngresarDatos();
CalculoCajas();
