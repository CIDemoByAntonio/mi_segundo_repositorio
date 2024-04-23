var totalcomida = 2800 + 1300;
var totalbebida = 900 + 650;
var total = totalcomida + totalbebida;
//una funcion para sumar el total e comida y bebida y retornar el total
function sumar(totalcomida, totalbebida) {
    console.log("el resultado de la funcion es :")
    return totalcomida + totalbebida
}
//console.log("el total de comida es:" + totalcomida);
//console.log("el total de bebida es :" + totalbebida);
//console.log("el total de la cuenta es :" + total);
console.log(sumar(totalbebida, totalcomida))   //console.log de la funcion
console.log("-----------------------------")

let costocomida = 1200 + 1300;
let costobebidas = 1550;
let total2 = costocomida + costobebidas;


console.log("total de comida mas postre :" + costocomida);
console.log("costo de bebida :" + costobebidas);
console.log("total de la cuenta :" + total2);
sumar(costocomida + costobebidas)             //funcion
console.log(sumar(costocomida, costobebidas)) //funcion


