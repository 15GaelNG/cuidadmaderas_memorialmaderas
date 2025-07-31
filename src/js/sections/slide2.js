export function initSlide2Carousel() {
  // Cache de elementos DOM
  const elements = {
    content: document.querySelector(".carousel-content"),
    btnLeft: document.querySelector(".carousel-btn-left"),
    btnRight: document.querySelector(".carousel-btn-right"),
    indicators: document.querySelectorAll(".indicator-dot"),
    plantarBtn: document.getElementById('btnPlantarArbolSlide2')
  };
  
  // Configuración del carrusel
  const config = {
    currentIndex: 0,
    totalItems: 3,
    autoPlayDelay: 6000,
    transitionDelay: 150,
    resetDelay: 50
  };
  
  let isTransitioning = false;
  let autoPlayInterval;

  // Función principal optimizada
  const updateCarousel = () => {
    if (isTransitioning) return;
    
    isTransitioning = true;
    const allItems = document.querySelectorAll('.carousel-item');
    
    // Preparar animaciones
    allItems.forEach(item => {
      item.classList.remove('active');
      item.classList.add('animating');
    });
    
    // Aplicar transformación - cada slide ocupa 100% del ancho
    const offset = -config.currentIndex * 100;
    elements.content.style.transform = `translateX(${offset}%)`;
    
    updateIndicators();
    
    // Activar slide actual
    requestAnimationFrame(() => {
      setTimeout(() => {
        const currentItem = allItems[config.currentIndex];
        if (currentItem) {
          allItems.forEach(item => item.classList.remove('animating'));
          currentItem.classList.add('active');
        }
        
        setTimeout(() => isTransitioning = false, config.resetDelay);
      }, config.transitionDelay);
    });
  };

  // Actualizar indicadores
  const updateIndicators = () => {
    elements.indicators.forEach((dot, index) => {
      dot.classList.toggle('active', index === config.currentIndex);
    });
  };

  // Navegación optimizada
  const navigate = (direction) => {
    if (isTransitioning) return;
    
    config.currentIndex = direction === 'next' 
      ? (config.currentIndex + 1) % config.totalItems
      : (config.currentIndex - 1 + config.totalItems) % config.totalItems;
    
    updateCarousel();
    resetAutoPlay();
  };

  // Auto-play optimizado
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => navigate('next'), config.autoPlayDelay);
  };
  
  const resetAutoPlay = () => {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  };

  // Event listeners optimizados
  const attachEventListeners = () => {
    // Botones de navegación
    elements.btnLeft?.addEventListener("click", (e) => {
      e.preventDefault();
      navigate('prev');
    });
    
    elements.btnRight?.addEventListener("click", (e) => {
      e.preventDefault();
      navigate('next');
    });

    // Indicadores
    elements.indicators.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        if (isTransitioning || config.currentIndex === index) return;
        config.currentIndex = index;
        updateCarousel();
        resetAutoPlay();
      });
    });

    // Botón plantar árbol
    elements.plantarBtn?.addEventListener('click', () => {
      console.log('🌳 Plantar árbol Memorial - Slide2');
    });
  };

  // 🚀 Inicialización
  const init = () => {
    const allItems = document.querySelectorAll('.carousel-item');
    if (allItems.length > 0) {
      allItems.forEach(item => item.classList.remove('active'));
      setTimeout(() => allItems[0].classList.add('active'), 100);
    }
    
    attachEventListeners();
    updateCarousel();
    startAutoPlay();
    
    console.log("Carrusel Slide2 inicializado");
  };

  init();
}
