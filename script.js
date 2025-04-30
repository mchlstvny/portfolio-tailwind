const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu() {
    sideMenu.classList.remove('translate-x-full');
    sideMenu.classList.add('translate-x-0');
}

function closeMenu() {
    sideMenu.classList.remove('translate-x-0');
    sideMenu.classList.add('translate-x-full');
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');

    }
})