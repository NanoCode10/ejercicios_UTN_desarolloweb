//ejercicio 1
/*
function obtenerTipoDato(){

    let dato = prompt("Ingrese un dato", 'dato');
    return console.log ( typeof(dato) );
   
    
}
obtenerTipoDato();
*/

//ejercicio 2
/*
var numero1;
var numero2;
function IngresarDatos(){
    numero1 = parseInt( prompt("Ingrese un numero") );
    
     numero2 = parseInt (prompt("Ingrese otro numero"));

}
function devulveResta(){
    resultado = numero1 - numero2;
    return console.log(resultado); 
}
IngresarDatos();
devulveResta();
*/

//ejrcicio 3
/*
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
*/

//Ejercicio 4
/*
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
*/

//Ejercicio 5
/*
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
*/

// Ejercicio 6
/*
var numero;

function IngresarDatos(){
   do
    numero = parseInt (prompt("Ingrese un numero entre 0 y 10 para realizar su factorial") );   
   while ( (numero > 10) || (numero < 0));
}
IngresarDatos();
var resultado =  numero ;
function factorizante (){
    if ((numero === 0) || (numero === 1)){
        resultado = 1;
        return resultado ;
    }
    while (numero > 1){
        numero --;
        resultado *= numero;
    }
}

factorizante();
alert('El resultado de factorizar el numero es ' +  resultado);

*/

//Ejercicio 7
var palindromo;
function IngresarDatos(){
    palindromo = prompt ('Ingrese una cadena de texto para saber si es palindromo');
    var re = /[\W_]/g;
    var primetro = palindromo.toLowerCase().replace(re, '');
    console.log(primetro);
}

function verificaPalindromo(){
    var re = /[\W_]/g;
    var reverPalidromo = palindromo.split('').reverse().join('').replace(re,'');
    console.log(reverPalidromo);


}

IngresarDatos();
verificaPalindromo();