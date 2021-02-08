const menuButton = document.querySelector('.containerNav .menuButton');
const menu = document.querySelector('.containerNav ul');

// clic sur le bouton burger et gestion de la propriété Hidden
menuButton.addEventListener('click', function() {
    const open = JSON.parse(menuButton.getAttribute('aria-expanded'));
    menuButton.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;
});


// gestion de l'animation du bouton burger

let menuOpen = false;

menuButton.addEventListener('click', function() {
    if (!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
});