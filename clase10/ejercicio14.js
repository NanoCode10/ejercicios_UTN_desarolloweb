const boton1 = document.getElementById("boton-1");
const boton2 = document.getElementById("boton-2");
const boton3 = document.getElementById("boton-3");


boton1.addEventListener('click', () => {
    const p1 = $('p.p-1');
    $( "p.p-1" ).last().addClass( "select" );
   
});

boton2.addEventListener('click', () => {
    const p2 = $('p.p-2');
    $( "p.p-2" ).last().addClass( "select" );
   

});

boton3.addEventListener('click', () => {
    const p3 = $('p.p-3');
    $( "p.p-3" ).last().addClass( "select" );
   

});


