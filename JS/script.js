const iconoMenu = document.querySelector('.hamburguesa')
console.log(iconoMenu)
const menu = document.querySelector('.menu__nav')


iconoMenu.addEventListener('click',() =>{
    menu.classList.toggle('activado');
});

// selecciono el toggle 
// const toggle = document.querySelector('.toggle')
// console.log(toggle)
// // selecciono los ul del nav
// const navUl = document.querySelector('nav.navegacion ul')
// console.log(navUl)
// toggle.addEventListener('click',() =>{
//     navUl.classList.toggle('open');
// });