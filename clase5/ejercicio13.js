const button = document.getElementById('enviar');

//const adivina = document.getElementById('adivina');
var numero = 0;
var rdm = 0;
var intentos = 3;
button.addEventListener("click", (e)=>{
    e.preventDefault();
    var numero =  +document.getElementById('num-usu').value;
   // console.log('este es el numero ' + numero);
  do{
    rdm =random();
    logicaAdivina(rdm);
    intentos--;
    
  }while(( numero != rdm ) || (intentos > 1) );
    
    
  


});

function random(){

    rdm = Math.floor(Math.random() * 6);
   // console.log(rdm, numero);
    return(rdm);
    
}

function logicaAdivina(rdm){
    rdm=+rdm;
    console.log(rdm);
    console.log(numero);
    if ( rdm > numero) {
        
        adivina.style.display = '';
        document.getElementById("adivina").innerHTML = "El numero que ingresaste es menor, te quedan " + intentos;


    }else if( rdm < numero){
        adivina.style.display = '';
        document.getElementById("adivina").innerHTML = "El numero que ingresaste es mayor, te quedan " + intentos;

    }else {
        adivina.style.display = '';
        document.getElementById("adivina").innerHTML = "Adivinaste " + intentos;

    }

}

