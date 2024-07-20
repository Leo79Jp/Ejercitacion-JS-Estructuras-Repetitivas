// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial.
const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync
let A = parseInt(prompt('Ingrese un numero: '))

if (A < 0){
    A *= -1
}

for (let i = 1; i <= A; i++) {
        let valor = 1
        let factorial=1

    while (valor<=i){
        factorial *= valor
        valor++
    }
    console.log( i + ' = ' + factorial );
  }


