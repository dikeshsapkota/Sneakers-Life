// Navbar scroll effect
const navbar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {  // when user scrolls 50px down
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
