export function initTestimonialsCarousel() {
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!testimonials.length || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentTestimonial = 0;

  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Przejdz do opinii ${index + 1}`);
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.carousel-dot');

  function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active', 'prev'));
    dots.forEach(d => d.classList.remove('active'));
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
  }

  prevBtn.addEventListener('click', () => {
    showTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  });

  nextBtn.addEventListener('click', () => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
  });

  let autoplayInterval = setInterval(() => {
    showTestimonial((currentTestimonial + 1) % testimonials.length);
  }, 6000);

  const carouselContainer = document.querySelector('.testimonials-carousel');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
  carouselContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(() => {
      showTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 6000);
  });
}
