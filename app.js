const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', activateNavbar);

// Toggling active class on navbar
function activateNavbar() {
    if (window.scrollY > navbar.offsetHeight + 150) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}