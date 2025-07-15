// Scroll hacia arriba cuando se da clic al botón flotante
document.querySelector('.btn-scroll')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Scroll suave para enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
