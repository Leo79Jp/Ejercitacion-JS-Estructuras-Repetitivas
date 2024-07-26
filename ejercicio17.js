// 17. Un ciclista recorre diariamente 200 kilómetros en su práctica competitiva. El atleta solicita un
// algoritmo que le permita registrar el tiempo empleado en cada recorrido, al final del proceso el
// algoritmo debería mostrar el promedio de los tiempos empleados. También necesita saber cuántas
// veces su tiempo fue menor a valor dado y cuál fue su mejor tiempo realizado.
const kmRecorrido = 200
const min = 30 // kilometros por hora minimos (Velocidad)
const max = 50 // kilometros por hora maximos (Velocidad)
let mejorTiempo = 10000
let promedio =0
let tiempoDiario 

    for (let i = 1; i <= 5; i++){
        const kmHora = Math.floor(Math.random() * (max - min)) + min;
        tiempoDiario = kmRecorrido * 60 / kmHora
        console.log( `A una velocidad de ${kmHora}km/h, el tiempo empleado fue de ${Math.floor(tiempoDiario)} minutos en realizar los ${kmRecorrido}km`);
        promedio+=tiempoDiario
        if( mejorTiempo > tiempoDiario){
            mejorTiempo = tiempoDiario
        }
    }
    console.log(`El promedio de los tiempos empleados fue de ${Math.floor(promedio/5)} minutos`);
    console.log(`El mejor tiempo en realizar los ${kmRecorrido}km fue de ${Math.floor(mejorTiempo)} minutos`);


