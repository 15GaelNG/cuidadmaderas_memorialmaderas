export function initSlide3Carousel() {
  // Seleccionar elementos del carrusel
  const carousel = {
    content: document.querySelector(".section3-options .carousel-content"),
    btnLeft: document.querySelector(".section3-options .carousel-btn-left"),
    btnRight: document.querySelector(".section3-options .carousel-btn-right"),
    items: document.querySelectorAll(".section3-options .carousel-item"),
    indicators: document.querySelectorAll(".section3-options .indicator-dot")
  };

  // Verificar que existen los elementos
  if (!carousel.content || !carousel.btnLeft || !carousel.btnRight || carousel.items.length === 0) {
    console.warn("Elementos del carrusel slide3 no encontrados");
    return;
  }

  // Configuración del carrusel
  let currentIndex = 0;
  const totalItems = carousel.items.length;

  // Función para actualizar el carrusel
  const updateCarousel = () => {
    // Calcular la posición de transformación (cada item ocupa 100% del ancho)
    const translateX = -(currentIndex * 100);
    carousel.content.style.transform = `translateX(${translateX}%)`;

    // Actualizar clases de estado de las tarjetas
    carousel.items.forEach((item, index) => {
      item.classList.remove('active');
      
      if (index === currentIndex) {
        item.classList.add('active');
      }
    });

    // Actualizar indicadores
    if (carousel.indicators.length > 0) {
      carousel.indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentIndex) {
          indicator.classList.add('active');
        }
      });
    }

    // Actualizar estado de los botones
    carousel.btnLeft.style.opacity = currentIndex === 0 ? '0.5' : '1';
    carousel.btnLeft.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
    
    carousel.btnRight.style.opacity = currentIndex === totalItems - 1 ? '0.5' : '1';
    carousel.btnRight.style.pointerEvents = currentIndex === totalItems - 1 ? 'none' : 'auto';
  };

  // Función para ir al siguiente slide
  const nextSlide = () => {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      updateCarousel();
    }
  };

  // Función para ir al slide anterior
  const prevSlide = () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    if (index >= 0 && index < totalItems) {
      currentIndex = index;
      updateCarousel();
    }
  };

  // Event listeners para los botones
  carousel.btnRight.addEventListener('click', nextSlide);
  carousel.btnLeft.addEventListener('click', prevSlide);

  // Event listeners para los indicadores
  carousel.indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    // Solo actuar si estamos en la sección 3
    const section3 = document.getElementById('section3');
    if (!section3 || !isElementInViewport(section3)) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  });

  // Función para verificar si un elemento está en el viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Touch/Swipe support para móviles
  let startX = 0;
  let startY = 0;
  let isDragging = false;

  carousel.content.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
  });

  carousel.content.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
  });

  carousel.content.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    // Solo procesar si el movimiento horizontal es mayor que el vertical
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlide(); // Swipe left -> next
      } else {
        prevSlide(); // Swipe right -> prev
      }
    }
    
    isDragging = false;
  });

  // Inicializar carrusel
  updateCarousel();

  console.log("Carrusel Slide3 inicializado");
}
