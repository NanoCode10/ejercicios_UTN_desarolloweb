
// Ejercicio 6

var mes;

function IngresarDatos(){
   do
    mes = parseInt (prompt("Ingrese un mes entre 0 y 10 para realizar su factorial") );   
   while ( (mes > 10) || (mes < 0));
}
IngresarDatos();
var resultado =  mes ;
function factorizante (){
    if ((mes === 0) || (mes === 1)){
        resultado = 1;
        return resultado ;
    }
    while (mes > 1){
        mes --;
        resultado *= mes;
    }
}

factorizante();
alert('El resultado de factorizar el mes es ' +  resultado);


