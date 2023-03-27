const button = document.getElementById("enviar");
const template = document.querySelector("#template").content;
const lista = document.querySelector("#lista");
const listaNombre = document.getElementById("lista-nombre");
const fragment = document.createDocumentFragment();
var arrNombres = [];

button.addEventListener("click", (e) => {
  const nombre = document.getElementById("nombre").value;
  listaNombre.style.display = "";

  creaArrayNombres(nombre);

  creaTemplate(arrNombres);
  document.getElementById("nombre").value = "";
});

function creaArrayNombres(nombre) {
  arrNombres.push(nombre);
}

function creaTemplate(arrNombres) {
  lista.textContent = "";
  arrNombres.forEach((item) => {
    template.querySelector("span").textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  lista.appendChild(fragment);
}
