//si la temperatura es mas que 100(>100)debes poner que se esta hirviendo y si esta bajo cero(<0)se congelando 
//parametro es la temperatura 
function grados(temperatura) {
    if (temperatura > 100) {                          //if comparacion
        console.log("se esta hirviendo")
    } else if (temperatura < 0) {
        console.log("se esta congelando")
    } else {
        console.log("no pasa nada")
    }
}
console.log(grados(-2))

//contar la cantidad de puntos que tiene barcelona en la champions
//cantidaddepuntos=(partidosganados*3)+(empatado*1)+(perdido*0)
//3 parametros ganado empatado y perdido y tiene que retornar la cantidad de puntos (return)
function cantidaddepuntos(ganados, empatado, perdido) {
    puntos = (ganados * 3) + (empatado * 1) + (perdido * 0)           //calculacion
    return puntos
}
console.log(cantidaddepuntos(3, 0, 1))
//bmi 
function bmi(peso, altura) {
    bmi = peso / (altura * altura)
    return bmi.toFixed(2)  //corta los numeros largos 
}
console.log(bmi(80, 1.75))
//bmi (if)si es mas paqueño que 18.5 es "bajo peso "
//si es mas (if) que 18.5 y (&&) menos que 24.9 es "peso normal"
//bmi es el parametro 
function peso(bmi) {
    if (bmi < 18.5) {
        console.log("bajo peso")
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log("peso normal")
    }
}
console.log(peso(20))

var frutas = ["manzana", "pera", "kiwi", "melocoton", "piña"];  //array

frutas.push("manzana")  //agregar un elemento mas de manzana
frutas.forEach(function (frutas) {
    console.log(frutas)
})
console.log("---------------------------------")
frutas.shift()               //pop quita el ultimo elemento y shift y quita el primer elemento esta caso manzana
frutas.forEach(function (frutas) {
    console.log(frutas)
})
console.log("---------------------------------")
frutas.sort()       //desorganiza la lista o reverse de mayor a menor 
frutas.forEach(function (frutas) {
    console.log(frutas)
})


  

