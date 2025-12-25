// Handle parallax-style scaling on card images
(function () {
  const covers = document.querySelectorAll('.cardcover');
  const translateLimit = 18;
  const scaleHover = 1.1;

  covers.forEach((cover) => {
    const image = cover.querySelector('.cardimage');
    if (!image) {
      return;
    }

    const resetTransform = () => {
      cover.classList.remove('is-hovering');
      cover.style.removeProperty('--cardimage-translate-x');
      cover.style.removeProperty('--cardimage-translate-y');
      cover.style.removeProperty('--cardimage-scale');
    };

    cover.addEventListener('mouseenter', () => {
      cover.classList.add('is-hovering');
      cover.style.setProperty('--cardimage-scale', String(scaleHover));
    });

    cover.addEventListener('mousemove', (event) => {
      const rect = cover.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;

      const translateX = (0.5 - relativeX) * translateLimit * 2;
      const translateY = (0.5 - relativeY) * translateLimit * 2;

      cover.style.setProperty('--cardimage-translate-x', `${translateX}px`);
      cover.style.setProperty('--cardimage-translate-y', `${translateY}px`);
    });

    cover.addEventListener('mouseleave', resetTransform);
  });
})();
