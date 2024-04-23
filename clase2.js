let nombre ="Michael";

console.log(nombre);

const edad = 15;

console.log(edad)


//OPERADORES DE BIT A BIT  

//operador AND a nivel de bits('&') -Bitwise AND 

//EXPLICACION :Realiza una operación AND lógica bit a bit. Devuelve 1 solo si ambos bits son 1.

var a=5; //representacion binaria: 0101
var b=3; //representacion binaria: 0011
var resultado=a & b; //operacion AND a nivel de bits 
console.log(resultado) //resultado 1 (binario:0001)

//operador OR a nivel de bits ('|') - Bitwise OR  

//EXPLICACION :Realiza una operación OR lógica bit a bit. Devuelve 1 si al menos uno de los bits es 1.

var x =5; //representacion binaria 0101
var y=3; // representacion binaria 0011
var resultado= x | y; //operacion OR 
console.log(resultado); //Resultado 7 (binaria:0111)

//operador XOR a nivel de bits ('^') -Bitwise XOR 

//EXPLICACION :Realiza una operación XOR lógica bit a bit. Devuelve 1 si exactamente uno de los bits es 1

var p=5;
var q=3;
var resultado=p^q;
console.log(resultado) //resultado 6 (binaria:0110)

//operador NOT bits ('~') -Bitwise NOT

//Invierte cada bit en el operando, convirtiendo 0 en 1 y viceversa

var num=5;
var resultado = ~num; //operacion a NOT 
console.log (resultado); //rsultado -6 (representacion complemento a 2)

//desplazamiento a la izquierda ('<<') -Left Shift

//Desplaza los bits hacia la izquierda en una cantidad de posiciones especificada, llenando con ceros en la derecha

var x =5;
var desplazadoIzquierda = x<< 2; //desplazamiento a la izquierda en 2 bits 
console.log(desplazadoIzquierda); //resultado 20 (binaria: 10100)

//desplazamiento a la derecha('>>') -Right shift 

//Desplaza los bits hacia la derecha en una cantidad de posiciones especificada, llenando con el bit de signo (0 o 1) en la izquierda.

var num=20;
var desplazadoDerecha=num>>2; //desplazamiento a la derecha en 2 bits
console.log(desplazadoDerecha); //resultado 5 (binario: 0101)

//Desplazamiento a la derecha sin signo (>>>) - Unsigned Right Shift:

//EXPLICACION : Similar al desplazamiento a la derecha (>>), pero rellena con ceros en la izquierda sin importar el signo.
//Utilizado para desplazar bits hacia la derecha, tratando el número como un entero sin signo.

var num = -10;  // Representación binaria: 11111111111111111111111111110110 (complemento a 2)
var desplazadoDerechaSinSigno = num >>> 2;  // Resultado: 1073741821 (binario: 00111111111111111111111111111101)
console.log(desplazadoDerechaSinSigno);

//operador AND logico ('&&') -Logical AND 

// EXPLICACION : No es un operador de bits, sino un operador lógico.
//Realiza una operación AND lógica entre dos expresiones booleanas.
//Devuelve true si ambas expresiones son verdaderas, de lo contrario, devuelve false.

var condicion1=true;
var condicion2=false;
var resultado= condicion1 && condicion2; //operacion AND logico 
console.log(resultado); //resultado falso 

//operador OR logico('||') - Logical OR 

//EXPLICACION : No es un operador de bits, sino un operador lógico.
//Realiza una operación OR lógica entre dos expresiones booleanas.
//Devuelve true si al menos una de las expresiones es verdadera, de lo contrario, devuelve false.

var condicion1=true;
var condicion2=false;
var resultado= condicion1||condicion2;  // operacion OR logica 
console.log(resultado) // resultado true 




//OPERADORES DE COMPARACION 

//operacion igualdad(==)  // comprueba si dos valores son iguales TRUE si son iguales FALSE  si no lo son 
var x =5;
var y="5";
console.log(x ==y); // Es verdadero

// operacion de desigualdad(!=)  //verifica si dos valores no son iguales TRUE si son diferentes FALSE si son iguales   
var a =10;
var b =20;
console.log(a!=b); // Es verdadero

// operacion igualdad estricta (===) //compara si dos valores son iguales y tienen el mismo tipo de datos TRUE si son iguales tanto en valor como en tipo FALSE si no lo son  
var num1=42;
var num2=42;
console.log(num1===num2);   // es verdadero 

 //desigualdad estricta (!==) //compara si dos valores no son iguales o tienen datos diferentes TRUE si son diferentes en valor y en tipo FALSE si son iguales en valor y tipo
var str1= "hello";
var str2="world";
console.log(str1!==str2);    // true 

//operacion mayor que (>) //verifica si el valor de la izquierda es mayor que el de la derecha TRUE si es mayor FALSE si no lo es 
var m=15;
var n=10;
console.log(m>n);            // true 

//menor que (<)  //comprueba si el valor de la izquierda es menor que el de la derecha  TRUE si es menor FALSE si no lo es   
var a=5;
var b=8;   
console.log(a<b);            //true 

//mayor o igual que (>=) //evalua si el valor de la izquierda es mayor o igual al de la derecha TRUE si es mayor o igual FALSE si no lo es 
 var age =18;
var votingAge=18;
console.log(age>=votingAge);  //true

//menor o igual que (<=) //verifica si el valor de la izquierda es menor o igual de la derecha  TRUE si es menor o igual FALSE si no lo es 
var score1=90;
var passingScore=80;
console.log(score1<=passingScore) //false



