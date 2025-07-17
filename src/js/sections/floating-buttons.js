export function initFloatingButtons() {
  console.log("Floating buttons script cargado");

  // Acción del botón scroll → volver a HERO
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
