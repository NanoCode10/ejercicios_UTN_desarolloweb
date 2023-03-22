const button = document.getElementById('enviar');

//const adivina = document.getElementById('adivina');
var numero = 0;
var rdm = 0;
var intentos = 3;

    
    
    rdm =random();
   // console.log('este es el numero ' + numero);
   button.addEventListener("click", (e)=>{
        intentos--;
        var numero =  +document.getElementById('num-usu').value;
        console.log('este es el numero' + numero);
        console.log('este es el intento' + intentos);
       if ( intentos >= 0){
        logicaAdivina(rdm, numero);
       }
        else{
            document.getElementById("adivina").innerHTML = "Perdiste "
        }
        e.preventDefault();
    });
 
    


function random(){

    rdm = Math.floor(Math.random() * 6);
   // console.log(rdm, numero);
    return(rdm);
    
}

function logicaAdivina(rdm, numero){
    rdm=+rdm;
    console.log(rdm);
    console.log(numero);
    adivina.style.display = '';

    if (( rdm > numero) && (intentos > 0)){
        
       
        document.getElementById("adivina").innerHTML = "El numero que ingresaste es menor, te quedan " + intentos +" intentos";
        

    }else if(( rdm < numero) && (intentos > 0)){
       
        document.getElementById("adivina").innerHTML = "El numero que ingresaste es mayor, te quedan " + intentos +" intentos";

    }else if(( rdm != numero) && (intentos == 0)) {
      
        document.getElementById("adivina").innerHTML = "Perdiste 😌👎" ;
        document.getElementById("enviar").disabled = true;

    }else{
      
        document.getElementById("adivina").innerHTML = "Ganaste 😁🎉🎉" ;
        document.getElementById("enviar").disabled = true;

    }

}

