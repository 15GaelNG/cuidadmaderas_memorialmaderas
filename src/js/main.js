//Inyectar CSS dinámicamente
function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

//Cargar componentes HTML + CSS
async function loadComponent(id, htmlPath, cssPath, callback = null) {
  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (cssPath) loadCSS(cssPath);
    if (typeof callback === "function") callback();
  } catch (err) {
    console.error(`❌ Error cargando ${htmlPath}:`, err);
  }
}

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

// función en reparación
/* function initFloatingButtons() {
  console.log("Floating buttons script cargado");

  const scrollBtn = document.getElementById("btnScrollHero");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const hero = document.getElementById("hero");
      if (hero) {
        hero.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
} */

function initComponents() {
  //Navbar
  loadComponent(
    "navbar",
    "components/navbar.html",
    "/src/css/components/navbar.css",
    () => {
      console.log("Navbar cargado");
      enableScrollBehavior(); // Oculta navbar al salir del hero
    }
  );

  //Hero
  loadComponent(
    "hero",
    "components/hero.html",
    "/src/css/sections/hero.css",
    () => {
      console.log("Hero cargado");
      AOS.init(); // Inicializar animaciones
    }
  );

  //About
  loadComponent(
    "about",
    "components/about.html",
    "/src/css/sections/about.css",
    () => {
      console.log("bout cargado");
      AOS.refresh(); // Refrescar animaciones
    }
  );

  //Sección 3
  loadComponent(
    "section3",
    "components/section3.html",
    "/src/css/sections/section3.css",
    () => {
      console.log("Sección 3 cargada");
      AOS.refresh(); // Refrescar animaciones
    }
  );

  //Botones flotantes
  loadComponent(
    "floating-buttons",
    "components/floating-buttons.html",
    "src/css/components/floating-buttons.css",
    () => {
      console.log("Botones flotantes cargados");
      initFloatingButtons(); // Activar scroll-to-hero
    }
  );
}


document.addEventListener("DOMContentLoaded", () => {
  initComponents(); // Cargar todo dinámicamente
  AOS.init(); // Inicializar animaciones por si acaso
});
