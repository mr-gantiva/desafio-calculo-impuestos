export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  getMontoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  getDeducciones() {
    return this._deducciones;
  }
  setMontoBrutoAnual(nuevo_monto) {
    this._montoBrutoAnual = nuevo_monto;
  }
  setDeducciones(nueva_deduccion) {
    this._deducciones = nueva_deduccion;
  }
}
