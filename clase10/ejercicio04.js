var array = [1,-4,12,0,-3,29,-150];

var arrayPositivo = array.filter(function(array) {
    return array > 0;
  });

 var resultado = arrayPositivo.reduce(function(total, current) {
    return total + current;
  }, 0);
console.log('La suma de los numeros positivos es: '+ resultado);

