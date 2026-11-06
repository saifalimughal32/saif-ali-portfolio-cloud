(() => {
  'use strict';

  const boot = () => {
    const frame = document.querySelector('.saif-featured-video__frame');
    const like = document.getElementById('saif-film-like');
    const share = document.getElementById('saif-film-share');
    const status = document.getElementById('saif-film-status');
    if (!frame) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clamp = (value) => Math.max(0, Math.min(1, value));
    let scheduled = false;

    const updateFrame = () => {
      scheduled = false;
      if (reducedMotion.matches) {
        frame.style.setProperty('--film-scale', '1');
        frame.style.setProperty('--film-radius', '24px');
        return;
      }

      const rect = frame.getBoundingClientRect();
      const top = rect.top - (frame.offsetHeight - rect.height) / 2;
      const bottom = top + frame.offsetHeight;
      const range = window.innerHeight * 0.82;
      const entering = clamp((window.innerHeight - top) / range);
      const leaving = clamp(bottom / range);
      const progress = Math.min(entering, leaving);
      const eased = progress * progress * (3 - 2 * progress);
      frame.style.setProperty('--film-scale', (0.82 + eased * 0.18).toFixed(4));
      frame.style.setProperty('--film-radius', `${Math.round(32 - eased * 12)}px`);
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
    schedule();

    const storageKey = 'saif-film-liked';
    const setLiked = (active) => {
      if (!like) return;
      like.setAttribute('aria-pressed', String(active));
      like.setAttribute('aria-label', active ? 'Unlike this film' : 'Like this film');
    };
    try { setLiked(localStorage.getItem(storageKey) === 'yes'); }
    catch { setLiked(false); }
    like?.addEventListener('click', () => {
      const active = like.getAttribute('aria-pressed') !== 'true';
      setLiked(active);
      try { localStorage.setItem(storageKey, active ? 'yes' : 'no'); } catch { /* optional */ }
      if (status) status.textContent = active ? 'Film liked on this device.' : 'Like removed.';
    });

    share?.addEventListener('click', async () => {
      const url = new URL('#film-player', window.location.href).href;
      try {
        await navigator.clipboard.writeText(url);
        if (status) status.textContent = 'Film link copied.';
      } catch {
        if (status) status.textContent = 'Copy this page URL from your browser to share the film.';
      }
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
