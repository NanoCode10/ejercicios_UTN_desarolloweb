var array = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];


var nombreMayoresSeis = array.filter(function(array) {
    
    return array.length >= 6 ;
  });

console.log('A -Los nombres que al menos tienen 6 letras son: ' +nombreMayoresSeis);

var nombreM = array.filter(function(array) {
    if( array.charAt(0) == 'M'){
        
        return array ;
    }   
});

console.log('B -Los nombres que comienzan con M son : ' + nombreM);


console.log('C -Ordenados Alfabeticamente el array es : '  + array.sort());



var iniciales = array.map(function(nombre) {
    return nombre.charAt(0); // Obtener la primera letra de cada nombre
  });
  
  

console.log('D -El array con las iniciales es : ' + iniciales);

var mayusculas = array.map(function(nombre) {
    return nombre.toUpperCase(); // Obtener la primera letra de cada nombre
  });
  
  

console.log('F -El array en mayusculas es : ' + mayusculas);

var comienzaConJ = array.some(function(nombre) {
    return nombre.charAt(0) === 'J'; 
  });
if(comienzaConJ){
    console.log('G -El array al menos tiene un nombre que empieza con J');

}else{
    console.log('G -El array no tiene nombres que empiecen con J');
}