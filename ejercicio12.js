// 12. Leer 20 números y encontrar el mayor y el menor valor leídos.
// const prompt = require('prompt-sync')({ siging: true }) 

let ultimoMayor = 0
let ultimoMenor = 100

for (let i = 1; i <= 20; i++) {
    const numero = Math.round(Math.random() * 100)
    console.log(numero);
    if (numero > ultimoMayor){
        ultimoMayor = numero
    } else if ( numero < ultimoMenor){
        ultimoMenor = numero
    }
}
console.log(`El numero Mayor es : ${ultimoMayor}`);
console.log(`El numero Menor es : ${ultimoMenor}`);
