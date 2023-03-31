
//Ejercicio 7

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
