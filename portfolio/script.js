document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navigation Menu
  let nav = document.querySelector("nav");
  let scrollBtn = document.querySelector(".scroll-button a");

  window.addEventListener(
    "scroll",
    debounce(function () {
      nav.classList.toggle("sticky", window.scrollY > 20);
    }, 200)
  );

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

  // TypeWriter Effect
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
  }

  setInterval(typeWriter, 100); // Using interval to avoid nested timeout
});

// Debounce function to limit the rate of scroll event triggering
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
