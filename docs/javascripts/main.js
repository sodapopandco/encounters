$(document).ready(function () {
  // Toggle between the dark and light themes
  $(".toggle-icon").click(function() {
    $("body").toggleClass("light-theme").toggleClass("dark-theme");

    // Swap the HTML preview's body class
    var swap = $(".swap").html();
    if (swap == "light-theme") {
      $(".swap").html("dark-theme");
    }
    else if (swap == "dark-theme") {
      $(".swap").html("light-theme");
    }

    return false;
  });

  // Change the theme based on the time of day
  var now = new Date();
  var hour = now.getHours();
  if (hour < 7) {
    $("body").removeClass("light-theme").addClass("dark-theme");
    $(".swap").html("dark-theme");
  } else if (hour < 17) {
    $("body").removeClass("dark-theme").addClass("light-theme");
    $(".swap").html("light-theme");
  } else {
    $("body").removeClass("light-theme").addClass("dark-theme");
    $(".swap").html("dark-theme");
  }

  // Pulse the contrast icon until someone hovers over it
  $(".toggle-icon").hover(function() {
    $(this).removeClass("pulse");
  });

  // Parrallax the background while scrolling
  $(window).scroll(function() {
    $(".background-1").css("transform","translate3d(0px," + -($(window).scrollTop()/5) + "px, 0px)");
    $(".background-2").css("transform","translate3d(0px," + -($(window).scrollTop()/3) + "px, 0px)");
    $(".background-3").css("transform","translate3d(0px," + -($(window).scrollTop()/2) + "px, 0px)");
  });

  // Switch between the different previews
  $(".html").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(".html").addClass("active");

    return false;
  });

  $(".sass").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(".sass").addClass("active");

    return false;
  });

  $(".javascript").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(".javascript").addClass("active");

    return false;
  });

  $(".markdown").click(function() {
    $(".preview-link").removeClass("active");
    $(".preview").removeClass("active");
    $(".markdown").addClass("active");

    return false;
  });

  // Add a link so iOS devices can tap to see the colour info
  $('<a class="tap" href="#"></a>').insertAfter('.info');
  $(".tap").click(function() {
    return false;
  });
});
