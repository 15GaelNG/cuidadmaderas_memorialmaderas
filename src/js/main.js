
/* Funciones de utils.js */
import { loadCSS, loadComponent, enableScrollBehavior,enableHeroScrollButton } from "./utils.js";

/* Funciones de componentes */
import { initCarousel } from "./sections/packages.js";



// CARGA COMPONENTES
function initComponents() {
  // Navbar
  loadComponent(
    "navbar",
    "components/navbar.html",
    "css/components/navbar.css",
    enableScrollBehavior
  );

  // Hero
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

  // About
  loadComponent(
    "about",
    "components/about.html",
    "css/sections/about.css",
    () => {
      console.log("About cargado");
      AOS.refresh();
    }
  );

  // Packages
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
}

//Inicializa todo
document.addEventListener("DOMContentLoaded", () => {
  initComponents();
});






