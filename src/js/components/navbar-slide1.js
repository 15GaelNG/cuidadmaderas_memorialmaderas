const navbarConfig = {
  hideOffset: 100,
  transition: "opacity 0.4s ease, transform 0.4s ease"
};

let scrollThrottle;

// Scroll behavior optimizado con throttle
export function initNavbarSlide1() {
  const navbar = document.querySelector(".navbar-slide1-new");
  const slide1Container = document.querySelector(".slide1-container");

  if (!navbar || !slide1Container) {
    console.warn("Navbar o slide1 container no encontrados");
    return;
  }

  const slide1Height = slide1Container.offsetHeight;
  const threshold = slide1Height - navbarConfig.hideOffset;

  // Scroll listener optimizado
  const handleScroll = () => {
    if (scrollThrottle) return;
    
    scrollThrottle = requestAnimationFrame(() => {
      const shouldHide = window.scrollY > threshold;
      
      navbar.style.transition = navbarConfig.transition;
      navbar.style.opacity = shouldHide ? "0" : "1";
      navbar.style.transform = shouldHide ? "translateY(-100%)" : "translateY(0)";
      navbar.style.pointerEvents = shouldHide ? "none" : "auto";
      
      scrollThrottle = null;
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Navegación optimizada con delegación de eventos
  initNavbarNavigation();
  
  console.log("Navbar Slide1 inicializado");
}

// Sistema de navegación optimizado
function initNavbarNavigation() {
  const slideMap = {
    "quienes-somos": 2,
    "contacto": 6, 
    "nichos-memorial": 3,
    "mascotas": 4
  };

  // Delegación de eventos para mejor rendimiento
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("nav-link")) return;
    
    e.preventDefault();
    const targetId = e.target.getAttribute("data-target");
    const slideNumber = slideMap[targetId];
    
    if (slideNumber) {
      scrollToSlide(slideNumber);
      console.log(`Navegando a slide ${slideNumber} (${targetId})`);
    }
  });
}

// Scroll suave a slides específicos
function scrollToSlide(slideNumber) {
  const targetSlide = document.querySelector(`#slide${slideNumber}`);
  
  if (targetSlide) {
    targetSlide.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  } else {
    console.warn(`Slide ${slideNumber} no encontrado`);
  }
}

// Botón plantar árbol optimizado
export function initPlantarArbolButton() {
  const findAndAttachButton = () => {
    const plantarBtn = document.querySelector(".navbar-btn-arbol");
    
    if (!plantarBtn) {
      // Retry después de un frame si no se encuentra
      requestAnimationFrame(findAndAttachButton);
      return;
    }

    plantarBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("🌳 Plantar árbol Memorial - Navbar");
      // Aquí puedes agregar la lógica específica del botón
    }, { once: false });

    console.log("Botón plantar árbol configurado");
  };

  findAndAttachButton();
}
