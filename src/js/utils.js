// Cache para elementos DOM
const domCache = new Map();

// Obtener elementos del DOM con cache
function getCachedElement(selector) {
  if (!domCache.has(selector)) {
    domCache.set(selector, document.querySelector(selector));
  }
  return domCache.get(selector);
}

// Carga CSS optimizada
export function loadCSS(href) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Carga componente HTML con Promise
export async function loadComponent(id, htmlPath, cssPath, callback = null) {
  try {
    const [htmlResponse] = await Promise.all([
      fetch(htmlPath),
      cssPath ? Promise.resolve(loadCSS(cssPath)) : Promise.resolve()
    ]);
    
    if (!htmlResponse.ok) throw new Error(`HTTP ${htmlResponse.status}`);
    
    const html = await htmlResponse.text();
    const container = document.getElementById(id);
    
    if (!container) throw new Error(`Container #${id} not found`);
    
    container.innerHTML = html;
    
    if (callback) {
      // Usar requestAnimationFrame para ejecutar callback después del render
      requestAnimationFrame(callback);
    }
    
  } catch (err) {
    console.error(`❌ Error cargando ${htmlPath}:`, err);
  }
}

// 📱 Scroll behavior optimizado con throttle
let scrollTimeout;
export function enableScrollBehavior() {
  const navbar = getCachedElement(".navbar");
  const slide1Section = getCachedElement("#slide1");
  
  if (!navbar || !slide1Section) return;
  
  const slide1Height = slide1Section.offsetHeight;
  const threshold = slide1Height - 50;
  
  window.addEventListener("scroll", () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
      const isHidden = window.scrollY > threshold;
      
      navbar.style.transition = "opacity 0.4s ease";
      navbar.style.opacity = isHidden ? "0" : "1";
      navbar.style.pointerEvents = isHidden ? "none" : "auto";
      
      scrollTimeout = null;
    }, 16); // ~60fps
  }, { passive: true });
}

// ⬆Botón scroll optimizado con delegación de eventos
export function enableSlide1ScrollButton() {
  const slide1Section = getCachedElement("#slide1");
  if (!slide1Section) return;
  
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-scroll")) {
      e.preventDefault();
      slide1Section.scrollIntoView({ behavior: "smooth" });
    }
  }, { passive: false });
}