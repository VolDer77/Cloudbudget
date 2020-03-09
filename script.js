const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".section-header-navbar__list");
hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
    hamburger.classList.toggle("is-active");
});