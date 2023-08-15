const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("links");


function toggleButton() {
    console.log("hamburger clicked");
    navLinks.classList.toggle("show");
}
hamburger.addEventListener("click", toggleButton);
