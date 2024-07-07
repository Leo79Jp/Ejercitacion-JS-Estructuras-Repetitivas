// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.

const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt("Ingrese el primer valor: "));
let b = parseInt(prompt("Ingrese el segundo valor: "));

   let resultado
   do{
       resultado = a / b
       console.log('Division con estructura DO WHILE :', a + ' / ' + b + ' = ' + resultado);
        a--
   } while(a >= 0); 