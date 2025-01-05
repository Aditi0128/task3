// Select the navbar and links
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar ul li a');

// Change navbar style when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change color of links on hover
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#FFD700'; // Gold on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#fff'; // Reset color
    });
});
