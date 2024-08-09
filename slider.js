document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        // Asegura que el índice sea válido (loop infinito)
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        // Oculta todas las diapositivas y muestra solo la actual
        slides.forEach((slide, i) => {
            if (i === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Mueve el contenedor para mostrar la diapositiva actual
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Muestra la siguiente diapositiva
    function showNextSlide() {
        showSlide(currentIndex + 1);
    }

    // Muestra la diapositiva anterior
    function showPrevSlide() {
        showSlide(currentIndex - 1);
    }

    // Añadir eventos a los botones de navegación
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Mostrar la primera diapositiva al cargar la página
    showSlide(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function autoSlide() {
        showSlide(currentIndex + 1);
    }

    setInterval(autoSlide, 10000); // Cambia de diapositiva cada 10 segundos

    showSlide(currentIndex);
});



document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.navegadores > ul > li > a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show');
                // Cierra otros submenús abiertos
                menuItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        const otherSubmenu = otherItem.nextElementSibling;
                        if (otherSubmenu && otherSubmenu.classList.contains('submenu')) {
                            otherSubmenu.classList.remove('show');
                        }
                    }
                });
            }
        });
    });

    // Cierra el submenú cuando se hace clic fuera de él
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navegadores')) {
            document.querySelectorAll('.submenu.show').forEach(submenu => {
                submenu.classList.remove('show');
            });
        }
    });
});
