// 15. Escribir un programa que lea números enteros de teclado hasta que encuentre uno que cumpla las
// siguientes condiciones:
// • Múltiplo de 2.
// • No múltiplo de 5.
// • Mayor que 100.
// • Menor que 10.000.

const prompt = require('prompt-sync')({ siging: true }) 
let resultado = 1
do {
    valorIngresado = parseInt(prompt(`Ingrese un numero: `))
    if (valorIngresado>100){
        console.log('Es mayor a 100');
        if (valorIngresado<10000){
            console.log('Es menor que 10000');
            if(valorIngresado%5 != 0){
                console.log('No es multiplo de 5');
                if (valorIngresado%2 == 0){
                    console.log('Es multiplo de 2');
                    console.log('Valor correcto');
                    resultado = 0
                }
            }
        }
    }

} while ( resultado == 1 );

