import { 
  loadComponent, 
  enableSlide1ScrollButton, 
  enableScrollBehavior 
} from "./utils.js";
import { initFloatingButtons } from "./components/floating-buttons.js";
import { initSlide2Carousel } from "./sections/slide2.js";
import { initSlide3Carousel } from "./sections/slide3.js";
import { initSlide4Carousel } from "./sections/slide4.js";
import { initNavbarSlide1, initPlantarArbolButton } from "./components/navbar-slide1.js";

// Carga optimizada de componentes
async function initComponents() {
  try {
    // Cargar Slide 1
    await loadComponent(
      "slide1",
      "html/sections/slide1.html",
      "css/sections/slide1.css",
      () => {
        console.log("Slide 1 cargado");
        enableSlide1ScrollButton();
        initNavbarSlide1();
        initPlantarArbolButton();
      }
    );

    // Cargar Slide 2
    await loadComponent(
      "slide2",
      "html/sections/slide2.html",
      "css/sections/slide2.css",
      () => {
        console.log("Slide 2 cargado");
        initSlide2Carousel();
      }
    );

    // Cargar Slide 3
    await loadComponent(
      "slide3",
      "html/sections/slide3.html",
      "css/sections/slide3.css",
      () => {
        console.log("Slide 3 cargado");
        initSlide3Carousel();
      }
    );

    // Cargar Slide 4
    await loadComponent(
      "slide4",
      "html/sections/slide4.html",
      "css/sections/slide4.css",
      () => {
        console.log("Slide 4 cargado");
        initSlide4Carousel && initSlide4Carousel();
      }
    );

    // Cargar Slide 5
    await loadComponent(
      "slide5",
      "html/sections/slide5.html",
      "css/sections/slide5.css",
      () => {
        console.log("Slide 5 cargado");
      }
    );

    // Cargar Slide 6
    await loadComponent(
      "slide6",
      "html/sections/slide6.html",
      "css/sections/slide6.css",
      () => {
        console.log("Slide 6 cargado");
      }
    );

    // Cargar Floating Buttons
    await loadComponent(
      "floating-buttons",
      "html/components/floating-buttons.html",
      "css/components/floating-buttons.css",
      () => {
        console.log("Floating buttons cargados");
        initFloatingButtons();
      }
    );

    // Habilitar scroll behavior
    enableScrollBehavior();
    console.log("Todos los componentes cargados exitosamente");

  } catch (error) {
    console.error("Error cargando componentes:", error);
  }
}

// 🚀 Inicialización
document.addEventListener("DOMContentLoaded", initComponents);
