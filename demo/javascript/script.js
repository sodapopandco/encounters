$(document).ready(function () {
  // Toggle between the dark and light themes
  $(".toggle").click(function() {
    $("body").toggleClass("dark").toggleClass("light");

    // Swap the HTML example body class
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
  $(".toggle").hover(function() {
    $(this).removeClass("pulse");
  });

  // Parrallax the stars while scrolling
  $(window).scroll(function() {
    $(".stars-1").css("transform","translate3d(0px," + -($(window).scrollTop()/5) + "px, 0px)");
    $(".stars-2").css("transform","translate3d(0px," + -($(window).scrollTop()/3) + "px, 0px)");
    $(".stars-3").css("transform","translate3d(0px," + -($(window).scrollTop()/2) + "px, 0px)");
  });

  // Switch between the different examples
  $(".html").click(function() {
    $(".code-link").removeClass("active");
    $(".code-example").removeClass("active");
    $(".html").addClass("active");

    return false;
  });

  $(".sass").click(function() {
    $(".code-link").removeClass("active");
    $(".code-example").removeClass("active");
    $(".sass").addClass("active");

    return false;
  });

  $(".javascript").click(function() {
    $(".code-link").removeClass("active");
    $(".code-example").removeClass("active");
    $(".javascript").addClass("active");

    return false;
  });

  $(".markdown").click(function() {
    $(".code-link").removeClass("active");
    $(".code-example").removeClass("active");
    $(".markdown").addClass("active");

    return false;
  });
})
