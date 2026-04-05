document.addEventListener("DOMContentLoaded", function () {
  // Toggle between the dark and light themes
  document.querySelectorAll(".toggle").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");

      var swap = document.querySelector(".swap");
      swap.textContent =
        swap.textContent === "light-theme" ? "dark-theme" : "light-theme";
    });
  });

  // Change the theme based on the time of day
  var hour = new Date().getHours();
  if (hour < 7 || hour >= 17) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    document.querySelector(".swap").textContent = "dark-theme";
  }

  // Pulse the contrast icon until someone hovers over it
  document.querySelectorAll(".toggle-icon").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      el.classList.remove("pulse");
    });
  });

  // Parallax the background while scrolling
  var ua = navigator.userAgent.toLowerCase();
  if (!/(iphone|ipod|ipad)/.test(ua)) {
    var bg1 = document.querySelector(".background-1");
    var bg2 = document.querySelector(".background-2");
    var bg3 = document.querySelector(".background-3");

    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      bg1.style.transform = "translate3d(0," + -(y / 5) + "px,0)";
      bg2.style.transform = "translate3d(0," + -(y / 3) + "px,0)";
      bg3.style.transform = "translate3d(0," + -(y / 2) + "px,0)";
    });
  }

  // Switch between the different previews
  document.querySelectorAll(".preview-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".preview-link").forEach(function (l) {
        l.classList.remove("active");
      });
      document.querySelectorAll(".preview").forEach(function (p) {
        p.classList.remove("active");
      });
      link.classList.add("active");
      document.querySelector(link.getAttribute("href")).classList.add("active");
    });
  });

  // Add a link so iOS devices can tap to see the colour info
  document.querySelectorAll(".info").forEach(function (info) {
    var tap = document.createElement("a");
    tap.className = "tap";
    tap.href = "#";
    tap.addEventListener("click", function (e) {
      e.preventDefault();
    });
    info.parentNode.insertBefore(tap, info.nextSibling);
  });
});
