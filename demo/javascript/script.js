// Toggle between the dark and light themes
$("#toggle").click(function() {
  $("body").toggleClass("dark").toggleClass("light");
  return false;
});

// Pulse the contrast icon until someone clicks on it
$(".pulse").click(function() {
  $(this).removeClass("pulse");
});
