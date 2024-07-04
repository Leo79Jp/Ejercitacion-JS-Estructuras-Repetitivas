// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000
const prompt = require('prompt-sync')({ siging: true})

for (let i = 1; i <= 99; i+= 2) {
    console.log( i); 
   }
   for (let i = 2; i <= 100; i+= 2) {
    console.log( i); 
   }