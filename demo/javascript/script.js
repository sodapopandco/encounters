// Toggle between the dark and light themes
$("#toggle").click(function() {
  $("body").toggleClass("dark").toggleClass("light");
  return false;
});

// Pulse the contrast icon until someone hovers over it
$(".pulse").hover(function() {
  $(this).removeClass("pulse");
});

$("nav.sections a.colours").click(function() {
     $('html, body').animate({
         scrollTop: $("#colours").offset().top
     }, 500);
 });
