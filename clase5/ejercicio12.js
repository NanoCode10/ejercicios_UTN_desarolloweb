const button = document.getElementById('enviar');
const nombreCliente = document.getElementById('nombre-cliente');
const materialCaja = document.getElementById('material-caja');
const dimencionesCaja = document.getElementById('dimeciones-caja');
var comentarios = document.Formulario.comentarios;

button.addEventListener("click", (e)=>{
    e.preventDefault();
    convierte();
});

function convierte(){
   console.log(nombreCliente.value);
   console.log(materialCaja.value);
   console.log(dimencionesCaja.name);

   console.log(comentarios);
}

