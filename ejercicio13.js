// 13. Escribir un programa que lea valores enteros hasta que se introduzca un 0 y calcule la media de los
// positivos y la media de los negativos

const prompt = require('prompt-sync')({ siging: true }) 
let sumaPositivos = 0
let sumaNegativos = 0
let cantidadPositvios = 0
let cantidadNegativos = 0

do{
    valorIngresado = parseInt(prompt(`Ingrese un numero:  `))
    if (valorIngresado > 0){
        cantidadPositvios++
        sumaPositivos +=  valorIngresado    
    }else if (valorIngresado < 0){
        cantidadNegativos++
        sumaNegativos +=  valorIngresado
    }
} while(valorIngresado != 0); 

console.log('La media de los numeros positivos es : ' + (sumaPositivos/cantidadPositvios) );
console.log('La media de los numeros negativos es : ' + (sumaNegativos/cantidadNegativos) );


