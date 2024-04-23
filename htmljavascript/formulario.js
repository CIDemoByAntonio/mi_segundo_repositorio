let respuestas = {
    nombre: '',
    lenguajes: [],
    nivel: '',
    pais: ''
};

const formulario = document.querySelector('#boton');

formulario.addEventListener('click', e => {
    e.preventDefault()
    console.log(respuestas)

    const respuesta = document.querySelector('#respuesta')

    respuesta.innerHTML = '';

    for (prop in respuestas) {
        respuesta.innerHTML += `${prop} : ${respuestas[prop]}`
       // console.log(prop)
        window.localStorage.setItem(prop,respuestas[prop])
       // window.localStorage.setItem('nombre',respuestas.nombre)// guardarlo en el almacenamineto local
    } 
})
console.log(window.localStorage.getItem('nombre')) //puedes leer la informacion en la consola
console.log(window.localStorage.getItem('lenguajes'))
//input
const nombre = document.querySelector('#nombre')

nombre.addEventListener('input', e => {
    respuestas.nombre = nombre.value
})

//checkbox
const lenguajes =document.querySelectorAll('input[type=checkbox]')

lenguajes.forEach(lenguaje =>{
    lenguaje.addEventListener('click', e=>{
        getLenguajes()
    })
})
function getLenguajes() {
    respuestas.lenguajes = []
    const items = document.querySelectorAll('input[type=checkbox]:checked')
    items.forEach(item => {
        respuestas.lenguajes.push(item.value) //value para obtener el valor de lo seleccionado 
    })
}
//radios
const niveles = document.querySelectorAll('input[type=radio]')

niveles.forEach(nivel => {
    nivel.addEventListener('click', e =>{
        respuestas.nivel= e.target.value
    })
})
//select
const pais = document.querySelector('#pais')

pais.addEventListener('change', e =>{
    respuestas.pais = e.target.value
})

const bPais = document.querySelector('#bPais');

bPais.addEventListener('click', e => {
    e.preventDefault(); // Para evitar la actualización del URL

    const itPais = document.querySelector('#itPais').value;
    if (itPais === '') return false;

    const pais = document.querySelector('#pais'); // Seleccionar el elemento select
    const option = document.createElement('option'); //crea un elemento option

    option.value = itPais;
    option.text = itPais; // Establecer el texto del option correctamente

    pais.add(option);
});
