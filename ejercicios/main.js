 const foto = document.querySelector('#foto')
 console.log(foto.width, foto.getAttribute('width'))

 console.table([
{
    prop: foto.width,
    tipo: typeof foto.width
},
{
    prop: foto.getAttribute('width'),
    tipo: typeof foto.getAttribute('width')
}
 ])
 foto.width = 800 //valores numerios 
 foto.setAttribute('width', '100%') //agregar strings 

 const boton = document.querySelector('#boton')
 console.log(boton.textContent)
 boton.textContent = 'cambie esto con el textContent'
 boton.setAttribute('class', 'boton-principal')