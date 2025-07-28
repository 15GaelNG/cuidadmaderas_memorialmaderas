export function enableNavbarScrollBehavior() {
  console.log("Navbar script cargado");

  const navbar = document.querySelector(".navbar");
  const heroSection = document.getElementById("hero");

  // Ocultar navbar al salir del hero
  window.addEventListener("scroll", () => {
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
  
  // Scroll suave dinámico (espera a que el about exista)
  setTimeout(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();

        const targetId = link.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
          });
        } else {
          console.warn(`⚠ No se encontró la sección: ${targetId}`);
        }
      });
    });
  }, 500); // espera medio segundo a que carguen las secciones
}
