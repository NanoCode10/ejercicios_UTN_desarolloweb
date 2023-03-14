
//Ejercicio 9

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
 