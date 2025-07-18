// Obtener la ruta base automáticamente
const BASE_PATH = window.location.origin + window.location.pathname.replace('index.html', '');

/* Funciones de utils.js */
import { loadCSS, loadComponent, enableScrollBehavior,enableHeroScrollButton } from "./utils.js";

/* Funciones de componentes */
import { initCarousel } from "./sections/packages.js";

// Inicializar botones flotantes (ejemplo para btnScrollHero)
function initFloatingButtons() {
  console.log("Floating buttons script cargado");
  enableHeroScrollButton();
}

// Función para inicializar y cargar todos los componentes
function initComponents() {
  loadComponent(
    "navbar",
    "components/navbar.html",
    "css/components/navbar.css",
    () => {
      console.log("Navbar cargado");
      enableScrollBehavior();
    }
  );

  loadComponent(
    "hero",
    "components/hero.html",
    "css/sections/hero.css",
    () => {
      console.log("Hero cargado");
      enableHeroScrollButton();
      AOS.init();
    }
  );

  loadComponent(
    "about",
    "components/about.html",
    "css/sections/about.css",
    () => {
      console.log("About cargado");
      AOS.refresh();
    }
  );

  loadComponent(
    "section3",
    "components/section3.html",
    "css/sections/section3.css",
    () => {
      console.log("Sección 3 cargada");
      AOS.refresh();
    }
  );

  loadComponent(
    "packages",
    "components/packages.html",
    "css/sections/packages.css",
    () => {
      console.log("Packages cargado");
      initCarousel();
      AOS.refresh();
    }
  );

  loadComponent(
    "section5",
    "components/section5.html",
    "css/sections/section5.css",
    () => {
      console.log("Sección 5 cargada");
      AOS.refresh();
    }
  );

  loadComponent(
    "floating-buttons",
    "components/floating-buttons.html",
    "css/sections/floating-buttons.css",
    () => {
      console.log("Botones flotantes cargados");
      initFloatingButtons();
    }
  );
}


// Inicia todo al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initComponents();
});
