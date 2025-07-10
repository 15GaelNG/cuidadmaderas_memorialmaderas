// Carga el módulo hero.html
fetch('components/hero.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('hero').innerHTML = html;
    
    AOS.init();
  });