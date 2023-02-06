
// Função Header Para mudar a cor do cabeçalho
function scroll() {
    const header = document.querySelector('.header');
    if(this.scrollY >= 50) {
        header.classList.add('mudar-cor');
    } else {
        header.classList.remove('mudar-cor');
    }
}
window.addEventListener('scroll', scroll)



function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Faqs esconder 
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}








const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_titulo , .home_descricao , .home_button , .novidades_subtitulo, .novidades_titulo , .novidade_descricao , .novidade_btn`,{interval: 100})
sr.reveal(`.nova_card , .colecao_titulo , .colecao_descricao , .colecao_link , .card` ,{interval: 100})
sr.reveal(`.produtos_card_item , .colecao_img2 , .colecao_img`,{origin: 'left'})
sr.reveal(`.app_imagem , .questions__group2 `,{origin: 'right'})