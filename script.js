document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
const boxy = document.querySelector('.boxy');
const leftContent = document.querySelector('.left-content');
const rightContent = document.querySelector('.right-content');

leftContent.addEventListener('mouseenter', () => {
    boxy.classList.add('hover-left');
    boxy.classList.remove('hover-right');
});

leftContent.addEventListener('mouseleave', () => {
    boxy.classList.remove('hover-left');
});

rightContent.addEventListener('mouseenter', () => {
    boxy.classList.add('hover-right');
    boxy.classList.remove('hover-left');
});

rightContent.addEventListener('mouseleave', () => {
    boxy.classList.remove('hover-right');
});

document.addEventListener('DOMContentLoaded', function() {
    const elementsToShow = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });

    elementsToShow.forEach(element => {
        observer.observe(element);
    });
});


