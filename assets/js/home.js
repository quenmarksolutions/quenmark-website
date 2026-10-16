/* ============================================================
   home.js — Home Page Specific JavaScript
   Company Website | StartUp Project
   ============================================================
   Features:
   - Animated stats counter (counts up when scrolled into view)
   - Testimonial auto-slider with dot indicators
   ============================================================ */

'use strict';


/* ============================================================
   ANIMATED STATS COUNTER
   Targets elements with data-target="NUMBER" attribute
   ============================================================ */
(function initCounters() {
  const statNumbers = document.querySelectorAll('[data-count]');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    const duration = 1800; // ms
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easedProgress;

      // Format number (show decimal only if target has one)
      const formatted = Number.isInteger(target)
        ? Math.floor(current)
        : current.toFixed(1);

      el.textContent = prefix + formatted + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(function (el) { animateCounter(el); });
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
})();


/* ============================================================
   TESTIMONIAL SLIDER
   Auto-cycles through testimonial cards with dot navigation
   ============================================================ */
(function initTestimonialSlider() {
  const track = document.getElementById('testimonials-track');
  const dotsContainer = document.getElementById('testimonials-dots');
  if (!track || !dotsContainer) return;

  const cards = Array.from(track.children);
  if (cards.length < 2) return;

  let currentIndex = 0;
  let autoplayInterval = null;
  const AUTOPLAY_DELAY = 4500; // ms

  // Create dots
  cards.forEach(function (_, i) {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.className = 'testimonial-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    currentIndex = (index + cards.length) % cards.length;
    track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
    dotsContainer.querySelectorAll('.testimonial-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  function startAutoplay() {
    autoplayInterval = setInterval(function () {
      goTo(currentIndex + 1);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Pause on hover
  track.addEventListener('mouseenter', stopAutoplay);
  track.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
})();
