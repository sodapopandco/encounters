// Toggle between the dark and light themes
$("#toggle").click(function() {
  $("body").toggleClass("dark").toggleClass("light");
  return false;
});

// Pulse the contrast icon until someone hovers over it
$("#toggle").hover(function() {
  $(this).removeClass("pulse");
});
