const header = document.querySelector("header");
let menuIcon = document.getElementById("menu-icon");
let navigation = document.querySelector("navigation");
let navHome = document.getElementById("nav-home");
let closetBtn = document.getElementById("bx-x");
let bodyWhole = document.getElementById("wrapper");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

menuIcon.addEventListener("click", () => {
  navHome.style.visibility = "visible";
  menuIcon.style.visibility = "hidden";
  closetBtn.style.visibility = "visible";
  bodyWhole.style.filter = "blur(-20)";
});

// window.onscroll = () => {
//   menu.classList.remove("bx-x");
//   navigation.classList.remove("active");
// };
// menu.addEventListener("click", () => {
//   navigation.classList.toggle("active");
// });

closetBtn.addEventListener("click", () => {
  navHome.style.visibility = "hidden";
  closetBtn.style.visibility = "hidden";
  menuIcon.style.visibility = "visible";
});
