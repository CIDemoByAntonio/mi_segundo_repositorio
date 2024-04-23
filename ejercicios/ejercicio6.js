//una funcion para calcular grados fahrenheit a grados celsius
//una funcion con una parametro de grados fahrenheit y retorna los grados celsius
//°C = (°F - 32) * 5/9
function celsiusAfahrenheit(fahrenheit) {
    celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}
console.log(celsiusAfahrenheit(68))

//formula (°C × 9/5) + 32
function fahrenheitAcelsius(celsius) {
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit
}
console.log(fahrenheitAcelsius(18))
/////////
//IMC = Peso (kg) / (Altura (m) * Altura (m))
function bmi(peso, altura) {
    bmi = peso / (altura * altura)
    return bmi
}
console.log(bmi(80, 1.75))

/*parametro hora es antes y o igual que las 12 y
 y si es mas tarde o igual que las 6 tiene que escribir buenos dias si es mas tarde que las 12 es buenas tardes*/

function horadeldia(hora) {
    if (hora <= 12 && hora >= 6) {    //&& significa tambien hora debe ser menor que las 12 y hora tiene que ser mayor o igual a las 6
        console.log("buenos dias");
    } else if (hora > 12 && hora <= 18) {
        console.log("buenas tardes");
    } else if (hora > 18) {
        console.log("buenas noches");
    }
}
console.log(horadeldia(5))

//funcion para comparar dos cifras si el primero es ma grande que el segundo retorna true si no retorna es falso 
function cifras(cifra1, cifra2) {
    if (cifra1 > cifra2) {
        return true
    } else {
        return false
    }
}
console.log(cifras(10, 5))

//quiero saber si el nombre kiwi aparece en el array 
var frutas = ["manzana", "pera", "kiwi", "melocoton", "piña"];

frutas.forEach(function (fruta) {
    if (fruta == "kiwi") {
        console.log("kiwi aparece en la lista");
    } 
});





