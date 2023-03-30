const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");
const boton3 = document.getElementById("boton-3");


boton1.addEventListener('click', () => {
    const p = document.querySelectorAll('p.p-1');
    p.classList.add('select');
    console.log(p);
});

boton2.addEventListener('click', () => {


});

boton3.addEventListener('click', () => {


});


