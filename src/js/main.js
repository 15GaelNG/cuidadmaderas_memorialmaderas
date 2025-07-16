/* =========================
   FUNCIONES UTILITARIAS
========================= */

// Cargar dinámicamente CSS
function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Cargar HTML dinámico con su CSS
async function loadComponent(id, htmlPath, cssPath, callback = null) {
  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    // Cargar su CSS asociado
    if (cssPath) loadCSS(cssPath);

    // Ejecutar callback si existe
    if (typeof callback === "function") callback();
  } catch (err) {
    console.error(`❌ Error cargando ${htmlPath}:`, err);
  }
}

/* =========================
  LÓGICA DEL NAVBAR
========================= */
function enableNavbarBehavior() {
  const navbar = document.querySelector(".navbar");
  const heroSection = document.getElementById("hero");

  if (!navbar || !heroSection) return;

  window.addEventListener("scroll", () => {
    const heroHeight = heroSection.offsetHeight;
    if (window.scrollY > heroHeight - 50) {
      navbar.style.opacity = "0";
      navbar.style.pointerEvents = "none";
      navbar.style.transition = "opacity 0.4s ease";
    } else {
      navbar.style.opacity = "1";
      navbar.style.pointerEvents = "auto";
    }
  });
}

/* =========================
   BOTÓN SCROLL TO HERO
========================= */
function enableHeroScrollButton() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-scroll")) {
      e.preventDefault();
      const heroSection = document.querySelector("#hero");
      if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// CARGA COMPONENTES
function initComponents() {
  // Navbar
  loadComponent(
    "navbar",
    "components/navbar.html",
    "css/components/navbar.css",
    enableNavbarBehavior
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
}

//Inicializa todo
document.addEventListener("DOMContentLoaded", () => {
  initComponents();
  AOS.init();
});






