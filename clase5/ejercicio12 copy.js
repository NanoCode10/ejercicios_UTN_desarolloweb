const button = document.getElementById('enviar');
const nombreCliente = document.getElementById("nombre-cliente").value;

button.addEventListener("click", (e)=>{
    e.preventDefault();
   console.log(nombreCliente);
});

function convierte(){
   console.log(nombreCliente.value);
   console.log(materialCaja.value);
   console.log(dimencionesCaja.name);

   console.log(comentarios);
}

