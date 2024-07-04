// Ejercicio 3
// Imprimir un listado con los números del 1 al 100 cada uno con su respectivo cuadrado

const prompt = require('prompt-sync')({ siging: true})

for (let i = 1; i <= 100; i++) {
     let cuadrado = i * i; console.log(`${i} - ${cuadrado}`); 
    }