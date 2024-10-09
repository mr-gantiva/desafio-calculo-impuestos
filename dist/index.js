"use strict";

var _Cliente = require("./Cliente.js");
var _Impuesto = require("./Impuesto.js");
// Instancias

var impuesto1 = new _Impuesto.Impuesto(1000000, 15000);
var cliente1 = new _Cliente.Cliente("Juan", impuesto1);
console.log("El cliente ".concat(cliente1._nombre, " tiene que pagar de impuesto ").concat(cliente1.calcularImpuesto()));