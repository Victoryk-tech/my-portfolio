const header = document.querySelector("header");
let menu = document.querySelector("menu-icon");
let navigation = document.querySelector("navigation");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

// menu.addEventListener("click", () {
//   menu.classList.toggle("bx-x");
//   navigation.classList.toggle("active");
// });

// window.onscroll = () => {
//   menu.classList.remove("bx-x");
//   navigation.classList.remove("active");
// };
menu.addEventListener("click", () => {
  navigation.classList.toggle("active");
});

// closeBtn.addEventListener("click", () => {
//   sideMenu.style.display = "none";
// });