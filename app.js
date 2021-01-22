const hamb = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-list");

hamb.addEventListener("click", function() {
navLinks.classList.toggle("opened");
})
