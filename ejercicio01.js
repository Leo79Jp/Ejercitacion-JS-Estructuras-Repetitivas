// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.
const prompt = require('prompt-sync')({ siging: true})

let nota
let suma = 0
let cantidad = 0
let promedio

do {
    cantidad++
    nota = prompt(`Ingrese la nota Nº ${cantidad}:`) //alt 96
    nota = parseInt(nota)
    suma += nota
    console.log({nota});
} while (nota >= 0);