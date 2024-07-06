// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.
const prompt = require('prompt-sync')({ siging: true})

// ------------ Multiplicacion con estrutura FOR -----------------------
for (let i = 1; i <= 5; i++) {
    let algoritmo_1 = i * i; 
    console.log( 'Multiplicacion con estructura FOR : ', i + ' * ' + i + ' = ' + algoritmo_1 ); 
   }  

// ------------ Multiplicacion con estrutura WHILE -----------------------
let algoritmo_2 = 1
let resultadoAlgoritmo_2
while(algoritmo_2 <= 5) {
  resultadoAlgoritmo_2 = algoritmo_2 * algoritmo_2
  console.log('Multiplicacion con estructura WHILE :', algoritmo_2 + ' * ' + algoritmo_2 + ' = ' + resultadoAlgoritmo_2);
  algoritmo_2++ 
};


// ------------ Multiplicacion con estrutura DO WHILE -----------------------
let algoritmo_3 = 1
let resultadoAlgoritmo_3
do{
  resultadoAlgoritmo_3 = algoritmo_3 * algoritmo_3
  console.log('Multiplicacion con estructura DO WHILE :', algoritmo_3 + ' * ' + algoritmo_3 + ' = ' + resultadoAlgoritmo_3);
  algoritmo_3++ 
} while(algoritmo_3 <= 5); 