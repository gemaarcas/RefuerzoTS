"use strict";
class Facturas {
    constructor(importe, porcentajeDescuento) {
        this.importe = importe;
        this.porcentajeDescuento = porcentajeDescuento;
    }
    setImporte(importe) {
        this.importe = importe;
    }
    setPorcentajeDescuento(porcentajeDescuento) {
        this.porcentajeDescuento = porcentajeDescuento;
    }
    getImporte() {
        return this.importe;
    }
    getPorcentajeDescuento() {
        return this.porcentajeDescuento;
    }
    getBruto() {
        return this.importe - (this.importe * this.porcentajeDescuento) / 100;
    }
    getIVA() {
        return (this.getBruto() * 21) / 100;
    }
}
function calcularFactura() {
    const importeInput = document.getElementById("importe");
    const importe = parseFloat(importeInput.value);
    if (isNaN(importe) || importe === 0) {
        alert("Introduzca un importe válido.");
        return;
    }
    const factura = new Facturas(importe, 10);
    const bruto = factura.getBruto();
    const iva = factura.getIVA();
    const neto = bruto + iva;
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
    const resultadoElement = document.getElementById("resultado");
    if (resultadoElement) {
        resultadoElement.innerText = `Bruto: ${brutoEuro}, IVA: ${ivaEuro}, Neto: ${netoEuro}`;
    }
}
//# sourceMappingURL=actividad4.js.map