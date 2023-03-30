

function filtrarpalabras(array) {
    return array.filter(function(palabra) {
      var primeraLetra = palabra.charAt(0).toLowerCase();
      return primeraLetra === "a" || primeraLetra === "e" || primeraLetra === "i" || primeraLetra === "o" || primeraLetra === "u";
    });
  }

const palabras = ["Flor", "Luna", "Elefante", "Mesa", "Bola", "Gato", "oso"];
var palabrasVocal = filtrarpalabras(palabras);
console.log(palabrasVocal);

