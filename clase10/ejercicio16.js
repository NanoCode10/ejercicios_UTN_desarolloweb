
$(document).ready(function(){

    $( "#b-1" ).click(function() {
        console.log('boton 1');
        $("a").text("El enlace de clarin");
        $("a").attr('href','https://www.clarin.com/');
    });   

    $( "#b-2" ).click(function() {
        console.log('boton 2');
        $("a").text("El enlace de La Nacion");
        $("a").attr('href','https://www.lanacion.com.ar/');
    });   

    $( "#b-3" ).click(function() {
        console.log('boton 3');
        $("a").text("El enlace de Infobae");
        $("a").attr('href','https://www.infobae.com/');
    });   

});