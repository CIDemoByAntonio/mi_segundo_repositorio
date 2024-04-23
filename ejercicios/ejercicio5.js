for (var i = 1; i < 11; i++) {
    console.log(i)
}
console.log("--------------------------------------")
var equipos = ["barcelona", "liverpol", "atalanta", "atletico", "ajax", "atletico nacional"];
console.log("cantidad de equipos", equipos.length)

for (var i = 0; i < equipos.length; i++) {
    console.log(equipos[i])
}
console.log("--------------------------------------")

equipos.forEach(function (equipo) {
    console.log(equipo);
});


var frutas = ["manzana", "pera", "melocoton", "kiwi", "mango"];
console.log("cantidad de frutas:", frutas.length)
console.log("1--------------------------------------")


for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
console.log("2--------------------------------------")

frutas.forEach(function (fruta) {
    console.log(fruta)
});

let lloviendo = false;    //definir la variable
if (lloviendo == true) {
    console.log("lleva una sombrilla");
} else {
    console.log("no tengo que lleva sombrilla")
}


var cifras = [1, 12, 10, 5, 7, 8];
console.log("cantidad de cifras", cifras.length)

for (var i = 0; i < cifras.length; i++) {
    console.log(cifras[i] * 2)
}
cifras.forEach(function (cifra) {
    console.log(cifra * 2)
});

function suma(numero1, numero2) {    //definir la funcion
    let respuesta = numero1 + numero2;
    console.log('respuesta:', respuesta);
}
suma(10, 10)   //ejecutas ka funcion con los valores 10,10

function resta(cifra1, cifra2) {
    return cifra1, cifra2;  //retornar el valor de la funcion 
}
console.log(resta(20, 10)) //se imprime la funcion resta y se resta 20-10