const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    // navbar.classList.toggle('active');
    console.log('adfasd');
    navbar.classList.toggle('menushow')
});

window.addEventListener('scroll', () => {
    // navbar.classList.remove('active');
    navbar.classList.remove('menushow')
});