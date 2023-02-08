/* MENU MOBILE*/
const ShowMenu = (togglerId , navId) => {
    const toggle = document.getElementById(togglerId),
    nav = document.getElementById(navId);
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
              nav.classList.add('show');
        })
    }
}
 
ShowMenu('nav-toggler' , 'nav-menu');


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


// ScrollUp se a barra de rolagem for maior que 200 adiciona a classe show-scroll
function mostrarScroll(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) 
        scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', mostrarScroll)





const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_titulo , .home_descricao , .home_button , .novidades_subtitulo, .novidades_titulo , .novidade_descricao , .novidade_btn`,{interval: 100})
sr.reveal(`.nova_card , .colecao_titulo , .colecao_descricao , .colecao_link , .card` ,{interval: 100})
sr.reveal(`.produtos_card_item , .colecao_img2 , .colecao_img , .home_card`,{origin: 'left'})
sr.reveal(``,{origin: 'right'})