import './style.css'
import { initNavigation } from './src/navigation.js'
import { initHeroRotatingText } from './src/hero.js'
import { initScrollAnimations, initCennikAnimations } from './src/animations.js'
import { initFAQ } from './src/faq.js'
import { initTestimonialsCarousel } from './src/testimonials.js'
import { initProjekty } from './src/projekty.js'
import { initSchematAlter2 } from './src/schemat.js'

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroRotatingText();
  initScrollAnimations();
  initFAQ();
  initTestimonialsCarousel();
  initProjekty();
  initSchematAlter2();
  initCennikAnimations();
});
