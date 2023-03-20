const button = document.getElementById('enviar');
const nombreCliente = document.getElementById('nombre-cliente');
const materialCaja = document.getElementById('material-caja');
const dimencionesCaja = document.getElementById('dimeciones-caja');


button.addEventListener("click", (e)=>{
    var comentarios = document.Formulario.comentarios.value;
    convierte();
    resumen.style.display = '';
    e.preventDefault();
});

function convierte(){
   console.log(nombreCliente.value);
   console.log(materialCaja.value);
   console.log(dimencionesCaja.name);

   console.log(comentarios.value);

   document.getElementById("resumen").innerHTML = nombreCliente.value +" a pedido unas caja de " + materialCaja.value + " con las dimeciones " + dimencionesCaja.name + " y a dejado el siguiente comentario " + comentarios.value ;
}

