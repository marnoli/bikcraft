// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
    const url = location.href
    const href = link.href
    if(url.includes(href)) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// Ativar items do orçamento
const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro)
    if(elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto)


// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event) {
    const pergunta = event.currentTarget
    const control = pergunta.getAttribute('aria-controls')
    const resposta = document.getElementById(control)

    resposta.classList.toggle('ativa')
    const ativa = resposta.classList.contains('ativa')
    pergunta.setAttribute('aria-expanded', ativa)
    
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)


// Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img')
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagen(event) {
    const img = event.currentTarget
    const media = matchMedia('(min-width: 1000px)').matches
    if (media) {
        galeriaContainer.prepend(img)
    }
}

function eventoGaleria(img) {
    img.addEventListener('click', trocarImagen)
}

galeria.forEach(eventoGaleria)


// Animação
if (window.SimpleAnime) {
    new SimpleAnime()
}

