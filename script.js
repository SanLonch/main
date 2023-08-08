const photos = document.querySelectorAll('.photo');

const initialScale = 1.0;
const targetScale = 1.5;
const animationSpeed = 0.05;

photos.forEach((photo) => {
  let isZoomed = false;
  let currentScale = initialScale;
  let intervalId;

  photo.addEventListener('click', () => {
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (isZoomed) {
        currentScale = currentScale - animationSpeed;
        if (currentScale <= initialScale) {
          currentScale = initialScale;
          isZoomed = false;
          clearInterval(intervalId);
        }
      } else {
        currentScale = currentScale + animationSpeed;
        if (currentScale >= targetScale) {
          currentScale = targetScale;
          isZoomed = true;
          clearInterval(intervalId);
        }
      }
      photo.style.transform = `scale(${currentScale})`;
    }, 18);
  });
});
