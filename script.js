document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('nav');
    const links = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo a');

    // ... existing code for hamburger menu ...

    // Efecto de scroll en nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
            navbar.style.background = 'var(--background-color)!important';
            navbar.style.transition = 'all 0.8s ease';
            logo.style.color = 'var(--text-color-black)!important';
            links.forEach(link => {
                link.style.color = 'var(--text-color-black)!important';
            });
        } else {
            navbar.classList.remove('shadow');
            navbar.style.background = 'transparent';
            navbar.style.transition = 'all 0.5s';
            logo.style.color = 'var(--terciary-white)!important';
            links.forEach(link => {
                link.style.color = 'var(--terciary-white)!important';
            });
        }
    });

    // Comportamiento del botón "volver arriba"
    const btnBackToTop = document.getElementById('btn-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnBackToTop.classList.add('show');
        } else {
            btnBackToTop.classList.remove('show');
        }
    });

    btnBackToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ... existing code for swiper and other functionality ... 