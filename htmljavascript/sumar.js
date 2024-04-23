const resultado = document.querySelector('#resultado')
const boton = document.getElementById('boton')

//espera que el usuario haga el click linea 8
boton.addEventListener('click', function (e) {
    alert('El resultado es :'+sumar())
    resultado.textContent = sumar()
})
// parseInt lo convierte en una cifra
function sumar() {
    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)

    if (typeof (numero1) === 'number' && typeof (numero2) === 'number') {
        return (numero1 + numero2)
    } else {
        return 0
    }

}
