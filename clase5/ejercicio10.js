const button = document.getElementById('enviar');
const parrafoPesos = document.getElementById('peso');
button.addEventListener("click", (e)=>{
    e.preventDefault();
    convierte();
});

function convierte(){
    
    let inputValue = document.getElementById("dolar").value;
    console.log(inputValue);
    let pesos = inputValue * 200.75;
    console.log(parrafoPesos);
    parrafoPesos.style.display = '';
    document.getElementById("peso").innerHTML = "En Pesos es: " + pesos;
}

