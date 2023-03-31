$(document).ready(function(){
   
    $("select").change(function(){
        var selectedOption = $(this).val();
        console.log(selectedOption);
    });

});    