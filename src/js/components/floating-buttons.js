export function initFloatingButtons() {
  const MAX_RETRIES = 10;
  const RETRY_INTERVAL = 200;
  
  // Función optimizada para encontrar elementos
  const findAndAttachScrollButton = () => {
    const scrollBtn = document.querySelector("#btnScrollHero");
    const slide1Section = document.querySelector("#slide1");
    
    if (!scrollBtn || !slide1Section) return false;
    
    // Event listener optimizado
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      slide1Section.scrollIntoView({ behavior: "smooth" });
    }, { once: false, passive: false });
    
    console.log("Floating buttons configurados");
    return true;
  };
  
  // Retry logic optimizado
  const attemptConnection = (attempt = 1) => {
    if (findAndAttachScrollButton() || attempt >= MAX_RETRIES) {
      if (attempt >= MAX_RETRIES) {
        console.warn("No se pudieron configurar los floating buttons");
      }
      return;
    }
    
    setTimeout(() => attemptConnection(attempt + 1), RETRY_INTERVAL);
  };
  
  attemptConnection();
}
