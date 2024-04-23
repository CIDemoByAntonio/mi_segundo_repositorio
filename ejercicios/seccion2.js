let edad = 24
if (edad > 18) {
    console.log("eres mayor de edad")
} else {
    console.error("aun no eres mayor")
}
if (edad > 10 && edad < 18) {  //&& siginifica tambien 
    console.log("aun no estas en la universidad")
} else {
    console.log("seguramente estas estudiando una carrera")
}


let tienecoche = false

if (!tienecoche) {  // ! signfica lo contrario a lo establecido en la linea 14
    console.log("puedes manejar")
} else {
    console.log("no puedes salir a manejar")
}

//switch
let objeto = "oso"
switch (objeto) {
    case "enemigo":
        console.log("accion atacar");
        break;

    case "piedra":
        console.log("accion caida");
        break;

    case "animal":
        console.log("cocinar animal");
        break;
    default:
        console.log("accion seguir camino ")
}
console.log("-----------------------")
//condicionales ternario nos permite simplificar una condicional de este tipo
let likes = 5
if (likes === 1) {
    console.log(likes, 'like')
} else {
    console.log(likes, "likes")
}
//para trasladarlo a una sola linea de codigo se utiliza para mostrar un mensaje, string o numero basado de una condicional
(likes === 1) ? console.log(likes + ' like') : console.log(likes + ' likes')
console.log((likes == 1) ? likes + " like" : likes + " likes")
console.log("-----------------------")
//ciclos

for (let i = 0; i < 10; i++) {
    console.log("hola")
}
console.log("-----------------------")
let i = 3
while (i < 4) {
    console.log("hola")
    i++
}
console.log("-----------------------")
//ciclo while
const tienecoche1 = false
do {
    if (tienecoche1) {
        console.log("puedes salir a la fiesta")
    } else {
        console.log("no hya quien te lleve")
    }
} while (tienecoche1 === true)

const archivo = "bienvenidos/"
//do while
let contador = 0
let letra = ''
let texto = ''
do {
    letra = archivo[contador]
    console.log(letra)
    console.log("------------")
    contador++
    texto += letra
} while (letra != '/')

console.log(texto)
console.log("------------")
contador = 0
while (contador < archivo.length) {
    console.log(archivo[contador])
    contador++
}
console.log("------------")

//funciones 
function suma(numero1, numero2) {
    let res = numero1 + numero2
    return res
}
console.log(suma(5, 8))

if (suma(8, 7) < 20) {
    console.log("el resultado de la funcion es mas pequeño que 20")
}


function multiplicar(numero01, numero02) {
    const respuesta = numero01 * numero02
    console.log(respuesta)
}
multiplicar('5', '9') //se define el valor de numero01 y numero02
console.log("------------------------")
//Argumentos de funciones video 21 del curso de udemy

function area(figura = 'cuadrado', base = 0, altura = 0) {
    let resultado = 0
    switch (figura) {
        case 'cuadrado':
            resultado = base * base;
            break;

        case 'rectangulo':
            resultado = base * altura;
            break;

        case 'triangulo':
            resultado = (base * altura) / 2;
            break;

        default:
            throw new error('figura no encontrada')
            break;
    }
    return resultado
}
const res = area('rectangulo', 10, 20)
console.log(res)

//argumento de funciones   no entiendo de donde sale el resultado
function perimetro(...lados) {
    let suma = 0
    for (let i = 0; i < lados.length; i++) {
        suma = suma + lados[i]
        console.log(suma)
    }
    return suma
}
console.log(`Èl perimetro de la figura es ${perimetro(2, 4, 5, 6)} `)

/*const suma = function (...numeros) {   // parametros arrest (...numeros) 
    let suma = 0;
    let contador = 0;

    while (contador < numeros.length) {
        suma += numeros[contador]
        contador++;
    }
    return suma
}
console.log(`la suma es ${suma(2, 4, 5, 6)}`) // es una funcion pero los trata como arreglos*/

/*funcione anonimas  estructura 
function suma(param1, param2) {}
 suma(10, 'hola')*/

/*funciones anonimas son
tener funciones las cuales no son nombradas no tiene un nombre y
 por lo tanto no tienen una forma de ser ejecutadas posteriormente

  ESTRUCTURA
( function(){                  ( function(){
   //codigo                     //codigo
});                            })();
definicion                     ejecucion

*/
/*funciones de flecha 
  ESTRUCTURA

function iniciarUI(param1, param2){
   codigo
}
                                   =>esto remplaza la palabra funcion de arriba
const iniciarUI = (param1, param2) =>{    
   //codigo 
}
*/
function saludo(nombre) {
    return 'hola,' + nombre
}
console.log(saludo)

//funcion de flecha
const gradosCelsios = (valor) => {
    return valor * 274.15
}
console.log(gradosCelsios(15))  //se multiplica 15 * el valor que le agregamos que seria 274.15

//funcion de flecha simplificado
//codigo
const gradosCak = (valor) => valor * 274.15

console.log(gradosCak(4))

/*si tenemeos este escenario de un solo codigo lo podemos simplificar a una sola linea 
podemos quitar las llaves {}
 y quitar el return porque no hace falta porque es una sola linea que estoy regresando
 */
//ejercicio de flecha por mi cuenta

//parametro es:(kilogramos)
/* definimos una variable llamada conversion con el parametro
 kilogramos flecha defino una variable la cual va hacer igual a kilogramos y se va a * 2.205 que equivalen a las libras*/
const conversion = kilogramos => kilogramos * 2.205  //1 kilogramo son 2,205 libras
console.log('mis libras son :', conversion(68)) //aqui le agregamos el valor a kilogramos y se * por las libras 
/*en este caso solo tenemos un parametro al utilizar funciones de flecha podemos eliminarlos () 
si tuvieramos dos parametros no se podria*/

//return bmi.toFixed(2) corta los numeros largos 
console.log("------------------------")

// función anónima autoinvocada

/*(() =>{
    const nombre ="marcos"
    console.log(nombre)
    console.log("Esta es una función anónima autoinvocada")
})()*/

/* generadores 25 video
son funciones especiales que pueden pausar y reanudar su ejecución.
 Permiten producir una secuencia de valores a lo largo del tiempo en lugar de calcular un solo valor

 .next() nos permite ejecutar el codigo de nuestro generador y devolvernos el valor de yield a partir
  de hay se detener  se va a guardar
  yield para pausar la ejecución y devolver valores sucesivos en cada llamada
   */
function* nombres() {
    yield 'juan';
    yield 'maria';
    yield 'sebastian';
    yield 'sergio';

    return 'marcos';
}
const iterator = nombres();
/*console.log(iterator.next().value); //solo muestra el valor juan que guardo en mi generador 
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

let valor = iterator.next();
console.log(valor)
console.log("------------")
while(valor.done != true){
    console.log(valor.value);
    valor = iterator.next();
}
console.log('__________________________')
//objetos
let isabelle =new Object()
isabelle['altura'] = 150 
isabelle['color_pelo'] = 'amarillo'
isabelle['velocidad'] = 'lento'

console.log(isabelle['velocidad'])

let club =new Object()
club['nombre'] = 'barcelona'
club['color'] = 'blaugrana'
club['estadio'] = 'camp nou'
club['entrenador'] = 'xavi'
club['capacidad'] = 45000 

    
 console.log(club)

 let equipo ={
    nombre: 'barcelona',
    color: 'blaugrana',
    estadio: 'camp nou',
    jugadores: 20 ,
    presidente: 'laporta' ,
    clasificacion:{
        juegos: 20 ,
        posicion: 1,
    
    }
 }
 console.log(equipo.nombre,equipo.clasificacion.posicion)

 let personajes = [
{
    altura: 150,
    color_pelo: 'amarillo',
    chaleco:{                                     //1
        color: 'verde'
    }
},
{
    altura:140,
    color_pelo:'cafe',
    chaleco:{                                     //2
        color:'azul'
    }
},
{
altura: 160,
color_pelo:'blanco',
chaleco:{                                         //3
    color:'undefined'
}
}
 ] //se cierra el array
 console.log(personajes[0].chaleco.color) //resultado color verde del primer array

 let datos ={
    nombre: 'marcos',
    edad:28,
    bilingue: true,
    habilidades:['programacion','dibujo','futbol']
 }
 console.log(datos)

 console.log(datos.habilidades[2])
 console.log(datos.habilidades.length) //length cuenta los elementos que hay en el array son 3

//metodos en objetos 
//un metodo de objeto es una funcion dentro de un objeto 

let kk ={
    altura:160,
    color_pelo:'blanco',
    cantar: function(arg1, arg2){
        return 'la plata'
    }
}
console.log(kk.cantar('diomedez','diaz'))

console.log(kk.altura,kk.cantar('',''))

//metodos de nuestros objetos
const usuario ={
    id:5,
    nombre:'sara',
    edad:38,
    saludo: function(){  //puedo colocar parametros o funcion de flecha
        return 'hola bienvenido al curso'
    }
}
console.log(usuario.saludo())  //saludo es una funcion lleva los ()
console.log(usuario.nombre,usuario.saludo())

const viaje = {
    tiempo: function(distancia, velocidad){
        return (distancia /velocidad).toFixed(2)
    }
}
console.log(viaje.tiempo(40,60))

console.log((0.333).toFixed(2)) //el tercer decimal es mas pequeño que 5 se imprimira 0.33
console.log((0.335).toFixed(2)) //el tercer decimal es mas grande que 4 se imprime 0.34
console.log((0.336).toFixed(2)) //el tercer decimal es mas grande que 4 se imprime 0.34
console.log((0.316).toFixed(1)) //el segundo decimal es mas pequño que 5 se imprime 0.3


const lonchera ={
    comida: function(comida,bebida){
        return (comida * bebida)
    }
}
console.log('mi lonchera cuesta:',lonchera.comida(10 , 10))

// voy acomer con 4 personas dividir el total de comida entre los 4 personas
// parametro comida y bebida
//gasto total de comida y de la bebida debe pasarlo por parametro 
function cuenta(gasto) {
    return (gasto / 4)
}
console.log(cuenta(100))
console.log("-------")

const name ={
    id:5,
    nombre:'sara',
    edad:38,
    saludo: function(){  //puedo colocar parametros o funcion de flecha
       console.log("este es el nombre",this.nombre)  //this significa este elemento
       console.log("este es el id",this.id)
        return 'hola bienvenido al curso' //return solo se utiliza una vez
        //return this.nombre
    }
}
console.log(name.saludo())

const viaje02 ={
    distancia: 40,
    velocidad: 60,
    tiempo: function(){
        return (this.distancia/ this.velocidad).toFixed(2)//lo que viene detras del punto son decimales
    } //en este caso quiero imprimir dos decimales que seria 0.666 vas a hacer 0.67 porque el tercer decimal es mas grande que 4 
}
console.log(viaje02.tiempo())
console.log((0.66).toFixed(0))
//en este caso no quiero decimales porque el primer decimal es mas grande que 4 vas a imprimir uno 
console.log((0.43).toFixed(0))
//vas imprimir 0 porque el primer decimal es 4 y es mas pequeño que 5 
console.log((8.438).toFixed(2))//dos decimales. el tercer decimal debe ser mas grande que 4 entonces aumenta 1 al segundo decimal
//vas a imprimir el 8 con dos decimales porque el tercer decimale es mas grande que 4 imprimira 8.44
console.log((7.322).toFixed(0))//imprimira 7.
console.log((7.522).toFixed(0))//imprimira 8 
console.log((6.432).toFixed(2))//imprimira 6.43 //el tercer decimal 2 es mas pequeño que 5
console.log((6.438).toFixed(2))//imprimira 6.44 porque el tercer decimal 8 es mas grande que 4
console.log((5.8).toFixed(0))
console.log((5.4).toFixed(0))//4 menor que 5 entonces no hay decimales resultado 5
console.log((6.2).toFixed(0))//6
console.log((6.7).toFixed(0))//
//si es mas grande que 4 agrega uno mas a la cifra anterior
//si es mas pequeño que 5 queda lo mismo la cifra anterior
console.log((8.72).toFixed(0))//9
console.log((3.88).toFixed(1))//el resultado va hacer 3.99 ´porque 8 es mas grande que 4
console.log((8.655).toFixed(1))//8.7
console.log((5.432).toFixed(1))//5.4
console.log((7.802).toFixed(0))//8
console.log((5.432).toFixed(0))//5
console.log((7.826).toFixed(2))//7.83
console.log((8.976).toFixed(2))//8.98








