const button = document.getElementById('enviar');
const template = document.querySelector("#template");
const liTemplate = document.getElementById('litemplate');
const fragment = document.createDocumentFragment();
var arrNombres = [];
button.addEventListener("click", (e)=>{
  const nombre = document.getElementById("nombre").value;

  console.log(nombre);

  creaArrayNombres(nombre);
  
  creaTemplate(arrNombres);
 
});

const nombreObj= {};

function creaArrayNombres(nombre){

        arrNombres.push(nombre);
        
        

}

function creaTemplate(arrNombres){
    
    
    nombre.textContent = "";
    Object.values(arrNombres).forEach((item) => {

        
        const clone = template.content.cloneNode(true);
        
        console.log('este es el item    '+ item);
        clone.querySelector(".liTemplate").textContent = item;
        
        fragment.appendChild(clone);
    });
    nombre.appendChild(fragment);

}
