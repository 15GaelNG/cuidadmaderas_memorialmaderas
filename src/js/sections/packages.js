// js/components/carousel.js

export function initCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const text = document.getElementById("carousel-text");
  const icon = document.getElementById("carousel-icon");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  const carouselData = [
    {
      icon: "../public/assets/img/icons/IC Slide 4 Perpetuidad.svg",
      text: "Perpetuidad de su nicho y/o mausoleo.",
    },
    {
      icon: "../public/assets/img/icons/IC Slide 4 Tributo.svg",
      text: "Espacio para tributo, despedida u oratorio.",
    },
    {
      icon: "../public/assets/img/icons/IC Slide 4 Iluminación.svg ",
      text: "Iluminación para visitas nocturnas.",
    },
    {
      icon: "../public/assets/img/icons/IC Slide 4 Banca.svg",
      text: "Arbol, banca y una lápida conmemorativa discreta y armoniosa.",
    },
    {
      icon: "../public/assets/img/icons/IC Slide 4 Mantenimiento.svg",
      text: "Mantenimiento y cuidado profecional del bosque.",
    },
  ];

  let index = 0;

  function updateCarousel() {
    // Actualiza contenido
    icon.src = carouselData[index].icon;
    text.textContent = carouselData[index].text;
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % carouselData.length;
    updateCarousel();
  });

  updateCarousel();
}
