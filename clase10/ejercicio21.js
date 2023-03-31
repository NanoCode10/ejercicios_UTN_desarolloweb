$(document).ready(function(){
    $('#myDiv').click(function(){
      $(this).slideUp('slow', function(){
        $('#hiddenDiv').slideDown('slow');
      
      });
    });
  });