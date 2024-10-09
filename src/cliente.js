export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  getNombre() {
    return this._nombre;
  }
  setNombre(nuevo_nombre) {
    this._nombre = nuevo_nombre;
  }

  calcularImpuesto() {
    return (
      (this._impuesto.getMontoBrutoAnual() - this._impuesto.getDeducciones()) *
      21
    );
  }
}
