//escibe hola 10 veces y termina cuandi i llega a 10
for(let i = 1; i <= 10; i ++){
    console.log( i +' hola ');
}
//escibe hola 10 veces y termina cuandi i llega a 10 contamos de 10 a 1
for(let i = 10; i >= 1; i--){
    console.log(i);
} 

for (let i= 1; i <10; i++){
    for (j=1; j<10; j++){
        for(r=1; r<5; r++){

        console.log('esto es un doble')
    console.log(i, j,r);
}
}
}
console.log('final de ciclo');

// ciclo do while 
 
const tienecoche = false;
do {
    if (tienecoche){
        console.log("puedes salir a la fiesta");
    }else{
        console.log("no hay quien te lleve");
    }
}while(tienecoche ===true);

//while
while(tienecoche===true){
    if (tienecoche){
        console.log("puedes salir a la fiesta");
    }else{
        console.error("no hay quien te lleve");
    }
}


const archivo ="bienvendias al curso de javascript/";

// Do while
let contador = 0;
let letra = '';
let texto = '';
do{
    letra = archivo[contador];
    contador++;
    texto += letra; 
}while(letra !== '/');
console.log(texto);

contador=0;
texto='';
letra='';
//While
while(letra !== '/'){
letra=archivo[contador];
contador++;
texto += letra;
}
console.log(texto);

