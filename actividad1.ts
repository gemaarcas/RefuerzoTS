function ejecutar() {
	// Obtener el valor del input y convertirlo a tipo number
	const inputNumero = Number(
		(document.getElementById("inputNumero") as HTMLInputElement).value
	);
	const tablaMultiplicar = document.getElementById(
		"tablaMultiplicar"
	) as HTMLUListElement;

	// Validar si el número ingresado es válido
	if (isNaN(inputNumero) || inputNumero === 0) {
		alert("Por favor, introduzca un número válido.");
		return; // Detener la ejecución de la función si el número no es válido
	}

	tablaMultiplicar.innerHTML = ""; // Limpiar la tabla de multiplicar antes de generar nuevos resultados

	const resultados: number[] = []; // Crear un array para almacenar los resultados

	// Generar la tabla de multiplicar y los elementos de lista correspondientes
	for (let i = 1; i <= 10; i++) {
		const resultado = inputNumero * i;
		resultados.push(resultado); // Agregar el resultado al array de resultados

		// Crear un elemento <li> para cada resultado y agregarlo a la tabla de multiplicar
		const listItem = document.createElement("li");
		listItem.textContent = `${inputNumero}x${i}=${resultado}`;
		tablaMultiplicar.appendChild(listItem);
	}

	console.log(resultados); // Mostrar los resultados en la consola
}
