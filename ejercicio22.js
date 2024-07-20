// 22. Calcular la nota promedio de un salón de clase y la nota mayor y el código del estudiante
// que la obtuvo, validar que las notas ingresadas se encuentren en el intervalo [0,10]. El
// ingreso de notas finaliza a pedido del operador.
const prompt = require('prompt-sync')({ siging: true})
let mayorNota = Number.MIN_SAFE_INTEGER
let codMejorEstudiante = 0 
let sumaNotas = 0
let cantidadNotas = 0
let opcion = 'S'
let nota =0
let codAlumno


do {
    do {
        nota = Number(prompt('Ingrese una nota entre 0 y 10: '))
    } while (nota < 0 || nota > 10);
    codAlumno = Number(prompt(`Ingrese el codigo del alumno`))
// calcular mayor nota

} while (opcion = 1);