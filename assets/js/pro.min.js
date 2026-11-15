/* Progressive enhancement: scroll reveal, scroll progress, header state.
   Everything is visible without JS; the 'js' class only enables the animation. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll progress + header elevation
  var bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  var header = document.querySelector('.header');
  var ticking = false;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      var h = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll (also catches cards that JS renders later)
  var SEL = '.section-head, .hero-text-col > *, .hero-widget-col, .about-grid > *, .stat-item,' +
    '.service-card, .arch-workbench > *, .skill-category, .lux-project-card, .oss-card,' +
    '.timeline .content, .degree-card, .cert-card, .contact-grid > *, .footer-grid > *';
  if (!('IntersectionObserver' in window) || reduce) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

  function scan() {
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.dataset.rv) return;
      el.dataset.rv = '1';
      el.classList.add('rv');
      var sib = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.style.setProperty('--rv-delay', Math.min(sib % 6, 5) * 70 + 'ms');
      io.observe(el);
    });
  }
  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
})();
