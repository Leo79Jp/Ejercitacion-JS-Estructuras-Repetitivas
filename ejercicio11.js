// 11. Calcular el factorial de 10 números diferentes cuyos valores se leen.

const prompt = require('prompt-sync')({ siging: true }) 

for (let i = 1; i <= 10; i++) {
        let valor = 1
        let factorial=1
        const nroSecreto = Math.round(Math.random() * 20)
        if (nroSecreto < 0){
            nroSecreto *= -1
        }
        
    while (valor<=nroSecreto){
        factorial *= valor
        valor++
    }
    console.log( nroSecreto + ' = ' + factorial );
  }
