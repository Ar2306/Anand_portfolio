document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navigation Menu
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("sticky", window.scrollY > 20);
    scrollBtn.style.display = window.scrollY > 20 ? "block" : "none";
  });

  // Side Navigation Menu
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const sideMenu = document.querySelector(".side-menu");
  const body = document.body;

  // Function to toggle the side menu
  function toggleSideMenu() {
    sideMenu.classList.toggle("show-side-menu");
    body.classList.toggle("no-scroll"); // Toggle body scrolling
  }

  // Event listener for the menu button
  menuBtn.addEventListener("click", toggleSideMenu);

  // Event listener for the cancel button
  cancelBtn.addEventListener("click", toggleSideMenu);

  // Side Navigation Bar Close While Clicking on Navigation Links
  document.querySelectorAll(".menu li a").forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      sideMenu.classList.remove("show-side-menu");
      body.classList.remove("no-scroll"); // Enable scrolling
    });
  });

  // typeWriter
  const texts = [
    "I am Anand Reddy. ",
    "Welcome to my world of creativity and coding. ",
  ];
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  function typeWriter() {
    if (count === texts.length) {
      return; // All texts have been typed
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".text-two").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(typeWriter, 100);
  }
  typeWriter();
});

// Smooth Scrolling
document
  .querySelector(".scroll-button a")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

function toggleSideMenu() {
  const sideMenu = document.getElementById("sideMenu");
  sideMenu.classList.toggle("active");
}
