// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000
const prompt = require('prompt-sync')({ siging: true})

//  ---------  Estructura FOR con numeros IMPARES  ---------------
for (let impares = 1; impares <= 999; impares+= 2) {
    console.log( impares); 
   }

//  ---------  Estructura FOR con numeros PARES  ---------------
for (let pares = 2; pares <= 1000; pares+= 2) {
console.log(pares); 
}