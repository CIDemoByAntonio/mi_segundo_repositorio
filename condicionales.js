let numero =11; 
if (numero >0) { 
    console.log("El numero es positivo");
} else if (numero < 0) { 
    console.log ("El numero es negativo");
} else{
 console.log("el numero es igual a cero");   
}
//RESPUESTA El numero es positivo
/*
LINEA 1 Primero, se define una variable numero con un valor de 7.
LINEA 2 Luego, se utiliza una instrucción if para verificar si numero es mayor que 0. Si es verdadero, se imprime "El número es positivo."
LINEA 4 Si la condición del if no es verdadera, se verifica la siguiente condición con else if: si numero es menor que 0. Si esta condición es verdadera, se imprime "El número es negativo."
LINEA 6 Si ninguna de las condiciones anteriores es verdadera, se ejecuta el bloque else y se imprime "El número es igual a cero
*/

let number= 6;
if(number % 2 === 0){
console.log("el numero es par");
} else{
    console.log("el numero es impar");
}   
                            // RESPUESTA EL NUMERO ES PAR 

let number1=20;
console.log('el resto de una division')
if(number1 % 7 == 0){
console.log("el numero es dividir por 7 ");
} else{
    console.log(" no se puede dividir por 7");
}        
console.log(number1 % 7);                                 
/*RESPUETA EL NUMERO ES IMPAR GRACIAS A LA DIVISONNúmero 20 dividido por 7:

20 dividido por 7 es igual a 2 con un residuo de 6. El residuo es 6, lo que significa que 20 no es completamente divisible por 7.
*/

let edad = 20;
let mensaje =edad >= 18 ? "puede votar": "no puede votar";
console.log(mensaje);
/*
Se define una variable edad con un valor de 20.
Se utiliza el operador ternario ? para verificar si edad es mayor o igual a 18. Si esta condición es verdadera, se asigna la cadena "Puede votar." a la variable mensaje. Si es falsa, se asigna la cadena "No puede votar.".
Luego, se imprime el valor de la variable mensaje.*/

if (edad>=18){
    console.log('puede votar si')
}else{
    console.log('nose puede votar')
}


//esto hace para remplazar el if en este caso 12
let mes =6;
let nombreMes;

switch (mes) {
    case 1:
        nombreMes = "enero";
        break;
    case 2:
        nombreMes= "febrero";
        break;
    case 3:
        nombreMes="marzon";
        break;
    case 4:
        nombreMes="abril";
        break;
    case 5:
        nombreMes="mayo";
        break;
    case 6 :
        nombreMes="junio";
        break;
    case 7:
        nombreMes="julio";
        break;
    case 8:
        nombreMes="agosto";
            break;
    case 9:
        nombreMes="septiembre";
         break;
    case 10:
        nombreMes="octubre";
        break;
    case 11:
        nombreMes="noviembre";
        break;
     case 12:
        nombreMes="diciembre";
        break;
        
        default:
    nombreMes ="numero de mes no valido";
}
console.log(`el mes correspondiente al numero ${mes} es ${nombreMes}.`)



let edad1=18;
if (edad1 >= 18){ //mayor o igual a 18 >=
console.log("eres mayor de edad ");
}else{
    console.error("no has cumplido la edad suficiente");
}
edad1=19
if(edad1>10 && edad1 <18){   //el operador ant ( && ) hace que dos operaciones al mismo tiempo se cumplan 
  console.log("aun no estas en la universidad");
} else{
    console.log("seguramente estas estudiando una carrera");
}

//condicionales ternario 
let likes =-5;
if(likes == 1){          //likes es igual a 1
    console.log(likes + ' like');
} else if(likes>1){      //likes es mas grande que 1
    console.log(likes + ' likes');
} else if (likes<=0){    //likes es igual 0
    console.log('no hay likes')
} 

/*este codigo es mas corto y resume toda la estructura de arriba se utiliza 
 para hacer operaciones sencillas como un string o un numero basado en una condicional*/
(likes === 1)? console.log(likes + ' like') :console.log(likes + ' likes');

console.log((likes ==1) ? likes + " like " : likes + " likes ");
