export function initHeroRotatingText() {
  const rotatingTexts = document.querySelectorAll('.rotating-text');
  if (!rotatingTexts.length) return;

  let currentIndex = 0;

  setInterval(() => {
    rotatingTexts[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % rotatingTexts.length;
    rotatingTexts[currentIndex].classList.add('active');
  }, 3500);
}
