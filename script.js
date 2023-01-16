function liverf (elemento) {
    elemento.classList.add('gambiarra')
    elemento.classList.toggle('virar')
    setTimeout(virar,270,elemento)
}

function virar(elemento) {
    const back=document.querySelector('.gambiarra>.back')
    const front=document.querySelector('.gambiarra>.front')
    elemento.classList.remove('gambiarra')
    back.classList.toggle('hide')
    front.classList.toggle('hide')
}