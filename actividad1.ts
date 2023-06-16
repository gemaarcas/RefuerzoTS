function ejecutar() {
	const inputNumero = document.getElementById(
		"inputNumero"
	) as HTMLInputElement;
	const tablaMultiplicar = document.getElementById(
		"tablaMultiplicar"
	) as HTMLUListElement;

	// Obtén el número ingresado por el usuario como tipo number
	const numero: number = Number(inputNumero.value);

	if (isNaN(numero)) {
		alert("Por favor, ingresa un número válido.");
		return;
	}

	tablaMultiplicar.innerHTML = "";

	const resultados: number[] = [];

	for (let i = 1; i <= 10; i++) {
		const resultado = numero * i;
		resultados.push(resultado);

		const listItem = document.createElement("li");
		listItem.textContent = `${numero}x${i}=${resultado}`;
		tablaMultiplicar.appendChild(listItem);
	}

	console.log(resultados);
}
