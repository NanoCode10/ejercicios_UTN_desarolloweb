

function filtrarNumerosPares(array) {
    return array.filter(function(numero) {
      return numero % 2 === 0;
    });
  }

const numeros = [1,2,3,4,5,6,7,8,9];
var numerosPares = filtrarNumerosPares(numeros);
console.log(numerosPares);

