/* Quiet constellation background (2D canvas, no WebGL dependency).
   - Sparse drifting nodes joined by hairlines, gentle pointer parallax
   - Fades out as the page scrolls past the hero, pauses when hidden
   - Honours prefers-reduced-motion (renders a single static frame) */
(function () {
  'use strict';
  var canvas = document.getElementById('network-canvas');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, nodes = [], raf = 0, running = false;
  var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  var LINK = 150;

  function accent() {
    var s = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    return s || '#0bbab5';
  }
  function rgb(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  function resize() {
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.round(Math.min(70, Math.max(18, (W * H) / 26000)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.8, z: Math.random() * 0.8 + 0.2
      });
    }
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;
    var c = rgb(accent());
    var col = function (a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; };
    var i, j, a, b, dx, dy, d, ax, ay, bx, by;
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      if (!reduce) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < -20) a.x = W + 20; else if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20; else if (a.y > H + 20) a.y = -20;
      }
    }
    for (i = 0; i < nodes.length; i++) {
      a = nodes[i];
      ax = a.x + mouse.x * 26 * a.z; ay = a.y + mouse.y * 26 * a.z;
      for (j = i + 1; j < nodes.length; j++) {
        b = nodes[j];
        bx = b.x + mouse.x * 26 * b.z; by = b.y + mouse.y * 26 * b.z;
        dx = ax - bx; dy = ay - by; d = dx * dx + dy * dy;
        if (d < LINK * LINK) {
          ctx.strokeStyle = col(0.38 * (1 - Math.sqrt(d) / LINK));
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
        }
      }
      ctx.fillStyle = col(0.5 + a.z * 0.45);
      ctx.beginPath(); ctx.arc(ax, ay, a.r * a.z + 0.4, 0, 6.2832); ctx.fill();
    }
  }

  function loop() { if (!running) return; frame(); raf = requestAnimationFrame(loop); }
  function start() { if (running || reduce) return; running = true; loop(); }
  function stop() { running = false; cancelAnimationFrame(raf); }

  function onScroll() {
    var p = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
    canvas.style.opacity = String(1 - p);
    if (p >= 1) stop(); else start();
  }

  window.addEventListener('resize', function () { resize(); frame(); });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('pointermove', function (e) {
    mouse.tx = e.clientX / window.innerWidth - 0.5;
    mouse.ty = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : onScroll(); });
  new MutationObserver(function () { frame(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  resize(); frame(); onScroll();
})();
