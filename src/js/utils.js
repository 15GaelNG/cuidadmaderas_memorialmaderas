export function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

export async function loadComponent(id, htmlPath, cssPath, callback = null) {
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
