document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('nav'); // Asegurarse de seleccionar el elemento correcto
    const links = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo a');

    // Toggle menú hamburguesa y prevenir scroll cuando está abierto
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Cerrar menú al hacer click en los enlaces
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });

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
});

var swiper1 = new Swiper(".sliderHero", {
    spaceBetween: 0,
    centeredSlides: true,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true
});

var swiper2 = new Swiper(".sliderHero2", {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
document.addEventListener('DOMContentLoaded', () => {
    const prevSlideButton = document.getElementById('prev-slide');
    const nextSlideButton = document.getElementById('next-slide');

    prevSlideButton.addEventListener('click', () => {
        swiper2.slidePrev();
    });

    nextSlideButton.addEventListener('click', () => {
        swiper2.slideNext();
    });
});


(function () {
    var StickyBackground = function (element) {
        this.element = element;
        this.scrollingElement = this.element.getElementsByClassName('sticky-hero__content')[0];
        this.nextElement = this.element.nextElementSibling;
        this.scrollingTreshold = 0;
        this.nextTreshold = 0;
        initStickyEffect(this);
    };

    function initStickyEffect(element) {
        var observer = new IntersectionObserver(stickyCallback.bind(element), { threshold: [0, 0.1, 1] });
        observer.observe(element.scrollingElement);
        if (element.nextElement) observer.observe(element.nextElement);
    };

    function stickyCallback(entries, observer) {
        var threshold = entries[0].intersectionRatio.toFixed(1);
        (entries[0].target == this.scrollingElement)
            ? this.scrollingTreshold = threshold
            : this.nextTreshold = threshold;

        Util.toggleClass(this.element, 'sticky-hero--media-is-fixed', (this.nextTreshold > 0 || this.scrollingTreshold > 0));
    };


    var stickyBackground = document.getElementsByClassName('js-sticky-hero'),
        intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype);
    if (stickyBackground.length > 0 && intersectionObserverSupported) { // if IntersectionObserver is not supported, animations won't be triggeres
        for (var i = 0; i < stickyBackground.length; i++) {
            (function (i) { // if animations are enabled -> init the StickyBackground object
                if (Util.hasClass(stickyBackground[i], 'sticky-hero--overlay-layer') || Util.hasClass(stickyBackground[i], 'sticky-hero--scale')) new StickyBackground(stickyBackground[i]);
            })(i);
        }
    }
}());

// Cargar datos JSON
const containerJson = document.querySelector('.containerJson');

fetch('/data/news.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        data.architecture_news.forEach(element => {
            containerJson.innerHTML += `
                  <div class="news-card">
                      <img src="${element.image}" alt="${element.title}">
                      <div class="news-content">
                          <h3>${element.title}</h3>
                          <p>${element.description}</p>
                          <span class="date">${element.date}</span>
                          <p>${element.category}</p>
                      </div>
                  </div>
              `;
        });
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
        containerJson.innerHTML = '<p>Error al cargar las noticias</p>';
    });

//   Slider testimonios
var swiper = new Swiper(".testimonials", {
    effect: "flip",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});

// Botón subir
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

 // Slider Galería
var heroSwiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


