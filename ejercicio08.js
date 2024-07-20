// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

const prompt = require('prompt-sync')({ siging: true }) // Paso adicional: npm i prompt-sync
let A = parseInt(prompt('Ingrese el primer numero: '))
let B = parseInt(prompt('Ingrese el segundo numero: '))

if (A < 0){
    A *= -1
}
if (B < 0){
    B *= -1
}
let contar = 0

while (A >= B) {
    
    A = A - B
    contar++
    if (A>B){
        console.log(`La resta de la division es ${A}`)
    }
  }
    console.log(`Y el resto de la division es ${A}`)
