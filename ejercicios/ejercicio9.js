//hacer una funcion que calcule el dinero de vacaiones en holanda 
//se paga 8% en el salario anual (12 * 4800) 4800 salario mensual
//el 8% se calcula 8 / 100 = 0.08 
//el funcion solo utiliza un parametro que es el salario mensual
//que return el dinero de vacaciones 
function calcularvacaciones(salariomensual) {
    const porcentaje = 0.08;  //0.08 es dividio por 8/100 y el resultado es 0.08
    salarioanual = 12 * salariomensual
    return porcentaje * salarioanual
}
console.log(calcularvacaciones(4800))

//
function calcularvacaciones(salariomensual) {
    const porcentaje = 0.08;  //0.08 es dividio por 8/100 y el resultado es 0.08
    return 12 * salariomensual * porcentaje
}
console.log(calcularvacaciones(4800))
console.log("___________________________________")

//funcion que calcule superficie de un rectangulo 
//la formula es anchura  * altura 
//la funcion debe tener dos parametros anchura y altura  y se debe retornar(return) la superfcie

function superficiederectangulo(anchura, longitud) {
    return (anchura * longitud).toFixed(2)
}
console.log("metros cuadrados:", superficiederectangulo(75, 110))

//anchura parametro 75 y largura 110 la definimos en el console.log
//calcula la cirscusferencia de un rectangulo 
//2 veces la achura mas 2 veces la largura
//parametros achura largura
//return circusferencia
function circusferencia(anchura, largura) {
    calculacion = 2 * anchura + 2 * largura
    return calculacion
}
console.log(circusferencia(75 ,110))

//funcion debe tener 2 parametros base y altura  
//uno dividido 2 para obtener el area del triangulo
function superficietriangulo(base, altura) {
    calculacion = (base * altura) /2
    return calculacion 
}
console.log(superficietriangulo(10, 20))

//calcular la circusferencia de un triangulo es sumar los tres lados
//debe retornar los resultados
function calcularcircusferenciatriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3
}
console.log(calcularcircusferenciatriangulo(5, 7 ,9))

//calcular la superficie de un circulo 
//formula es =pi * radio en cuadrado (radio * radio)
//pi 3.14 es un constante que usa para calcular la superficie de un circulo
function superficiecirculo(radio) {
    const pi = Math.PI
    calculacion = pi * (radio * radio)
    return calculacion.toFixed(2)
}
console.log(superficiecirculo(15))

// calcular superferencia de un circulo
//formula 2 * pi * radio
//radio es un parametro
function  superferenciadecirculo(radio) {
    const pi = Math.PI
    calculacion= 2 *pi * radio
    return calculacion.toFixed(2)
}
console.log(superferenciadecirculo(20))

//formula superficie del fondo * altura  
//radio y altura parametro 
//20 litros de gasolina

//voy a pasar 2 parametros el     y el otro es la altura

function contenidodecilindro(superfciedecirculo, altura) {
    calculacion = superfciedecirculo * altura
    return calculacion
}
console.log(contenidodecilindro(superficiecirculo(15),8))

function contenidodecilindro2(radio , altura) {
const pi = Math.PI
calculacion =  pi * (radio * radio) * altura
return calculacion
}
console.log(contenidodecilindro2(15, 8))

//100 de largura 60 anchura 

//vuelvo a llamar la funcion de superficiederectangulo linea 25
console.log("superficie del cuarto", superficiederectangulo(1.68, 3.13))
//medida de la habitacion:
//ancho 168 1,68 metros
//largo 313 3,13 metros 

console.log((1/3).toFixed(2))

//un objeto puede ser una persona un carro o un edificio cualquier cosa 
//cada odjeto tiene sus valores 
//objeto   valor
//altura ,  150 cm
//color de pelo , amarillo
//velocidad,lento


