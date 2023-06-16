"use strict";
function ejecutar() {
    const inputNumero = document.getElementById("inputNumero");
    const tablaMultiplicar = document.getElementById("tablaMultiplicar");
    const numero = Number(inputNumero.value);
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    tablaMultiplicar.innerHTML = "";
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        resultados.push(resultado);
        const listItem = document.createElement("li");
        listItem.textContent = `${numero}x${i}=${resultado}`;
        tablaMultiplicar.appendChild(listItem);
    }
    console.log(resultados);
}
//# sourceMappingURL=actividad1.js.map