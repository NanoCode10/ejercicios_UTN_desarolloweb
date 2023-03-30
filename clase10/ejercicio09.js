function intercambiarElementos(arr, indiceA, indiceB) {
    var temp = arr[indiceA];
    arr[indiceA] = arr[indiceB];
    arr[indiceB] = temp;
  }
  
  // Ejemplo de uso:
  var arreglo = ["a", "b", "c", "d"];
  console.log(arreglo);
  intercambiarElementos(arreglo, 1, 2);
  console.log(arreglo); 
  