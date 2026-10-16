/* ============================================================
   main.js — Shared JavaScript (runs on ALL pages)
   Quenmark Solutions | Company Website
   ============================================================
   Features:
   - Navbar scroll effect (transparent → solid)
   - Mobile hamburger menu toggle
   - Scroll Reveal (Intersection Observer)
   - Stagger children reveal
   - Page exit animation on link click
   - Active nav link highlighting
   ============================================================ */

'use strict';

/* ============================================================
   NAVBAR — Scroll Effect
   Adds .scrolled class when page scrolls past 50px
   CSS in components.css handles the visual change
   ============================================================ */
(function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 50;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Run once on load in case page is already scrolled
})();


/* ============================================================
   MOBILE MENU — Hamburger Toggle
   Toggles .open class on menu and hamburger button
   ============================================================ */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when any mobile link is clicked
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();


/* ============================================================
   ACTIVE NAV LINK HIGHLIGHTING
   Compares current page URL to nav link hrefs and adds .active
   ============================================================ */
(function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar__links a, .navbar__mobile-menu a');

  navLinks.forEach(function (link) {
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
})();


/* ============================================================
   SCROLL REVEAL — Intersection Observer
   Watches all elements with .reveal, .reveal-left, .reveal-right
   and adds .visible when they enter the viewport
   ============================================================ */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const staggerEls = document.querySelectorAll('.stagger-children');

  if (!('IntersectionObserver' in window)) {
    // Fallback: just show everything immediately
    revealEls.forEach(function (el) { el.classList.add('visible'); });
    staggerEls.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(function (el) { revealObserver.observe(el); });
  staggerEls.forEach(function (el) { revealObserver.observe(el); });
})();


/* ============================================================
   SMOOTH PAGE TRANSITIONS
   Fades out page before navigating to a new internal link
   ============================================================ */
(function initPageTransitions() {
  // Fix back/forward cache (bfcache) restoring page in faded-out state
  window.addEventListener('pageshow', function () {
    document.body.classList.remove('page-exit');
  });

  document.querySelectorAll('a[href]').forEach(function (link) {
    const href = link.getAttribute('href');
    // Only apply to internal .html links (not # anchors or external)
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto')) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.add('page-exit');
      setTimeout(function () {
        window.location.href = href;
      }, 280);
    });
  });
})();


/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 70;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
})();


/* ============================================================
   DARK / LIGHT THEME TOGGLE
   Persists selection in localStorage.
   Adds data-theme="light" to <html> for light mode.
   Default is dark mode.
   ============================================================ */
(function initThemeToggle() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('theme-toggle-btn');

  // Load saved preference (default: dark)
  const savedTheme = localStorage.getItem('qm-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  function updateToggleIcon(theme) {
    if (!toggleBtn) return;
    toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    toggleBtn.textContent = theme === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'; // ☀️ or 🌙
    toggleBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  updateToggleIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      const current = html.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('qm-theme', next);
      updateToggleIcon(next);
    });
  }
})();
