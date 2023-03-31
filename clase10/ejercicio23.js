$(document).ready(function(){
    
    $('#myLink').on('click', function(event) {
        event.preventDefault();
        const href = $(this).attr('href');
        console.log(href);
      });
      

});    