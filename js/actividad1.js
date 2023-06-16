"use strict";
function ejecutar() {
    const inputNumero = Number(document.getElementById("inputNumero").value);
    const tablaMultiplicar = document.getElementById("tablaMultiplicar");
    if (isNaN(inputNumero) || inputNumero === 0) {
        alert("Por favor, introduzca un número válido.");
        return;
    }
    tablaMultiplicar.innerHTML = "";
    const resultados = [];
    for (let i = 1; i <= 10; i++) {
        const resultado = inputNumero * i;
        resultados.push(resultado);
        const listItem = document.createElement("li");
        listItem.textContent = `${inputNumero}x${i}=${resultado}`;
        tablaMultiplicar.appendChild(listItem);
    }
    console.log(resultados);
}
//# sourceMappingURL=actividad1.js.map