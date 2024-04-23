console.log("barcelona")
a=71 // a es una variable 
b=88 // b es una variable 
const c=10
// c=11 eso es imposible porque c es un constante no un variable 
console.log(a+88)
nombre="lionel messi" // esto es un variable
console.log(nombre)
function saludar(nombre){
    console.log("hola,"+ nombre)
}
saludar("michael")
var frutas =["manzana","bananas","uva"];  // eso es un array eso guarda mas variables 
console.log(frutas[0],frutas[1],frutas[2]);
console.log("----------------------------------------------")
for( i=0; i < 3; i++){ 
    console.log(frutas[i]);
}



 edad=18
if (edad>=18) {// mas grande igual
    console.log("eres mayor de edad");
} else {                  // otro condicion 
    console.log("eres menor de edad");
}
var persona ={   //esto es una clase 
    nombre: "michael",
    edad: 2023-2005,
    nacionalidad: "colombia",
    equipo: "barcelona"
};
console.log(persona.nombre); //muestra juan
console.log(persona.edad);
console.log(persona.nacionalidad);
console.log(persona.equipo)

console.log(persona.nombre,persona.edad,persona.nacionalidad)

for( i=0; i < 6; i++){ // sigue hasta que i es mas pequeño que 6
    console.log(i);
}
