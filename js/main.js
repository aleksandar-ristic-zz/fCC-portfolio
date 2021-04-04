// Header
//Header
const header = document.querySelector('header');
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navHeight = 80;

document.addEventListener('scroll', function (){
    if(document.body.scrollTop > navHeight || document.documentElement.scrollTop > navHeight) {
        header.classList.add('fixed-header');
    } 
    else {
        header.classList.remove('fixed-header');
    }
});

btn.addEventListener('click', () => {
    nav.classList.toggle('open');
});