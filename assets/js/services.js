/* ============================================================
   services.js — Services Page Specific JavaScript
   Company Website | StartUp Project
   ============================================================
   Features:
   - Tabbed service detail sections
   ============================================================ */

'use strict';

(function initServiceTabs() {
  const tabBtns = document.querySelectorAll('.service-tab-btn');
  const tabPanels = document.querySelectorAll('.service-tab-panel');
  if (!tabBtns.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  // Activate tab based on URL hash (e.g. #creator) or default to first tab
  const hash = (window.location.hash || '').replace('#', '');
  const matchedBtn = hash ? document.querySelector('.service-tab-btn[data-tab="' + hash + '"]') : null;
  if (matchedBtn) {
    matchedBtn.click();
  } else if (tabBtns[0]) {
    tabBtns[0].click();
  }
})();
