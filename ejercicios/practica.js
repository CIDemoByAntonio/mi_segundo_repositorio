 // Obtener el elemento contenedor
 var contenedor = document.getElementById('contenedor');

 // Obtener todos los elementos hijos del contenedor
 var hijos = contenedor.children; //elemento 1 2 3
 console.log(hijos)
 hijos [0].innerText = 'michael'
 hijos [1].innerText = 'Antonio'
 // Iterar a través de los hijos para mostrarlos o realizar operaciones con ellos
 for (var i = 0; i < hijos.length; i++) {
     // Acceder a cada elemento hijo (hermano)
     console.log(hijos[i]);
 }
 
 

 function saludo() {
    var hijos = document.getElementsByTagName("div"); // Obtener todos los elementos <div> como ejemplo
    hijos[2].innerText = 'Hola Michael, ¿cómo estás?';
    
    var boton = document.getElementById("button"); // Obtener el botón por su ID
    boton.style.backgroundColor = 'blue'; // Cambiar el color de fondo del botón a azul
}

