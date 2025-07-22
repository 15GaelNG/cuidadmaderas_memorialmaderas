export function enableNavbarFormsVisibility() {
  console.log("Scroll detector activo");

  const topBar = document.querySelector(".top-bar");
  const bottomBar = document.querySelector(".bottom-bar");
  const formsSection = document.querySelector(".forms-section");

  if (!formsSection || !topBar || !bottomBar) return;

  // Usamos Intersection Observer para detectar visibilidad
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Está visible → mostramos las barras
        topBar.classList.add("active");
        bottomBar.classList.add("active");
      } else {
        // Se salió → las ocultamos
        topBar.classList.remove("active");
        bottomBar.classList.remove("active");
      }
    });
  }, {
    threshold: 0.2 // 20% visible para activarse
  });

  observer.observe(formsSection);
}

