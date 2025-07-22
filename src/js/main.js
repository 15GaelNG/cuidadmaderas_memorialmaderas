//Ruta base automática
const BASE_PATH = window.location.origin + window.location.pathname.replace('index.html', '');

import { loadMultipleCSS, loadComponent, enableScrollBehavior, enableHeroScrollButton, enableNavbarLinks } from "./utils.js";
import { initCarousel } from "./sections/packages.js";
import { enableNavbarFormsVisibility } from "./sections/navbar-forms.js";
import { initFloatingButtons } from "./sections/floating-buttons.js";

// Función para inicializar y cargar todos los componentes
function initComponents() {
  loadComponent(
    "navbar",
    "components/navbar.html",
    "css/components/navbar.css",
    () => {
      console.log("Navbar cargado");
      enableScrollBehavior(); // Ocultar cuando sale del hero
      enableNavbarLinks();
    }
  );
} 

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


loadComponent(
  "forms",
  "components/forms.html",
  null,
  () => {
    console.log("Forms cargado");
    
    loadMultipleCSS([
      "css/components/navbar-forms.css",
      "css/sections/forms.css"
    ]);

    // Lógica del formulario
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        alert(`Datos capturados:\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}`);
      });
    }

    enableNavbarFormsVisibility();
  }
);

// Inicia todo al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  initComponents();
});

