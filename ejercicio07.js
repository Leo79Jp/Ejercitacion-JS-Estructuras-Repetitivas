// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.
const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt("Ingrese un número: "));
let b = parseInt(prompt("Ingrese la potencia a elevar: "));

let contador = a;
let ciclo = --b;
let resultado = 0;
for (let i = 1; i <= ciclo; i++) {
  let resultado = contador * a;
  console.log(contador + " * " + a + " = " + resultado);
  contador = resultado;
}
