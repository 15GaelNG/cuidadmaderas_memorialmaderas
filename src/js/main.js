import { 
  loadComponent, 
  enableSlide1ScrollButton, 
  enableScrollBehavior 
} from "./utils.js";
import { initFloatingButtons } from "./components/floating-buttons.js";
import { initSlide2Carousel } from "./sections/slide2.js";
import { initNavbarSlide1, initPlantarArbolButton } from "./components/navbar-slide1.js";

// Configuración de componentes
const COMPONENTS = [
  {
    id: "slide1",
    html: "html/sections/slide1.html",
    css: "css/sections/slide1.css",
    init: () => {
      enableSlide1ScrollButton();
      initNavbarSlide1();
      initPlantarArbolButton();
    }
  },
  {
    id: "slide2", 
    html: "html/sections/slide2.html",
    css: "css/sections/slide2.css",
    init: initSlide2Carousel
  },
  {
    id: "floating-buttons",
    html: "html/components/floating-buttons.html", 
    css: "css/components/floating-buttons.css",
    init: initFloatingButtons
  }
];

// Carga optimizada de componentes
async function initComponents() {
  const promises = COMPONENTS.map(({ id, html, css, init }) => 
    loadComponent(id, html, css, init)
  );
  
  try {
    await Promise.all(promises);
    enableScrollBehavior();
    console.log("Todos los componentes cargados exitosamente");
  } catch (error) {
    console.error("Error cargando componentes:", error);
  }
}

// 🚀 Inicialización
document.addEventListener("DOMContentLoaded", initComponents);
