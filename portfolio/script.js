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
    document.addEventListener("DOMContentLoaded", function () {
      let e = document.querySelector("nav");
      document.querySelector(".scroll-button a"),
        window.addEventListener(
          "scroll",
          debounce(function () {
            e.classList.toggle("sticky", window.scrollY > 20);
          }, 200)
        );
      let t = document.querySelector(".menu-btn"),
        n = document.querySelector(".cancel-btn"),
        l = document.querySelector(".side-menu"),
        o = document.body;
      function c() {
        l.classList.toggle("show-side-menu"), o.classList.toggle("no-scroll");
      }
      t.addEventListener("click", c),
        n.addEventListener("click", c),
        document.querySelectorAll(".menu li a").forEach(function (e) {
          e.addEventListener("click", function () {
            l.classList.remove("show-side-menu"),
              o.classList.remove("no-scroll");
          });
        });
      let s = [
          "I am Anand Reddy. ",
          "Welcome to my world of creativity and coding. ",
        ],
        i = 0,
        r = 0,
        d = "",
        u = "";
      setInterval(function e() {
        i !== s.length &&
          ((u = (d = s[i]).slice(0, ++r)),
          (document.querySelector(".text-two").textContent = u),
          u.length === d.length && (i++, (r = 0)));
      }, 100);
    });
    function debounce(e, t) {
      let n;
      return function (...l) {
        clearTimeout(n), (n = setTimeout(() => e.apply(this, l), t));
      };
    }
    sideMenu.classList.toggle("show-side-menu");
    body.classList.toggle("no-scroll");
  }

  // Event listener for the menu button
  menuBtn.addEventListener("click", toggleSideMenu);

  // Event listener for the cancel button
  cancelBtn.addEventListener("click", toggleSideMenu);

  // Side Navigation Bar Close While Clicking on Navigation Links
  document.querySelectorAll(".menu li a").forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      sideMenu.classList.remove("show-side-menu");
      body.classList.remove("no-scroll");
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
      return;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".text-two").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
  }

  setInterval(typeWriter, 100);
});

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
