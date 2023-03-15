const button = document.getElementById('enviar');
const parrafoDolar = document.getElementById('dolar');
button.addEventListener("click", (e)=>{
    e.preventDefault();
    convierte();
});

function convierte(){
    
    let inputValue = document.getElementById("pesos").value;
    console.log(inputValue);
    let dolar = inputValue * 200.75;
    console.log(parrafoDolar);
    parrafoDolar.style.display = '';
    document.getElementById("dolar").innerHTML = "En dolares es: " + dolar;
}

