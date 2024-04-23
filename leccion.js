let libro= 'El Programador progmatico';
let telf ='641 2258';
let color='azul';
console.log(libro,telf,color)
console.log('-----------------------------------------------------------------')
let entero =100;
let decimal=1.967858;
console.log(entero,decimal)
console.log('-----------------------------------------------------------------')
let autorizado= true;
let seleccionado=false;
console.log(autorizado,seleccionado)
console.log('-----------------------------------------------------------------')
if(autorizado==false){
    console.log('esta autorizado')
} else{
    console.log('no esta autorizado')
}
console.log('-----------------------------------------------------------------')

const numeros=[20,21,22,25,26,28,27]
console.log(numeros)
numeros.length
console.log(numeros.length)
console.log('-----------------------------------------------------------------')


numeros.forEach(function(elemento) {    //foreach significa por cada uno  
    console.log(elemento*2);
});
console.log('-----------------------------------------------------------------')
const miArray = ["Manzana", "Banana", "Cereza", "uvas"];

miArray.forEach(function(i,elemento) {   //Permite ejecutar un bloque de código para cada elemento de la colección sin necesidad de gestionar manualmente los índices
    console.log(i,elemento);
});
for(i=0;i<miArray.length;i++){     //esto es otra forma para imprimir los elementos de un array
    console.log(i,miArray[i])      //length es la cantidad de elementos que hay en el arrya linea 37
}
console.log('-----------------------------------------------------------------')
let jugadores ={
    10:'messi',
    7:'ronaldo',
    23:'neymar'
}; 
console.log(jugadores[10])  //[10] imprime al jugador con el numero 10 
console.log('-----------------------------------------------------------------')
let paises={
    EC:'ecuador',
    CO:'colombia',
    MX:'mexico'
};
console.log(paises['EC'])  //cuando se trata de texto se le agregran las comillas '' (paises['EC']) imprimira ecuador
console.log('-----------------------------------------------------------------')
let nombre05 ="sebastian";
 let nombre06 ="alejo";
console.log(nombre05 !== nombre06) 
if(nombre05 !== nombre06){
    console.log('no es igual')
}
console.log('-----------------------------------------------------------------')
let edad = 20;
let mensaje =edad >= 18 ? "puede votar": "no puede votar";
console.log(mensaje);

if(edad>=18){
    console.log('puede votar') 
} else{
    console.log('no puedes votar')
}
console.log('-----------------------------------------------------------------')
function sumar(primero,segundo){
    return primero+segundo
}
console.log(sumar(20,40))  //20 seria primero y 40 segundo 


