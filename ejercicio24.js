// 24. Un galpón tiene al comienzo de la jornada una cantidad inicial (Stock inicial) de cajones
// con productos de un solo tipo, luego repetidamente, entran y salen camiones, que traen o
// llevan cantidades de cajones. Si no alcanza la cantidad a llevar, se debe mostrar un mensaje
// “NO ALCANZA”, se lleva todo lo que hay; se muestra lo que se lleva y el galpón queda vacío.
// Se muestra al final de la jornada cuantos cajones hay en el galpón (Stock final), y cuantos
// cajones ingresaron y cuantos cajones salieron en toda la jornada. Ejemplo:

// ┌─────────────┬───────────┬────────────────┬────────────────┐
// │  Movimiento │  Cantidad │  Stock Inicial │  Stock Final   │
// ├─────────────┼───────────┼────────────────┼────────────────┤
// │ Ingreso     │ 10        │ 50             │ 60             │
// │ Egreso      │ 20        │ 60             │ 40             │
// │ Ingreso     │ 15        │ 40             │ 55             │
// │ Egreso      │ 60        │ 55             │ NO ALCANZA     │
// └─────────────┴───────────┴────────────────┴────────────────┘
const prompt = require('prompt-sync')({ siging: true })
let cantIngreso = 0
let cantEgreso = 0
let stockInicial = 100
let stockFinal = 0
let vueltas = 1
do {
    tipoMovimiento = parseInt(prompt(`Ingrese el tipo de movimiento "1 = Ingreso" o  "2 = Egreso" : `))
    if  (tipoMovimiento == "1"){
        Movimiento = parseInt(prompt(`Ingrese la cantidad que Ingreso : `))
        stockFinal= stockInicial+ Movimiento
        stockInicial+=Movimiento
        cantIngreso+=Movimiento
    }else if (tipoMovimiento == "2"){
        Movimiento = parseInt(prompt(`Ingrese la cantidad que Egreso : `))
        if( stockInicial<Movimiento){
            console.log(`No Alcanza, se llevan ${stockInicial} cajones`);
            cantEgreso+=stockInicial
            stockFinal= 0
            stockInicial=0
        }else{
            stockFinal= stockInicial- Movimiento
            stockInicial-=Movimiento
            cantEgreso+=Movimiento
        }
    }
    vueltas++
} while (vueltas<=5);

console.log(`La cantidad de cajones que ingresaron fueron: ${cantIngreso}`);
console.log(`La cantidad de cajones que egresaron fueron: ${cantEgreso}`);
console.log(`El stock Final de cajones es de: ${stockFinal}`);
