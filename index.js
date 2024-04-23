let jugadores={
    10: 'messi',
     7: 'Cristiano'
};

const pi =3.14;

console.log (10-5);
console.log(10+10);
console.log(4==4);
console.log(jugadores);
console.log(true && true);
console.log(false || false);

let autorizado=false;
if (autorizado) {
    console.log('puede ingresar');
}else{
    console.log('no puede ingresar');
}
function sumar(Primero,segundo){
    return Primero + segundo;
}
let resultado=sumar(3,4);
console.log(resultado);

let animales=['perro','gatos','leones'];
for (let animal of animales) {
    console.log(animal);
}