// js/components/carousel.js

export function initCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const text = document.getElementById("carousel-text");
  const icon = document.getElementById("carousel-icon");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  const carouselData = [
    {
      icon: "🌱",
      text: "Perpetuidad de su nicho y/o mausoleo.",
    },
    {
      icon: "🪴",
      text: "Mantenimiento y cuidado profesional del bosque.",
    },
    {
      icon: "🕊️",
      text: "Espacios exclusivos con valor patrimonial.",
    },
  ];

  let index = 0;

  function updateCarousel() {
    icon.textContent = carouselData[index].icon;
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
