// Obtener la ruta base automáticamente
const BASE_PATH = window.location.origin + window.location.pathname.replace('index.html', '');

// Función para inyectar CSS dinámicamente
function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = BASE_PATH + href;
  document.head.appendChild(link);
}

// Función para cargar componentes HTML + CSS
async function loadComponent(id, htmlPath, cssPath, callback = null) {
  try {
    const res = await fetch(BASE_PATH + htmlPath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (cssPath) loadCSS(cssPath);
    if (typeof callback === "function") callback();
  } catch (err) {
    console.error(`❌ Error cargando ${htmlPath}:`, err);
  }
}

// Ocultar navbar al salir del hero
function enableScrollBehavior() {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.getElementById("hero");
    if (!navbar || !heroSection) return;

    const heroHeight = heroSection.offsetHeight;
    navbar.style.transition = "opacity 0.4s ease";

    if (window.scrollY > heroHeight - 50) {
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
    } else {
      navbar.style.opacity = "1";
      navbar.style.pointerEvents = "auto";
    }
  });
}

// Botón para hacer scroll al hero
function enableHeroScrollButton() {
  const scrollBtn = document.getElementById("btnScrollHero");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

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
