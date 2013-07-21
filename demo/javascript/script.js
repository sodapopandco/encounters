$(document).ready(function () {
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

  $(window).scroll(function() {
    $(".stars-1").css("transform","translate3d(0px," + -($(window).scrollTop()/5) + "px, 0px)");
    $(".stars-2").css("transform","translate3d(0px," + -($(window).scrollTop()/3) + "px, 0px)");
    $(".stars-3").css("transform","translate3d(0px," + -($(window).scrollTop()/2) + "px, 0px)");
  });

  // Pulse the contrast icon until someone hovers over it
  $("#toggle").hover(function() {
    $(this).removeClass("pulse");
  });
})
