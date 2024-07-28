// 25. Un autobús hace un recorrido por una ciudad desde un punto inicial donde suben N personas hasta
// un punto final donde descienden todas. El autobús realiza X paradas intermedias. Se sabe que en las
// paradas intermedias suben siempre 3 personas más que en la parada anterior y que desciende el
// 50% de la gente del autobús (sin contar los que suben en dicha parada). ¿Cuántas personas llegarán
// hasta el final del trayecto? Pedir al usuario los valores de N y X. Por ejemplo, para N = 10 y X = 3:

// ┌──────────────┬────────────┬─────────────────────────┬─────────────────────────┐
// │  Parada N°   │ Suben      │ Bajan                   │ Quedan en el autobús    │
// ├──────────────┼────────────┼─────────────────────────┼─────────────────────────┤
// │ Inicial      │ 10         │ -                       │ 10                      │
// │ 1            │ 3          │ 5                       │ 8                       │
// │ 2            │ 6          │ 7                       │ 7                       │
// │ 3            │ 9          │ 8                       │ 8                       │
// │ Final        │ -          │ -                       │ 8                       │
// └──────────────┴────────────┴─────────────────────────┴─────────────────────────┘
const prompt = require('prompt-sync')({ siging: true })

let Suben = 0
let Bajan = 0
let totalPersonas = 0
let n = parseInt(prompt(`Ingrese cantidad de personas que suben al autobus : `))
let x = parseInt(prompt(`Ingrese cantidad de paradas intermedias : `))
totalPersonas+=n
console.log(`Suben inicialmente unas ${n} personas`);

for (i =0; i<x; i++){
    Suben+= 3
    Bajan = totalPersonas/2 
    totalPersonas= Bajan + Suben

    console.log(`Suben ${Suben} personas en la parada Nº ${i+1}`);
    console.log(`Bajan ${Bajan} personas en la parada Nº ${i+1}`);
    console.log(`En el autobus hay unas ${totalPersonas} personas`);
    }
    console.log(`En el final del trayecto quedan ${totalPersonas} en el Autobus`);

