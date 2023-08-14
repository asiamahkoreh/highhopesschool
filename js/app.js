const nav = document.querySelector("nav");
const navLinks = document.querySelector("#nav-links");
const navToggleButton = document.querySelector("#nav-toggle");


navToggleButton.addEventListener("click", toggleButton);

function toggleButton() {
    // navLinks.classList.toggle("show");
    navLinks.style.display = "block";
    navLinks.style.height = "7rem";
    nav.style.backgroundColor ="black";
    nav.style.height = "12rem";
}
