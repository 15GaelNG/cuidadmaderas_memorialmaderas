export function initFloatingButtons() {
  console.log("initFloatingButtons ejecutado");

  // Función que busca el botón y la sección hero
  function attachHeroScroll() {
    const scrollBtn = document.querySelector("#btnScrollHero");
    const heroSection = document.querySelector("#hero");

    console.log("🔎 Buscando elementos...");
    console.log("scrollBtn:", scrollBtn);
    console.log("heroSection:", heroSection);

    if (!scrollBtn) {
      console.warn("⚠️ No se encontró #btnScrollHero todavía");
      return false;
    }

    if (!heroSection) {
      console.warn("⚠️ No se encontró la sección #hero todavía");
      return false;
    }

    // Si los dos existen, asignamos evento
    console.log("Elementos encontrados, asignando evento click...");
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("⬆️ Click detectado, haciendo scroll al HERO...");
      heroSection.scrollIntoView({ behavior: "smooth" });
    });

    return true;
  }

  // Intentar varias veces hasta encontrar el botón y hero
  let retries = 0;
  const interval = setInterval(() => {
    retries++;
    const success = attachHeroScroll();

    if (success || retries > 20) {
      clearInterval(interval);
      if (!success) {
        console.error("❌ No se encontró #btnScrollHero o #hero después de varios intentos");
      }
    }
  }, 300);
}
