export function initSlide3Carousel() {
  // Carrusel desactivado - las tarjetas se muestran en grid
  console.log("Slide3: Carrusel desactivado, mostrando tarjetas en grid");
  
  // Aplicar estilos específicos para slide3 si es necesario
  const section3 = document.getElementById('section3');
  if (section3) {
    // Asegurar que los botones del carrusel estén ocultos en slide3
    const carouselBtns = section3.querySelectorAll('.carousel-btn');
    const carouselIndicators = section3.querySelectorAll('.carousel-indicators');
    
    carouselBtns.forEach(btn => btn.style.display = 'none');
    carouselIndicators.forEach(indicator => indicator.style.display = 'none');
  }
  
  return;
}
