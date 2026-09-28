let contador = 0;

let boton1 = document.querySelector("#btnMas1");
let boton2 = document.querySelector("#btnMas2");
let boton3 = document.querySelector("#btnMas3");
let carro = document.querySelector("#librosSeleccionados");
let email = document.querySelector("#email");
let formulario = document.querySelector("#loginForm");
const video = document.querySelector("#videoLibreria");

function agregarLibro() {
    contador = contador + 1;
    carro.textContent = contador;
}

boton1.addEventListener("click", function() {
    agregarLibro();
});
boton2.addEventListener("click", function() {
    agregarLibro();
});
boton3.addEventListener("click", function() {
    agregarLibro();
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    if (email.value !== "") {
        alert("Bienvenido\n" + email.value);
    } else {
        alert("Por favor, ingresa un correo valido.");
    }
});

video.addEventListener("mouseover", function() {
    video.setAttribute("poster", "static/images/miniatura2.jpg");
});

video.addEventListener("mouseout", function() {
    video.setAttribute("poster", "static/images/miniatura1.jfif");
});