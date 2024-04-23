var aprobe = false;

if (aprobe == true) {
    console.log("puedo salir");
}
else {
    console.log("tengo que estudiar mirando videos");
}
console.log("------------------------------------------------------------------------")
var barcelona = true;
var realmadrid = false; // Cambiar el valor de realmadrid a true para imprimir el mensaje del Real Madrid

if (barcelona == true) {  //aqui le indicamos el resultado que va aparecer true barcelona false real madrid 
    console.log("el mejor equipo del mundo barca");
} else if (realmadrid == false) {
    console.log("el mejor equipo del mundo real madrid");
}
/* else if te permite establecer una serie de condiciones que se evalúan secuencialmente
 y ejecutar un bloque de código cuando se cumple la primera condición verdadera.
 si if resulta falso se ejecuta else if*/
console.log("------------------------------------------------------------------------")
//video 3
/*
 var color= prompt("ingrese un color");  //en la terminal no se puede escoger el color en el browser si 

 switch(color){
    case "rojo":
        console.log("es rojo");
        break;
    case "azul":
        console.log("es azul");
        break;
    case "amarillo":
        console.log("es amarillo");
        break
    default:
        console.log("el color ingresado no es valido");
        break;
 }
*/
//video 4
console.log("------------------------------------------------------------------------")
let miVector = [1, 2, 3, 4, 5];

console.log(miVector[2]); //los vectores y matrizes arracan desde 0 aqui le estamsos indicando con el 2 que queremos ver las 3 posicion del array que seria el numero 3

let miMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(miMatriz);
console.log("------------------------------------------------------------------------")

let mimatriz = [[1, 2, 3],   //filas 0
[4, 5, 6],   //filas 1
[7, 8, 9]];  //filas 2

let linea = 2
let columna = 0
if (linea <= 3) {
    if (columna <= 3) {
        console.log(mimatriz[linea][columna]);
    }
}
// c c c
console.log(mimatriz[2][0]);
// c columnas  [2]indica la fila 2 [0]indica el numero 7
