// Toggle between the dark and light themes
$("#toggle").click(function() {
  $("body").toggleClass("dark").toggleClass("light");

  // Swap the example body class
  var swap = $(".swap").html()
  if (swap == "light") {
    $(".swap").html("dark");
  }
  else if (swap == "dark") {
    $(".swap").html("light");
  }

  return false;
});

// Pulse the contrast icon until someone hovers over it
$("#toggle").hover(function() {
  $(this).removeClass("pulse");
});
