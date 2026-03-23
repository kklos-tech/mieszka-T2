let projektyData = null;
let currentProjektIndex = 0;
let currentGalleryIndexes = {};
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let initialized = false;

async function loadProjektyData() {
  if (projektyData) return projektyData;
  const module = await import('./projekty-data.js');
  projektyData = module.projektyData;
  return projektyData;
}

export function initProjekty() {
  const section = document.getElementById('projekty');
  if (!section || initialized) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await loadAndRender();
      }
    });
  }, { rootMargin: '300px 0px' });

  observer.observe(section);
}

async function loadAndRender() {
  if (initialized) return;
  initialized = true;

  await loadProjektyData();
  projektyData.forEach((_, index) => {
    currentGalleryIndexes[index] = 0;
  });

  renderProjekt(currentProjektIndex);
  updateProjektIndicator();
  document.addEventListener('keydown', handleKeyboardNavigation);
}

function handleKeyboardNavigation(e) {
  if (e.key === 'ArrowLeft') {
    navigateProjekt(-1, false);
  } else if (e.key === 'ArrowRight') {
    navigateProjekt(1, false);
  }
}

function navigateProjekt(direction, shouldScroll = true) {
  const totalProjects = projektyData.length;
  currentProjektIndex = (currentProjektIndex + direction + totalProjects) % totalProjects;
  renderProjekt(currentProjektIndex);
  updateProjektIndicator();
  if (shouldScroll) {
    scrollToProjektySection();
  }
}

function navigateProjektWithScroll(direction) {
  navigateProjekt(direction, true);
}

function scrollToProjektySection() {
  const projektySection = document.getElementById('projekty');
  if (projektySection) {
    const navHeight = document.querySelector('.navbar')?.offsetHeight || 80;
    const top = window.scrollY + projektySection.getBoundingClientRect().top - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function moveGallery(projektIndex, direction) {
  const projekt = projektyData[projektIndex];
  const maxIndex = projekt.images.length - 1;
  currentGalleryIndexes[projektIndex] += direction;
  if (currentGalleryIndexes[projektIndex] < 0) {
    currentGalleryIndexes[projektIndex] = maxIndex;
  } else if (currentGalleryIndexes[projektIndex] > maxIndex) {
    currentGalleryIndexes[projektIndex] = 0;
  }
  updateGalleryPosition(projektIndex);
}

function setGallerySlide(projektIndex, slideIndex) {
  currentGalleryIndexes[projektIndex] = slideIndex;
  updateGalleryPosition(projektIndex);
}

function renderProjekt(index) {
  const projekt = projektyData[index];
  const container = document.getElementById('projekt-content');
  if (!container) return;

  container.innerHTML = `
    <div class="projekt-gallery" id="projekt-gallery-${index}">
      <div class="gallery-slides" id="gallery-slides-${index}">
        ${projekt.images.map((img, i) => `
          <div class="gallery-slide">
            <img src="${img}" alt="${projekt.title} - zdjecie ${i + 1}" loading="lazy"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22%3E%3Crect fill=%22%23ddd%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2224%22%3EZdjecie ${i + 1}%3C/text%3E%3C/svg%3E'">
          </div>
        `).join('')}
      </div>

      ${projekt.images.length > 1 ? `
        <button class="gallery-nav gallery-nav-left" data-action="gallery-prev" data-index="${index}" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="gallery-nav gallery-nav-right" data-action="gallery-next" data-index="${index}" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <div class="gallery-controls">
          ${projekt.images.map((_, i) => `
            <button class="gallery-dot ${i === 0 ? 'active' : ''}"
                    data-action="gallery-dot" data-index="${index}" data-slide="${i}"
                    type="button"
                    aria-label="Przejdz do zdjecia ${i + 1}"></button>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <div class="projekt-info">
      <div class="projekt-header-wrapper">
        <button class="projekt-nav projekt-nav-prev" data-action="projekt-prev" type="button" aria-label="Poprzedni projekt">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
          </svg>
        </button>

        <div style="flex: 1;">
          <h3 class="projekt-title">${projekt.title}</h3>
          <div class="projekt-tags">
            <span class="projekt-tag tag-type">${projekt.type}</span>
            <span class="projekt-tag tag-size">${projekt.size}</span>
            <span class="projekt-tag tag-date">${projekt.date}</span>
          </div>
        </div>

        <button class="projekt-nav projekt-nav-next" data-action="projekt-next" type="button" aria-label="Nastepny projekt">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
          </svg>
        </button>
      </div>

      <div class="projekt-sections">
        <div class="projekt-section">
          <h3>Wyzwanie</h3>
          <p>${projekt.problem}</p>
        </div>

        <div class="projekt-section">
          <h3>Rozwiazanie</h3>
          <p>${projekt.solution}</p>
        </div>

        <div class="projekt-section">
          <h3>Rezultat</h3>
          <p>${projekt.result}</p>
        </div>
      </div>

      <div class="projekt-benefits">
        ${projekt.benefits.map(benefit => `
          <span class="benefit-tag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            ${benefit}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  const mainContainer = container.parentElement;
  const oldBottomNav = document.querySelector('.projekt-nav-bottom');
  if (oldBottomNav) oldBottomNav.remove();

  const oldIndicator = document.querySelector('.projekt-indicator');
  if (oldIndicator) oldIndicator.remove();

  const bottomNav = document.createElement('div');
  bottomNav.className = 'projekt-nav-bottom';
  bottomNav.innerHTML = `
    <button class="projekt-nav-btn prev-btn" data-action="projekt-prev-scroll" type="button">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="11 17 6 12 11 7"></polyline>
        <polyline points="18 17 13 12 18 7"></polyline>
      </svg>
    </button>

    <div class="projekt-indicator" style="display:none;">
      <span id="projekt-current">${currentProjektIndex + 1}</span> / <span id="projekt-total">${projektyData.length}</span>
    </div>

    <button class="projekt-nav-btn next-btn" data-action="projekt-next-scroll" type="button">
      <span>Kolejny projekt</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="13 17 18 12 13 7"></polyline>
        <polyline points="6 17 11 12 6 7"></polyline>
      </svg>
    </button>
  `;

  mainContainer.appendChild(bottomNav);

  container.addEventListener('click', handleProjektClick);
  bottomNav.addEventListener('click', handleProjektClick);
  initGallerySwipe(index);
}

function handleProjektClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;

  const action = btn.dataset.action;
  const index = parseInt(btn.dataset.index);

  switch (action) {
    case 'gallery-prev': moveGallery(index, -1); break;
    case 'gallery-next': moveGallery(index, 1); break;
    case 'gallery-dot': setGallerySlide(index, parseInt(btn.dataset.slide)); break;
    case 'projekt-prev': navigateProjekt(-1, false); break;
    case 'projekt-next': navigateProjekt(1, false); break;
    case 'projekt-prev-scroll': navigateProjektWithScroll(-1); break;
    case 'projekt-next-scroll': navigateProjektWithScroll(1); break;
  }
}

function initGallerySwipe(projektIndex) {
  const gallery = document.getElementById(`projekt-gallery-${projektIndex}`);
  if (!gallery) return;

  gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  gallery.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGallerySwipe(projektIndex);
  }, { passive: true });
}

function handleGallerySwipe(projektIndex) {
  const swipeThreshold = 50;
  const swipeDistanceX = touchEndX - touchStartX;
  const swipeDistanceY = Math.abs(touchEndY - touchStartY);

  if (Math.abs(swipeDistanceX) > swipeThreshold && swipeDistanceY < 100) {
    if (swipeDistanceX > 0) {
      moveGallery(projektIndex, -1);
    } else {
      moveGallery(projektIndex, 1);
    }
  }
}

function updateGalleryPosition(projektIndex) {
  const slides = document.getElementById(`gallery-slides-${projektIndex}`);
  const dots = document.querySelectorAll('.gallery-dot');

  if (slides) {
    const offset = currentGalleryIndexes[projektIndex] * -100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentGalleryIndexes[projektIndex]);
  });
}

function updateProjektIndicator() {
  const currentEl = document.getElementById('projekt-current');
  const totalEl = document.getElementById('projekt-total');
  if (currentEl) currentEl.textContent = currentProjektIndex + 1;
  if (totalEl) totalEl.textContent = projektyData.length;
}
