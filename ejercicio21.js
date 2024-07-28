// 21. Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;
// $(2^n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta la fecha por espacio de n semanas.

const prompt = require('prompt-sync')({ siging: true})

let salario = 0.01
let salarioTotal = 0
const semanas = parseInt(prompt('Ingrese cantidad de semanas: '))



for (let i = 0; i <= semanas; i++) {
    console.log(`semana Nº: ${i}`);
    salario = (2 ** (i-1))/100
    console.log(`El salario de la semana es: ${salario}`);
    salarioTotal+= salario
    console.log(`El salarion acumuladi hasta esta semana es: ${salarioTotal}`);
}

