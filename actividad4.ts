// Definición de la clase Facturas
class Facturas {
	importe: number;
	porcentajeDescuento: number;

	// Constructor
	constructor(importe: number, porcentajeDescuento: number) {
		this.importe = importe;
		this.porcentajeDescuento = porcentajeDescuento;
	}

	// Métodos
	public setImporte(importe: number): void {
		this.importe = importe;
	}

	public setPorcentajeDescuento(porcentajeDescuento: number): void {
		this.porcentajeDescuento = porcentajeDescuento;
	}

	public getImporte(): number {
		return this.importe;
	}

	public getPorcentajeDescuento(): number {
		return this.porcentajeDescuento;
	}

	public getBruto(): number {
		return this.importe - (this.importe * this.porcentajeDescuento) / 100;
	}

	public getIVA(): number {
		return (this.getBruto() * 21) / 100;
	}
}

// Función para realizar los cálculos y mostrar los resultados
function calcularFactura() {
	// Obtener el valor del importe introducido
	const importe = parseFloat(
		(<HTMLInputElement>document.getElementById("importe")).value
	);

	// Crear una instancia de la clase Facturas
	const factura = new Facturas(importe, 10); // Aquí puedes modificar el porcentaje de descuento

	// Calcular el bruto y el IVA utilizando los métodos de la clase
	const bruto = factura.getBruto();
	const iva = factura.getIVA();
	const neto = bruto + iva;

	// Formatear las cantidades con el símbolo de euro (€)
	const brutoEuro = bruto.toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});
	const ivaEuro = iva.toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});
	const netoEuro = neto.toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});

	// Obtener el elemento del párrafo donde se mostrará el resultado
	const resultadoElement = document.getElementById("resultado");

	// Verificar que resultadoElement no sea null antes de asignar el texto
	if (resultadoElement) {
		// Mostrar los resultados en el párrafo
		resultadoElement.innerText = `Bruto: ${brutoEuro}, IVA: ${ivaEuro}, Neto: ${netoEuro}`;
	}
}
