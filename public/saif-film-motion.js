(() => {
  'use strict';

  const boot = () => {
    const frame = document.querySelector('.saif-featured-video__frame');
    if (!frame) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = window.matchMedia('(max-width: 640px)');
    const clamp = (value) => Math.max(0, Math.min(1, value));
    let scheduled = false;

    const updateFrame = () => {
      scheduled = false;
      if (reducedMotion.matches) {
        frame.style.setProperty('--film-scale', '1');
        frame.style.setProperty('--film-radius', mobile.matches ? '18px' : '24px');
        return;
      }

      const rect = frame.getBoundingClientRect();
      const height = frame.offsetHeight;
      const top = rect.top - (height - rect.height) / 2;
      if (mobile.matches) {
        // Grow toward the screen edges as the film reaches the centre of a phone.
        const centre = top + height / 2;
        const start = window.innerHeight * 0.82;
        const finish = window.innerHeight * 0.55;
        const progress = clamp((start - centre) / (start - finish));
        const eased = progress * progress * (3 - 2 * progress);
        frame.style.setProperty('--film-scale', (0.9 + eased * 0.19).toFixed(4));
        frame.style.setProperty('--film-radius', `${Math.round(22 - eased * 12)}px`);
      } else {
        const bottom = top + height;
        const range = window.innerHeight * 0.82;
        const entering = clamp((window.innerHeight - top) / range);
        const leaving = clamp(bottom / range);
        const progress = Math.min(entering, leaving);
        const eased = progress * progress * (3 - 2 * progress);
        frame.style.setProperty('--film-scale', (0.82 + eased * 0.18).toFixed(4));
        frame.style.setProperty('--film-radius', `${Math.round(32 - eased * 12)}px`);
      }
    };

    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updateFrame);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    reducedMotion.addEventListener?.('change', schedule);
    mobile.addEventListener?.('change', schedule);
    schedule();
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
