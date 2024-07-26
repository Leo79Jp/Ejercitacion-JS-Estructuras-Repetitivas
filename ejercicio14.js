// 14. Leer 10 valores desde teclado y mostrar la media de los pares y la media de los impares. Hacer tres
// versiones, con un bucle: para, mientras y repetir. Repetir el ejercicio considerando que el número de
// valores se le solicita al usuario.
const prompt = require('prompt-sync')({ siging: true }) 
let pares = 0
let cantPares = 0
let impares = 0
let cantImpares = 0
let index = 0

/*  ------------------------- Ciclo For ------------------------ */
// for (let i = 1; i <= 10; i++) {
//     valorIngresado = parseInt(prompt(`Ingrese un numero: `))
//     if ((valorIngresado%2) == 0) {
//         pares+= valorIngresado
//         cantPares++
//     }
//     if ((valorIngresado%2) !== 0) {
//         impares+= valorIngresado
//         cantImpares++
//     }
// }
// console.log(`La media de los numeros pares es: ${pares / cantPares}`);
// console.log(`La media de los numeros Impares es: ${impares / cantImpares}`);

/*  ------------------------- Ciclo do While ------------------------ */

// do {
//     valorIngresado = parseInt(prompt(`Ingrese un numero: `))
//     if ((valorIngresado%2) == 0) {
//         pares+= valorIngresado
//         cantPares++
//     }
//     if ((valorIngresado%2) !== 0) {
//         impares+= valorIngresado
//         cantImpares++
//     }
//     index++
// } while (index != 10);
// console.log(`La media de los numeros pares es: ${pares / cantPares}`);
// console.log(`La media de los numeros Impares es: ${impares / cantImpares}`);

/*  ------------------------- Ciclo  While ------------------------ */

while (index !=10) {
    valorIngresado = parseInt(prompt(`Ingrese un numero: `))
    if ((valorIngresado%2) == 0) {
        pares+= valorIngresado
        cantPares++
    }
    if ((valorIngresado%2) !== 0) {
        impares+= valorIngresado
        cantImpares++
    }
    index++
}
console.log(`La media de los numeros pares es: ${pares / cantPares}`);
console.log(`La media de los numeros Impares es: ${impares / cantImpares}`);
