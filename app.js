const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')      // Toggles the class from active to not active
    menuLinks.classList.toggle('active')
}

// Event listener for the toggles above
menu.addEventListener('click', mobileMenu);