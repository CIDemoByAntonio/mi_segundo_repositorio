const oracion = "hola comunidad como estan"
//replaceALl
const oracion2 = oracion.replaceAll("", "")
console.log(oracion2)
console.log(oracion.length)
console.log("---------------------------")

// representar el dia de hoy con el objeto date
const date = new Date()
let dia = date.getUTCDay()
let mes = date.getMonth() + 1
let año = date.getFullYear()

console.log(`el dia de hoy ${dia}/${mes}/${año}`)



//calculadora funcional
const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
console.log(suma(2, 3));

let op = "suma"
let a = 20
let b = 30
let resultado = 0

if (op === 'suma') {
    resultado = suma(a, b)
} else if (op === 'resta') {
    resultado = resta(a, b)
} else if (op === 'multiplicacion') {
    resultado = multiplicacion(a, b)
} else {
    resultado = division(a, b)
}
console.log(resultado)

if(2==='2'){
    console.log("son igual")
}
