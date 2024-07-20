// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...


let A = 0
let B = 1
let resultado=0
for (let i = 1; i <= 100; i++) {
    resultado = A + B
    console.log( A + ' + ' + B + ' = ' + resultado);
    A=B
    B=resultado

// console.log( A + ' + ' + B + ' = ' + resultado);
}
