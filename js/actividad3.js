"use strict";
const formulario = document.querySelector("form");
const contenedorFoto = document.querySelector("#foto");
let imagenes = [];
const visualizarFoto = () => {
    contenedorFoto.innerHTML = "";
    imagenes.forEach((x) => {
        const img = document.createElement("img");
        img.alt = x.alt;
        img.src = x.url;
        contenedorFoto.appendChild(img);
    });
};
const iniciarElCarrusel = (e) => {
    e.preventDefault();
    visualizarFoto();
};
formulario.addEventListener("submit", iniciarElCarrusel);
//# sourceMappingURL=actividad3.js.map