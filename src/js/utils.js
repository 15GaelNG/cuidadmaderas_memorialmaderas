export function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export async function loadComponent(id, htmlPath, cssPath, callback = null) {
  try {
    const res = await fetch(htmlPath);
    if (!res.ok) throw new Error("HTTP ${res.status}");
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (cssPath) loadCSS(cssPath);
    if (typeof callback === "function") callback();
  } catch (err) {
    console.error("❌ Error cargando ${htmlPath}:", err);
  }
}

// Ocultar navbar cuando se sale del hero
export function enableScrollBehavior() {
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

// Habilitar botón de scroll al héroe
export function enableHeroScrollButton() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-scroll")) {
      e.preventDefault();
      const heroSection = document.querySelector("#hero");
      if (heroSection) heroSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

export function loadMultipleCSS(cssFiles = []) {
  cssFiles.forEach(file => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = file;
    document.head.appendChild(link);
  });
}

export function enableNavbarLinks() {
  // Mapea cada botón con su sección
  const linkMap = {
    "nav-about": "about",
    "nav-packages": "packages",
    "nav-contact": "forms"
  };

  // Recorre cada enlace y le agrega evento
  Object.keys(linkMap).forEach(linkId => {
    const link = document.getElementById(linkId);
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = linkMap[linkId];
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });
}

