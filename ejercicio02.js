// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.

// ------------------------------------  Asi lo hice yo! ---------------------------------------
// const prompt = require('prompt-sync')({ siging: true})

// // ------------ Multiplicacion con estrutura FOR -----------------------
// for (let i = 1; i <= 5; i++) {
//     let algoritmo_1 = i * i; 
//     console.log( 'Multiplicacion con estructura FOR : ', i + ' * ' + i + ' = ' + algoritmo_1 ); 
//    }  

// // ------------ Multiplicacion con estrutura WHILE -----------------------
// let algoritmo_2 = 1
// let resultadoAlgoritmo_2
// while(algoritmo_2 <= 5) {
//   resultadoAlgoritmo_2 = algoritmo_2 * algoritmo_2
//   console.log('Multiplicacion con estructura WHILE :', algoritmo_2 + ' * ' + algoritmo_2 + ' = ' + resultadoAlgoritmo_2);
//   algoritmo_2++ 
// };


// // ------------ Multiplicacion con estrutura DO WHILE -----------------------
// let algoritmo_3 = 1
// let resultadoAlgoritmo_3
// do{
//   resultadoAlgoritmo_3 = algoritmo_3 * algoritmo_3
//   console.log('Multiplicacion con estructura DO WHILE :', algoritmo_3 + ' * ' + algoritmo_3 + ' = ' + resultadoAlgoritmo_3);
//   algoritmo_3++ 
// } while(algoritmo_3 <= 5); 



//  ------------------------------ Asi lo hizo el!! -------------------------------------------------

// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.
// A * B = A+A+A+A (B veces) = B+B+B+B (A veces)
// 2 * 5 = 2+2+2+2+2
// 2 * 5 = 5+5
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync

let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let suma = 0
let negativo = false
// Lógica opcional para que se sume la menor cantidad de veces
if (B < 0) {
  B *= -1
  negativo = !negativo
}
if (A < 0) {
  A *= -1
  negativo = !negativo
}

if (B > A) {
  // Intercambio de los valores de las variables [A, B] = [B, A]
  const aux = B
  B = A
  A = aux
}

for (let i = 0; i < B; i++) {
  suma += A
  console.log({ suma })
}

if (negativo) {
  suma *= -1
}

console.log({ suma })