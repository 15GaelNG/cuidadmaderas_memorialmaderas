export function initHero() {
  console.log("HERO script cargado");

  // Botón scroll que lleva al inicio (Hero)
  const scrollBtn = document.querySelector(".btn-scroll");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

