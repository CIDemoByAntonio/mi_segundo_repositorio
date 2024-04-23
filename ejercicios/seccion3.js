let numeros = [1, 2, 5, 6]
numeros.push(12)  // .push agrega un numero al final que en este caso seria 8
console.log(numeros)
console.log(numeros.indexOf(1))  //el 5 del array esta en la posicio de 2 
console.log("------------------------------")

/*let cordenadas =[10.236, 11.55, 5505, 2022]
console.log(cordenadas)
cordenadas.push(9.99)
console.log('push', cordenadas)
console.log(cordenadas.indexOf(11.55))
let digitos = cordenadas.pop()  
console.log(digitos)*/

let cordenadas = [10.236, 11.55, 5505, 2022]
console.log(cordenadas)
cordenadas.unshift(888)
// console.log(digitos)

console.log("-----------------------")
let letras = ['b', 'c'];
letras.unshift('a'); // Agrega 'a' al principio del array
console.log(letras)
console.log("-----------------------")

let numeros22 = [1000, 2000, 8000, 5000, 6000];
console.log(numeros22)

numeros22.push(55)
console.log('con push agrego 55 al final', numeros22)

const posicion = numeros22.indexOf(8000)
console.log('posicion de 8000', posicion)
console.log("-----------------------")
//MAP
const mapa = new Map();
mapa.set('argentina', 10);
mapa.set('uruguay', 8);
mapa.set('colombia', 6);
console.log(mapa)

const pais = mapa.get('uruguay'); // nos permite saber el numero del indice de uruguay que es 8
console.log(pais)

console.log("-----------------------")
const navegador = new Map();
navegador.set('browser', 'firefox')
console.log(navegador.get('browser'))

for (let elemento of mapa) {
    console.log(elemento)
}
console.log("-------------------------------")
let personalia = new Map()
personalia.set('nombre', 'messi');
personalia.set('edad', 36);
personalia.set('pais', 'argentina');
personalia.set('dorsal', 10);
for (let elemento of personalia) {
    console.log(elemento)
}
console.log(personalia.get('edad')) //le indicamos con el (personalia.get('edad')) que imprima la edad de messi 36

let datos = new Map()
datos.set('url', 'https://www.fcbarcelona.es/es/')
datos.set('navegador', 'chrome')
console.log(datos)
for (let elemento of datos) {
    console.log(elemento)
}

//strings cadenas de texto 

//slice extrae una parte del texto y lo devuelve texto.slice(7,12) quiero me extraiga el indice 7 hasta el 12
//substr extrae(0,4)indice 0 y 4 caracteres que queremos sustraer 
//upperCase() convierte un texto en mayusculas
//lowerCase() convierte un texto en minusculas
//concat() une dos o mas cadenas de textos 
//trim() remueve los espacios al inicio y final de una cadena de texto para eliminar caracteres de inicio al final
//split() convierte una cadena de texto en arreglo definido por un separador casilla


let mensaje = "hubo un error al procesar la solicitud "
console.log(mensaje)


console.log(mensaje[3])
console.log('longitud', mensaje.length)

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i])
}

const valor = 15
let texto = `Bienvenidos al curso ${valor} ${2 * 3}
Este es un salto de linea`
console.log(texto)

console.log('oscar' === 'Oscar') // false por las O mayuscula
console.log('0' == 0) //true   == solo compara la clase y el valor   
console.log('0' === '0')
console.log(typeof '0', typeof 0)  //string es texto '0' number 0
console.log("_________________________")

//indexof
mensaje = "curso de javascript para principiantes"

console.log(mensaje.indexOf("javascript")) // esta en la posicion 9 javascript
console.log(mensaje[mensaje.indexOf("javascript")])
//indexof me va decir desde donde empieza el indice que seria j de ("javascript")

//lastindexof
console.log(mensaje.lastIndexOf('a'))
//lastIndexOf busca el ultimo indice de la ultima letra a en mi texto que esta en la ultima posicion 33
console.log("__________________")
//slice 
console.log('este es el mensaje original:', mensaje)
let res = mensaje.slice(9, mensaje.length) //elimina la palabra curso de el indice indica que elimine 9 palabras
console.log(res)

// slice indice inicial y final resultado curso de j
let rest = mensaje.slice(0, 10) //indice 0 cantidad de letras 2
console.log(rest)

//substr indice inicial y el numero de caracteres 
res = mensaje.substr(9, 10) //empieza en el indice 9 y coge 10 letras
console.log(res)

//replace
//remplaza palabras del texto en este caso javascript por php
res = mensaje.replace('javascript', 'php')
console.log(res, 'texto original', mensaje)

//toUpperCase
//cambia el texto a mayuscula
res = mensaje.toUpperCase()
console.log(res)

//toLowerCase
//cambia el texto a minusculas
res = mensaje.toLowerCase()
console.log(res)

//concat
let primernombre = 'john'
let segundonombre = 'mario'
let apellido = 'smith'
res = primernombre.concat(segundonombre, apellido, '  josh', '  awo')
console.log(res)

let primernombre1 = 'john'
let segundonombre1 = 'mario'
let apellido1 = 'smith'
let espacio = ' '
res = primernombre1.concat(espacio, segundonombre1, espacio, apellido1, espacio, 'josh', espacio, 'awo')
console.log(res)//.concat pegar un texto a otro texto 

//trim
let mensajehttp = '                             transaccion exitosa           '
console.log(mensajehttp)
console.log(mensajehttp.trim())  //trim elimina los espacios sobrantes

//split
//convierte una cadena de texto en un array
let mensajerror = 'busqueda no devolvio resultados'
console.log(mensajerror.split(' '))

//seccion 3 video 48 this 
let edad = 10
let nombre1 = 'john'

console.log(edad, nombre1)

this.name = 'jessica'
this.years = 40
console.log(this.name, this.years)

console.log(this) //this es un objeto global

const user = {
    id: 5,
    nombre: 'sarah',
    edad: 38,
    saludo: function () {
        return `hola, ${this.nombre}`
    },
    getedad: function () {
        return this.edad
    }
}
console.log(user.saludo())
console.log(user.getedad())

//seccion 3 video 49 call, apply y bind

window.name = 'sara'
const usuario ={
name: 'marcos'
}
const business ={
    name: 'headbook'
}

function showInfo(likes, friends) {
    return `${this.name} tiene ${likes} likes y ${friends} amigos`
}
console.log(showInfo(10,5)) //sara tiene 10 likes y 5 amigos
console.log('esto es un call:',showInfo.call(usuario,5, 8))//marcos tiene 5 likes y 8 amigos
console.log('esto es un apply:',showInfo.apply(business,[6,9])) 
/*la diferencia de call y apply es que apply
hacen lo mismo pero en vez de separar parametros separado por comas como call
apply lo hace dentro un arreglo
*/

const newfunction = showInfo.bind(user)
console.log('esto es un bind:',newfunction(10, 15))

//el objetivo de los 3 es poder asociar un objeto a this
//call parametros separados por comas
//apply parametros dentro de un arreglo

//seccion 3 video 50 desestructuracion

 const gebruiker ={
    id: 5,
    nombre: 'ramiro',
    edad: 38,
    habilidades: [
        {
            id: 0,
            nombrehabilidad: 'programacion'
        },
        {
            id: 1,
            nombrehabilidad: 'canto'
        }
    ]
 }
 /*const id =gebruiker.id
 const nombre = gebruiker.nombre
 const habilidad01 =gebruiker.habilidad[0].nombrehabilidad*/
//gebruiker usuario
const {id, nombre, habilidades} = gebruiker
console.log(id, nombre, habilidades)

const[habilidad01, habilidad02] =habilidades
console.log(habilidad01,habilidad02)

const elementos = [
    {id:0, nombre: 'kk'},
    {id:1, nombre:'canelita'},
    {id:2, nombre:'nook'} 
]

const[kk,canelita, nook] = elementos
console.log(canelita, nook, kk)










