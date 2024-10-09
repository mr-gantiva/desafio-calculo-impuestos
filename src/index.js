import { Cliente } from "./Cliente.js";
import { Impuesto } from "./Impuesto.js";

// Instancias

const impuesto1 = new Impuesto(1000000, 15000);
const cliente1 = new Cliente("Juan", impuesto1);
console.log(
  `El cliente ${
    cliente1._nombre
  } tiene que pagar de impuesto ${cliente1.calcularImpuesto()}`
);
