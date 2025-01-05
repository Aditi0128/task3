// Select the navbar and links
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar ul li a');

// Smooth scrolling for anchor links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar style when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
