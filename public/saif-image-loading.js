(() => {
  'use strict';
  // HTML already contains the images. Start nearby downloads before scrolling
  // reveals them, without downloading the entire portfolio on first paint.
  function start() {
    const connection = navigator.connection;
    const margin = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '') ? 400 : 1600;
    const images = [...document.querySelectorAll('img[src], img[srcset]')];
    const prepare = image => {
      image.loading = 'eager';
      image.decoding = 'async';
      if (image.complete && image.naturalWidth) {
        image.dataset.saifImageReady = 'true';
      } else {
        image.addEventListener('load', () => { image.dataset.saifImageReady = 'true'; }, {once: true});
      }
    };
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        prepare(entry.target);
        observer.unobserve(entry.target);
      }
    }, {rootMargin: `${margin}px 0px`}) : null;
    for (const image of images) {
      const rect = image.getBoundingClientRect();
      if (rect.width && rect.height && rect.bottom >= 0 && rect.top < innerHeight) {
        prepare(image);
      } else if (observer) {
        observer.observe(image);
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once: true});
  else start();
})();
