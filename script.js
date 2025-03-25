// Select elements
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

// Toggle menu visibility on button click
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
