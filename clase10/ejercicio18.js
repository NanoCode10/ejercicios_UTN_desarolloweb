$(document).ready(function() {
    // Set initial colors
    var origColor = 'white';
    var hoverColor = 'yellow';
    $('#cell1, #cell2, #cell3, #cell4').css('background-color', origColor);
  
    // Change color on mouse enter
    $('#cell1, #cell2, #cell3, #cell4').mouseenter(function() {
      $(this).css('background-color', hoverColor);
    });
  
    // Restore color on mouse leave
    $('#cell1, #cell2, #cell3, #cell4').mouseleave(function() {
      $(this).css('background-color', origColor);
    });
  });
  