
//ejrcicio 3

var a;
var b;
function IngresarDatos(){
    a = prompt("Ingrese un valor para A") ;
    
    b = prompt("Ingrese un valor para B");

}

function darVueltaValores(){
    tmp = a;
    a = b;
    b = tmp;
    
    

}

IngresarDatos();
darVueltaValores();
alert('Ahora A tiene el valor de '+ a);
alert('Ahora B tiene el valor ' + b);

