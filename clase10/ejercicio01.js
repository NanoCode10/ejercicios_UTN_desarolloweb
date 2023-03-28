const button = document.getElementById("enviar");
const buttonTerminar = document.getElementById("terminar");
const template = document.querySelector("#template").content;
const lista = document.querySelector("#lista");
const listaArray = document.getElementById("lista-array");

const arrDesordenado = document.getElementById("array-desordenado").value;
const fragment = document.createDocumentFragment();
var arrNumeros = [];

button.addEventListener("click", (e) => {
  var numero = document.getElementById("numero").value;
    $(function(){
            $('array-desordenado').append(numero);
        }   );
  arrNumeros.push(numero);
  
  arrNumeros.sort(function(a, b) {
    return a - b;
  });
  console.log(numero);
  console.log(arrNumeros);
  numero.value="";
});


buttonTerminar.addEventListener("click", (e) => {

    listaArray.style.display = "";
    lista.textContent = "";
    arrNumeros.forEach((item) => {
    template.querySelector("span").textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  lista.appendChild(fragment);

});