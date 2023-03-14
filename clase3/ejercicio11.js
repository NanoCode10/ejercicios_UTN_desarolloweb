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
