function IngresoCadena(){
    
    let arr= [];
    let i = 0;
    let dato;
    while ( dato = prompt("Ingrese una cadena")) {
     arr[i]= dato;  
     i ++;
    }
    return arr;
    
    
   
    
}

function separarCadena (cadena){
   
    for(var i=0; i < cadena.length; i++){
        document.write(cadena[i] + " - ")
        console.log(cadena[i]);
    }


}
let cadena = IngresoCadena();
separarCadena(cadena);


