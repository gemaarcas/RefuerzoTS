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
return this.importe - (this.importe * this.porcentajeDescuento /100)      
}  
    public getIVA(): number {
      return (this.getBruto() * 21 /100);
    }
  
  
}