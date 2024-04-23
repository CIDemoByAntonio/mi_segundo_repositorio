const logo = document.getElementById('logo')
console.log(logo)

const logov2 = document.querySelector('#logo')
console.log(logov2)

const item = document.getElementsByClassName('item')
console.log(item)

const itemv2 = document.querySelectorAll('.item')
console.log(itemv2)

// .isArray nos permite validar si un arreglo es o un objeto una variable es un arrgelo
console.log(Array.isArray(item),Array.isArray(itemv2)) //false false
console.log(Reflect.has(item, 'forEach'),Reflect.has(itemv2, 'forEach')) 
/* htmcollection no es un arreglo y tampoco puedo ejecutar foreach pero no list tampoco es un
arreglo de la linea 7 false */
/* pero nodelist tampoco es un arreglo pero si puedo eecutar el metodo de foreach*/

console.log(Reflect.has(item, Symbol.iterator), Reflect.has(item, Symbol.iterator)) // true true 

for(elemento of item){
    console.log(elemento)
}
//por cada elemento en la clase item tu imprimes cada elemento esto es un nombre temporal lo puedes cambiar
for(elemento of itemv2){
    console.log(elemento)
}

const links = document.getElementsByTagName('a') 
const linksv2 = document.querySelectorAll('a') //selectar todas las a
console.log(links ,linksv2)

const header = document.querySelector('header') //solo hay un header en html
const hijosheader = header.children //.children extrae cuales son los hijos de nuestro DOM 
console.log(hijosheader)  //hay 2 hijos en header

const hijosheaderv2 =  header.childNodes //chilnode los saltos de linea los interpreta como un nodo o espacios
console.log(hijosheaderv2) //5 elementos

console.log('papa', logo.parentElement, logo.parentNode)//el papa es header de logo porque esta dentro de el header

console.log('hermanos', logo.parentElement.children, logo.nextElementSibling)
//navega al padre y despues a los hijos y eso lo va arrojar a los hermanos
//.nextElementSibling solo obtiene los hermanos sin contar el elemento inicial 





