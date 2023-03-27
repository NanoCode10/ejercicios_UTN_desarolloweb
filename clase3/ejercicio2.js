
//ejercicio 2

var numero1;
var numero2;
function IngresarDatos(){
    numero1 = parseInt( prompt("Ingrese un mes") );
    
     numero2 = parseInt (prompt("Ingrese otro mes"));

}
function devulveResta(){
    resultado = numero1 - numero2;
    return console.log(resultado); 
}
IngresarDatos();
devulveResta();

