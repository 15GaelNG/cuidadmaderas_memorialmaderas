
export function initSlide4Carousel() {
  const videos = [
    '/public/assets/img/backgrounds/Slide4/Videos/A1 Pino Piñonero.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A2 Pino Eldarica.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A3 Grevillia.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A4 Acacia Verde.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A5 Pino Greggi.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A6 Guayacán Rosa.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A7 Acacia Gris.mp4',
    '/public/assets/img/backgrounds/Slide4/Videos/A8 Guayacán Amarillo.mp4'
  ];

  const captions = [
    'Pino Piñonero',
    'Pino Eldarica',
    'Grevillia',
    'Acacia Verde',
    'Pino Greggi',
    'Guayacán Rosa',
    'Acacia Gris',
    'Guayacán Amarillo'
  ];

  let currentIndex = 0;

  const videosContainer = document.querySelector('.slide4-carousel-videos');
  function getVideoEls() {
    return videosContainer.querySelectorAll('.slide4-carousel-video');
  }
  const captionElement = document.querySelector('.slide4-carousel-caption span');
  const btnRight = document.querySelector('.slide4-carousel-btn-right');
  const btnLeft = document.querySelector('.slide4-carousel-btn-left');
  let isSliding = false;

  function setVideoAttrs(video) {
    video.removeAttribute('controls');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('muted', '');
  }

  function showVideo(index, direction = 'right') {
    if (isSliding) return;
    isSliding = true;
    const videoEls = getVideoEls();
    const current = videoEls[0];
    const next = videoEls[1];
    setVideoAttrs(current);
    setVideoAttrs(next);

    // Prepara el siguiente video y posición inicial
    next.src = videos[index];
    next.load();
    next.play();
    captionElement.textContent = captions[index] || '';
    next.classList.remove('active', 'slide-in-right', 'slide-in-left', 'slide-out-left', 'slide-out-right');
    current.classList.remove('slide-out-left', 'slide-out-right');
    // Posición inicial fuera de pantalla usando clases
    if (direction === 'right') {
      next.classList.add('slide-in-right');
    } else {
      next.classList.add('slide-in-left');
    }
    void next.offsetWidth;
    current.classList.add('active');
    next.classList.add('active');
    // Animación
    setTimeout(() => {
      if (direction === 'right') {
        next.classList.remove('slide-in-right');
        current.classList.add('slide-out-left');
      } else {
        next.classList.remove('slide-in-left');
        current.classList.add('slide-out-right');
      }
    }, 20);

    setTimeout(() => {
      current.classList.remove('active', 'slide-out-left', 'slide-out-right');
      next.classList.remove('slide-in-right', 'slide-in-left');
      videosContainer.appendChild(current);
      // Limpiar el src del video que queda atrás
      getVideoEls()[1].src = '';
      isSliding = false;
    }, 500);
  }

  function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    showVideo(currentIndex, 'right');
  }

  function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    showVideo(currentIndex, 'left');
  }

  btnRight.addEventListener('click', nextVideo);
  btnLeft.addEventListener('click', prevVideo);

  setInterval(nextVideo, 5000);

  // Inicializa el primer video
  const videoElsInit = getVideoEls();
  setVideoAttrs(videoElsInit[0]);
  videoElsInit[0].src = videos[currentIndex];
  videoElsInit[0].load();
  videoElsInit[0].play();
  videoElsInit[0].classList.add('active');
  captionElement.textContent = captions[currentIndex] || '';
}


