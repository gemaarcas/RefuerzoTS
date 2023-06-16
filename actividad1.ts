function ejecutar() {
	// Obtener el elemento del input y de la tabla de multiplicar
	const inputNumero = document.getElementById(
		"inputNumero"
	) as HTMLInputElement;
	const tablaMultiplicar = document.getElementById(
		"tablaMultiplicar"
	) as HTMLUListElement;

	// Obtén el número ingresado por el usuario como tipo number
	const numero: number = Number(inputNumero.value);

	// Validar si el número ingresado es válido
	if (isNaN(numero)) {
		return; // Detener la ejecución de la función si el número no es válido
	}

	tablaMultiplicar.innerHTML = ""; // Limpiar la tabla de multiplicar antes de generar nuevos resultados

	const resultados: number[] = []; // Crear un array para almacenar los resultados

	// Generar la tabla de multiplicar y los elementos de lista correspondientes
	for (let i = 1; i <= 10; i++) {
		const resultado = numero * i;
		resultados.push(resultado); // Agregar el resultado al array de resultados

		// Crear un elemento <li> para cada resultado y agregarlo a la tabla de multiplicar
		const listItem = document.createElement("li");
		listItem.textContent = `${numero}x${i}=${resultado}`;
		tablaMultiplicar.appendChild(listItem);
	}

	console.log(resultados); // Mostrar los resultados en la consola
}
