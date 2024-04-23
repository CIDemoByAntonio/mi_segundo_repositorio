const parrafo = document.querySelector('#parrafo') // # id
const boton = document.getElementById('boton')
let contador = 0

boton.addEventListener('click', function (e) {   //espera a que alguien de click para ponerse azul
    boton.style.backgroundColor = 'blue'
    contador = contador + 1
    parrafo.textContent = contador
})
