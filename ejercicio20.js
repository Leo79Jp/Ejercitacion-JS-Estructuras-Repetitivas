// 20. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. Diseñe un algoritmo que lea por cada cliente, el monto total de su compra. Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.

const prompt = require('prompt-sync')({ siging: true })

let cantClientes = 1
let totalCompra = 0
let totalVenta = 0

do {
    totalCompra = parseInt(prompt(`Ingrese total compra del cliente Nº ${cantClientes}: `))
    cantClientes++
    totalVenta+=totalCompra
    
} while (cantClientes <= 10);

console.log(`Se atendieron un total de ${cantClientes-1} Clientes en el dia`);
console.log(`El total de ventas del dia fue de $${totalVenta}`);