const nav = document.querySelector('.nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY > 0)
}
)

menu_btn.addEventListener('click', () => {

    menu.classList.toggle('active')
})

window.sr = ScrollReveal();
  sr.reveal('.a1', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
    
});
window.sr = ScrollReveal();
  sr.reveal('.a2', {
    duration: 3000,
    origin: 'left',
    distance: '400px'
    
});
window.sr = ScrollReveal();
  sr.reveal('.a5', {
    duration: 3000,
    origin: '.right',
    distance: '400px'
    
});

window.sr = ScrollReveal();
  sr.reveal('.a6', {
    duration: 3000,
    rotate:{
        x:1,
        y:180,
    }
});