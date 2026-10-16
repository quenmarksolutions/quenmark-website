/* ============================================================
   projects.js — Projects Page Specific JavaScript
   Company Website | StartUp Project
   ============================================================
   Features:
   - Filter bar: filters project cards by category tag
   ============================================================ */

'use strict';

(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-wrapper');
  if (!filterBtns.length) return;

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      projectCards.forEach(function (card) {
        const categories = card.getAttribute('data-categories') || '';
        const show = filter === 'all' || categories.includes(filter);
        card.style.display = show ? '' : 'none';
        // Re-trigger reveal animation on shown cards
        if (show) {
          card.querySelector('.project-card').classList.remove('visible');
          setTimeout(function () {
            card.querySelector('.project-card').classList.add('visible');
          }, 50);
        }
      });
    });
  });
})();


/* ============================================================
   FAQ ACCORDION (also used on products.html)
   Toggles open/close on accordion items
   ============================================================ */
(function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  if (!accordionHeaders.length) return;

  accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
      const item = header.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-item').forEach(function (i) {
        i.classList.remove('open');
        const b = i.querySelector('.accordion-body');
        if (b) b.classList.remove('open');
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        if (body) body.classList.add('open');
      }
    });
  });
})();
