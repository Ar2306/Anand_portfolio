document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector("nav");
  document.querySelector(".scroll-button a"),
    window.addEventListener(
      "scroll",
      debounce(() => {
        e.classList.toggle("sticky", window.scrollY > 20);
      }, 200)
    );
  let t = document.querySelector(".menu-btn"),
    l = document.querySelector(".cancel-btn"),
    n = document.querySelector(".side-menu"),
    o = document.body,
    c = () => {
      n.classList.toggle("show-side-menu"), o.classList.toggle("no-scroll");
    };
  t.addEventListener("click", c),
    l.addEventListener("click", c),
    document.querySelectorAll(".menu li a").forEach((e) => {
      e.addEventListener("click", () => {
        n.classList.remove("show-side-menu"), o.classList.remove("no-scroll");
      });
    });
  let s = [
      "I am Anand Reddy. ",
      "Welcome to my world of creativity and coding. ",
    ],
    r = 0,
    i = 0,
    d = () => {
      if (r < s.length) {
        let e = s[r],
          t = e.slice(0, ++i);
        (document.querySelector(".text-two").textContent = t),
          t.length === e.length && (r++, (i = 0));
      }
    };
  setInterval(d, 100);
});
function debounce(e, t) {
  let l;
  return function (...n) {
    clearTimeout(l), (l = setTimeout(() => e.apply(this, n), t));
  };
}
