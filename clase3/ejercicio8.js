//Ejercicio 8

function IngresarDatos(){
    let cadena = prompt ('Ingrese una cadena de texto para convertirla en Mayusculas y minisculas');
    return cadena;    
    
    
}

function ConvierteMayu (cadena) {
    

    let mayuCadena = cadena.toUpperCase();
    
    return mayuCadena;
}
function ConvierteMin (cadena) {
    

    let minuCadena = cadena.toLowerCase();
    
    return minuCadena;
}

cadena = IngresarDatos();

alert("En mayuscula la cadena es "+ ConvierteMayu(cadena) );
alert("En minuscula la cadena es "+ ConvierteMin(cadena) );
