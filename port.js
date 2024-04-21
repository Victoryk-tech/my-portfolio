const header = document.querySelector("header");
let menu = document.querySelector("menu-icon");
let navigation = document.querySelector("navigation");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

menu.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
