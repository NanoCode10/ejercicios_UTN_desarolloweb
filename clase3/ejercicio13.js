
//Ejercicio 13
function IngresarDatos(){
    
    codigo =  (prompt("Ingrese el codigo del articulo") );   
    return codigo

}
function descuento( codigo) {
    switch (codigo) {
        case 'fiesta':
          console.log('El descuento es un 5%');
          break;
        case 'focus':
        
          console.log('El desciento es un 10%');
          
          break;
        default:
            console.log('No ingreso un codigo correcto.');
        }
    
}
descuento(IngresarDatos());