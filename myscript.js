/* -------------------- TASK - 1 ------------------*/

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('hovered');
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('hovered');
    });
});
