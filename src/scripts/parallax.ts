// Las fotos con [data-px] se desplazan un poco más despacio que la página.
export function initParallax(k = 0.12) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = [...document.querySelectorAll<HTMLElement>('[data-px]')];
  if (!els.length) return;
  let queued = false;
  const tick = () => {
    queued = false;
    const vh = innerHeight;
    for (const el of els) {
      const p = el.parentElement!;
      const r = p.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) continue;
      const h = r.height, m = h * 0.12;
      const c = r.top + h / 2 - vh / 2;
      el.style.transform = `translate3d(0,${Math.max(-m, Math.min(m, -c * k)).toFixed(1)}px,0)`;
    }
  };
  const req = () => { if (!queued) { queued = true; requestAnimationFrame(tick); } };
  addEventListener('scroll', req, { passive: true });
  addEventListener('resize', req);
  tick();
}
