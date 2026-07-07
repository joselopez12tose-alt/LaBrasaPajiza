// Cambiar apariencia del navbar al hacer scroll

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("shadow-2xl");
        navbar.classList.add("bg-black");

    } else {

        navbar.classList.remove("shadow-2xl");
        navbar.classList.remove("bg-black");

    }

});