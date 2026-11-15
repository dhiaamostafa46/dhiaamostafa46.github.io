/* Studio enhancements: cursor spotlight, scroll progress, reveal-on-scroll.
   All progressive: the page is fully readable with JS off. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Spotlight follows the pointer (fine pointers only)
  if (!reduce && window.matchMedia('(pointer: fine)').matches) {
    var raf = 0, x = 0, y = 0;
    window.addEventListener('pointermove', function (e) {
      x = e.clientX; y = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        root.style.setProperty('--mx', x + 'px');
        root.style.setProperty('--my', y + 'px');
        raf = 0;
      });
    }, { passive: true });
  }

  // Scroll progress
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal (also picks up rows that script.js renders later)
  if (reduce || !('IntersectionObserver' in window)) return;
  var SEL = '.section-head, .hero-text-col > *, .hero-widget-col, .about-grid > *, .stat-item,' +
    '.service-card, .arch-workbench, .skill-category, .lux-project-card, .oss-card,' +
    '.timeline-item .content, .degree-card, .cert-card, .contact-grid > *, .footer-grid > *';
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
  function scan() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.dataset.rv) return;
      el.dataset.rv = '1'; el.classList.add('rv');
      var i = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--rv-delay', Math.min(i % 5, 4) * 60 + 'ms');
      io.observe(el);
    });
  }
  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
})();
