// Ejercicio 5
// Imprimir los números pares desde N (siendo N un número par que se lee) en forma descendente
// hasta 2


const prompt = require('prompt-sync')({sigint: true}); 
// Solicitar al usuario que ingrese un número par 
let N = parseInt(prompt('Ingrese un número par mayor o igual a 2: ')); 

// Verificar si N es un número par y mayor o igual a 2 

if (N >= 2 && N % 2 === 0) { console.log(`Números pares descendentes desde ${N} hasta 2:`); 
for (let i = N; i >= 2; i -= 2) { console.log(i); } } else { console.log('El número ingresado no es válido. Por favor, ingrese un número par mayor o igual a 2.'); }
