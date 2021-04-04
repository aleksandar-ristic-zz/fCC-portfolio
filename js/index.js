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

//Elements animation
const tech = document.querySelectorAll('.tech');

function forAll() {
    let idx = 0;
    
  let int = setInterval(function() {
        if (idx == 9) {
            clearInterval(int);
        }
        tech[idx].style.animation = "jumpy 2s ease-in 1";
        idx++;
    }, 2000);

    
}

forAll();

tech.forEach(el => el.addEventListener('animationend', function(){
    el.style.animation = 'none';

    setTimeout(function(){
        el.style.animation = 'jumpy 2s ease-in 1'
    }, 18000);
}));