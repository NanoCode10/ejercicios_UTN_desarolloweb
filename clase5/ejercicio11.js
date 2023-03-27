const button = document.getElementById('enviar');
const parrafoCentigrados = document.getElementById('centigrados');
const parrafoFahrenheit = document.getElementById('fahrenheit');

button.addEventListener("click", (e)=>{
    e.preventDefault();
    convierte();
});

function convierte(){
    
    let inputValue = document.getElementById("centigrados").value;
    console.log(inputValue);
    let fahrenheit = (inputValue * 9/5) + 32
    console.log(parrafoCentigrados);
    parrafoFahrenheit.style.display = '';
    document.getElementById("fahrenheit").innerHTML = "En Grados fahrenheit es: " + fahrenheit;
}

