document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerSpam = document.querySelectorAll('.hamburger span');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('nav');
    const links = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo a');
    const dropdown = document.querySelector('.dropdown-menu');
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');

    // Menú hamburguesa

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });


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
            hamburgerSpam.forEach(span => {
                span.style.background = 'var(--text-color-black)!important';
            });
            navbar.classList.add('shadow');
            navbar.style.background = 'var(--background-color)!important';
            navbar.style.transition = 'all 0.8s ease';
            logo.style.color = 'var(--text-color-black)!important';
            links.forEach(link => {
                link.style.color = 'var(--text-color-black)!important';
            });
            dropdown.style.background = 'var(--background-color)!important';
            dropdownLinks.forEach(dropdownLink => {
                dropdownLink.style.color = 'var(--text-color-black)!important';
                dropdownLink.addEventListener('mouseover', () => {
                    dropdownLink.style.color = 'var(--primary-color)!important';
                });
                dropdownLink.addEventListener('mouseout', () => {
                    dropdownLink.style.color = 'var(--text-color-black)!important';
                });
            });
        } else {
            hamburgerSpam.forEach(span => {
                span.style.background = 'var(--terciary-white)!important';
            });
            navbar.classList.remove('shadow');
            navbar.style.background = 'transparent';
            navbar.style.transition = 'all 0.5s';
            logo.style.color = 'var(--terciary-white)!important';
            links.forEach(link => {
                link.style.color = 'var(--terciary-white)!important';
            });
            dropdown.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(34, 34, 34, 0.8))';
            dropdownLinks.forEach(dropdownLink => {
                dropdownLink.style.color = 'var(--terciary-white)';
            });


        }
    });

    // FORMULARIO

    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const telefonoInput = document.getElementById('telefono');
    const emailInput = document.getElementById('email');
    const formulario = document.getElementById('formulario');

    function validarNombre() {
        const nombre = nombreInput.value;
        const nombrePattern = /^[a-zA-Z]*$/;
        if (nombre.length >= 3 && nombre.length <= 15 && nombrePattern.test(nombre)) {
            nombreInput.classList.add('valido');
            nombreInput.classList.remove('invalido');
            document.getElementById('nombreError').textContent = '';
        } else {
            nombreInput.classList.add('invalido');
            nombreInput.classList.remove('valido');
            document.getElementById('nombreError').textContent = 'El nombre debe tener entre 3 y 15 caracteres, sin números ni caracteres especiales';
        }
    }
    function validarApellido() {
        const apellido = apellidoInput.value;
        const apellidoPattern = /^[a-zA-Z]*$/;
        if (apellido.length >= 3 && apellido.length <= 40 && apellidoPattern.test(apellido)) {
            apellidoInput.classList.add('valido');
            apellidoInput.classList.remove('invalido');
            document.getElementById('apellidoError').textContent = '';
        } else {
            apellidoInput.classList.add('invalido');
            apellidoInput.classList.remove('valido');
            document.getElementById('apellidoError').textContent = 'El apellido debe tener entre 3 y 40 caracteres, sin números ni caracteres especiales';
        }
    }
    function validarTelefono() {
        const telefono = telefonoInput.value;
        const telefonoPattern = /^[0-9]{1,9}$/;
        if (telefonoPattern.test(telefono)) {
            telefonoInput.classList.add('valido');
            telefonoInput.classList.remove('invalido');
            document.getElementById('telefonoError').textContent = '';
        } else {
            telefonoInput.classList.add('invalido');
            telefonoInput.classList.remove('valido');
            document.getElementById('telefonoError').textContent = 'El teléfono debe tener solo números y no debe superar los 10 dígitos';
        }
    }
    function validarEmail() {
        const email = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+/;
        if (emailPattern.test(email)) {
            emailInput.classList.add('valido');
            emailInput.classList.remove('invalido');
            document.getElementById('emailError').textContent = '';
        } else {
            emailInput.classList.add('invalido');
            emailInput.classList.remove('valido');
            document.getElementById('emailError').textContent = 'El email debe tener un formato válido';
        }
    }

    function resetFormulario() {
        formulario.reset();
        nombreInput.classList.remove('valido');
        apellidoInput.classList.remove('valido');
        telefonoInput.classList.remove('valido');
        emailInput.classList.remove('valido');
    }

    nombreInput.addEventListener('input', validarNombre);
    apellidoInput.addEventListener('input', validarApellido);
    telefonoInput.addEventListener('input', validarTelefono);
    emailInput.addEventListener('input', validarEmail);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();
        validarNombre();
        validarApellido();
        validarTelefono();
        validarEmail();

        if (nombreInput.classList.contains('valido') && apellidoInput.classList.contains('valido') && telefonoInput.classList.contains('valido') && emailInput.classList.contains('valido')) {
            alert('Formulario enviado correctamente');

            resetFormulario();
        } else {
            alert('Formulario no enviado, corrige los errores');
        }
    });

    // Presupuesto
    let presupuesto = 0;

    // Elementos del Dom
    const selectorProducto = document.getElementById('seleccion-producto');
    const plazoInput = document.getElementById('plazo');
    const resultadoDiv = document.getElementById('resultado');
    const totalFinal = document.getElementById('total-final');
    const checkboxes = document.querySelectorAll('input[name="extra"]');
    const condicionesCheckbox = document.getElementById('condiciones');
    const enviarPresupuestoBtn = document.getElementById('enviar-presupuesto');

    selectorProducto.addEventListener('change', calcularPresupuesto);
    plazoInput.addEventListener('input', calcularPresupuesto);
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', calcularPresupuesto));
    condicionesCheckbox.addEventListener('change', validarCondiciones);
    enviarPresupuestoBtn.addEventListener('click', enviarPresupuesto);

    function calcularPresupuesto() {
        let productoSeleccionado = selectorProducto.value;
        let plazo = parseInt(plazoInput.value);
        let descuentoPlazo = 0;
        // First calculate base price from selected product and extras
        presupuesto = 0;

        if (plazo > 0 && plazo <= 24) {
            descuentoPlazo = presupuesto * (0.03 * (plazo / 6));
        }

        presupuesto -= descuentoPlazo;
        let total = 0;

        if (productoSeleccionado) {
            let [nombreProducto, precioProducto] = productoSeleccionado.split(':');
            let precio = parseFloat(precioProducto);
            total += precio;
        }

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.value);
            }
        });

        presupuesto = total;
        totalFinal.textContent = presupuesto + ' €';
    }

    function validarCondiciones() {
        if (condicionesCheckbox.checked) {
            enviarPresupuestoBtn.disabled = false;
        } else {
            enviarPresupuestoBtn.disabled = true;
        }
    }

    function enviarPresupuesto() {
        if (!condicionesCheckbox.checked) {
            alert('Acepta las condiciones para enviar el presupuesto.');
            return;
        }

        alert('Presupuesto enviado!');
    }


});

// Botón subir
const btnBackToTop = document.getElementById('btn-top');

if (btnBackToTop) {
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
}


// Slider de index principal

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


// slider pequeño de index

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

// Botones de slider pequeño

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


// Plugin para hacer scroll al texto del video

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

fetch('./data/news.json')
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


