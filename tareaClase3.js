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
    numero1 = parseInt( prompt("Ingrese un mes") );
    
     numero2 = parseInt (prompt("Ingrese otro mes"));

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

*/

//Ejercicio 7
/*
var palindromo;
var cadena_ori;
var reverPalidromo;
function IngresarDatos(){
    palindromo = prompt ('Ingrese una cadena de texto para saber si es palindromo');
    var re = /[\W_]/g;
    cadena_ori = palindromo.toLowerCase().replace(re, '').toString();
    
}

function CreaReversePalindromo(){
    var re = /[\W_]/g;
    reverPalidromo = palindromo.split('').reverse().join('').replace(re,'');
    
}

IngresarDatos();
CreaReversePalindromo();

if(cadena_ori == reverPalidromo){
   alert('Este es un palidromo')
            
}else {
    alert('Este no es un palidromo')
}
*/
//Ejercicio 8
/*
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
*/

//Ejercicio 9
/*
function IngresarDatos(){
    do
    var mes = parseInt (prompt("Ingrese una nota numerica de un alumno. Para mostrar calificacion: ") );   
    while ( (mes > 10) || (mes < 0));
    return mes;
 }
 function CalificaNota(mes){
    if (mes <= 3){
        alert('Muy Deficiente');
    }else if(mes > 3 && mes <= 5 ){
        alert('Insuficiente');
    }else if(mes > 5 && mes <= 6 ){
        alert('Suficiente');
    }else if(mes > 6 && mes <= 7 ){
        alert('Bien');        
    }else if(mes > 7 && mes <= 9 ){
        alert('Notable');        
    }else if(mes > 9 && mes <= 10 ){
        alert('Sobresaliente');
    }    
 }
 
 CalificaNota(IngresarDatos());
 */

 //Ejercicio 10
 /*
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
  */
 //ejercicio 11
 function IngresarDatos(){
    do
    var numero =  (prompt("Ingrese un numero del 1 al 10 para crear una piramide") );   
    while ( (numero > 10) || (numero <= 0));
    return numero;
 }
 var num = IngresarDatos();
 
 console.log( num  );
 
for(var i=0; i<=num; i++)

{
 var piramide = '';
 for(var x=1; x<=i; x++)
    {
        piramide = piramide + x;
        
    }
  console.log(piramide);
}
