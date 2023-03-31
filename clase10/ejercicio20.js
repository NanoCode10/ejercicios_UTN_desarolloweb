$("#myDiv").on("dblclick", function() {
    if ($(this).width() === 800 && $(this).height() === 70) {
      $(this).animate({width: '250px', height: '250px'});
    } else {
      $(this).animate({width: '800px', height: '70px'});
    }
  });