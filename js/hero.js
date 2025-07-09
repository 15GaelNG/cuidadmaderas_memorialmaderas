// Carga el módulo hero.html dinámicamente
fetch('components/hero.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('hero').innerHTML = html;
  });
