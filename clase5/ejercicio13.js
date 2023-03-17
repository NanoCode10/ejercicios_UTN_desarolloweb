const button = document.getElementById('enviar');
const numero =  document.getElementById('num-usu').value;
const adivinaste = document.getElementById('adivinaste');

var rdm = 0;

button.addEventListener("click", (e)=>{
    e.preventDefault();
    
    logicaAdivina(random());
});

function random(){

    rdm = Math.floor(Math.random() * 6);
    console.log(rdm, numero);
    return(rdm);
    
}

function logicaAdivina(rdm){
    
    if ( rdm > numero) {
        
        console.log('El numero ingresado es menor al de la adivinaza 🤷‍♂️');


    }else if( rdm < numero){
        
        console.log('El numero ingresado es mayor al de la adivinaza 🤷‍♂️');

    }else {
        
        console.log('Adinaste! 🙌👏');

    }

}

