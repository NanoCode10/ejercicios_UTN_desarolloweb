

const template = document.querySelector("#template").content;
const listaA = document.querySelector("#listaA");
const listaB = document.querySelector("#listaB");
const listaC = document.querySelector("#listaC");
const listaD = document.querySelector("#listaD");
const listaE = document.querySelector("#listaE");
const listaF = document.querySelector("#listaF");
const titulo = document.getElementById("titulo").textContent;

const fragment = document.createDocumentFragment();

var array = [1,2,3,4,5,6];
A();
B();
C();
D();
E();
F();

//ACA ESTA EL A CN EL WHILE
function A (){
  var i= 0;
  while(  i < array.length ){
        
    template.querySelector("span").textContent = array[i];
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
    i++;  

  }

  listaA.appendChild(fragment);
}

// ACA ESTA EL b CON EL FOR  
function B (){

  for(i=0; i < array.length; i++)
  {
    template.querySelector("span").textContent = array[i];
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  }  

  listaB.appendChild(fragment);
}

///  ----->   C UTILIZANDO EL FOR EACH
function C(){
    array.forEach((item) => {


        template.querySelector("span").textContent = item;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
      });
      listaC.appendChild(fragment);
    

}

///  ----->   D
function D(){

 array.forEach((item) => {
    $("#listaD").append(item + 1);
    $("#listaD").append(' - ');

 });

}

///  ----->   E
function E(){

    var  newArray = array.map(function(x) {
        return x + 1;
    });
    newArray.forEach((item) => {
        $("#listaE").append(item);
        $("#listaE").append(' - ');
    
     });

}    

///  ----->   F
function F(){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    var promedio = array.reduce(reducer) / (array.length + 1);
    $("#listaF").append(promedio);
}


