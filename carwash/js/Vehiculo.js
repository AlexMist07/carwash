export class Vehiculo {
  constructor(idCategoria, nombreTipo) {
    this.idCategoria = idCategoria;
    this.nombreTipo  = nombreTipo;
    this.precioBase  = 0;
    this.modalidad   = null;
  }

  setPrecioBase(monto, modalidad) {
    this.precioBase = monto;
    this.modalidad  = modalidad;
  }
}