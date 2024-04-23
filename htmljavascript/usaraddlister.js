const boton= document.getElementById('boton')

boton.addEventListener('click', function (e) {
    login()   
})
boton.addEventListener('mouseover', function (e){ 
    boton.style.backgroundColor='blue'   //al pasar el mouse en el boton se pone azul
})

boton.addEventListener('mouseleave', function (e){
    boton.style.backgroundColor='white' //al quitar el mouse del boton se vuelbe blanco
})

//-----------------------
//Esta es la funcion login
//-----------------------
function login() {
    let nombre = document.getElementById('nombre').value
    // let nombre2 = nombre.value
    //usuario
    const error1 = 'Tu tienes que entrar tu nombre'
    const error2 = ' Tienes que entrar tu contraseña'
    const error3 = error1 + ' y tu contraseña'
    const colormensaje = `${document.getElementById('texto').style.color = 'blue'}`
    
    // .trim quita los espacios dentro del texto nombre los espacios no son letras
    if (nombre.trim().length == 0) {
        document.getElementById('texto').innerHTML = error1
        colormensaje //la definimos como una variable arriba
    } else {
        document.getElementById('texto').innerHTML = 'Bienvenido ' + nombre //indica la variable de nombre dos que declare en el 26
        document.getElementById('texto').style.color = 'black'

    }
    //password
    let contrasena = document.getElementById('clave').value


    if (contrasena.trim().length == 0) {
        document.getElementById('texto').innerHTML = error2
       // document.getElementById('texto').style.color = 'red'
       colormensaje
    }
    if (contrasena.trim().length == 0 && nombre.trim().length == 0) {
        document.getElementById('texto').innerHTML = error3
    }


}