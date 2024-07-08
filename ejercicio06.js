// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.

// ------------------------------------  Asi lo hice yo! ---------------------------------------

// const prompt = require("prompt-sync")({ sigint: true });

// let a = parseInt(prompt("Ingrese el primer valor: "));
// let b = parseInt(prompt("Ingrese el segundo valor: "));

//    let resultado
//    do{
//        resultado = a / b
//        console.log('Division con estructura DO WHILE :', a + ' / ' + b + ' = ' + resultado);
//         a--
//    } while(a >= 0); 

//  ------------------------------ Asi lo hizo el!! -------------------------------------------------

   // 10 / 3 = 10 - 3 - 3 - 3

let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))
let contar = 0

while (A >= B) {
  A = A - B
  contar++
}
console.log(`el resultado de la division es ${contar}`)
console.log(`el resto de la division es ${A}`)