(() => {
  const grid = document.getElementById('saif-work-grid');
  if (!grid) return;
  const cards = [...grid.querySelectorAll('.saif-work-card')];
  const filters = [...document.querySelectorAll('[data-work-filter]')];
  const layouts = [...document.querySelectorAll('[data-work-layout]')];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const refresh = () => { window.ScrollTrigger?.refresh(); };
  function change(update) {
    const flip = window.Flip;
    const state = !reduced && flip ? flip.getState(cards.filter(c => !c.hidden)) : null;
    update();
    if (state) flip.from(state, { duration: .55, ease: 'power2.inOut', absolute: false, stagger: .025, onComplete: refresh });
    else refresh();
  }
  filters.forEach(button => button.addEventListener('click', () => change(() => {
    const key = button.dataset.workFilter;
    filters.forEach(b => { const active = b === button; b.setAttribute('aria-pressed', active); b.classList.toggle('is-active', active); });
    cards.forEach(card => { card.hidden = key !== 'all' && !card.dataset.workTags.split(' ').includes(key); });
    const count = cards.filter(card => !card.hidden).length;
    document.getElementById('saif-work-count').textContent = `${count} selected project${count === 1 ? '' : 's'}`;
  })));
  layouts.forEach(button => button.addEventListener('click', () => change(() => {
    grid.dataset.workView = button.dataset.workLayout;
    layouts.forEach(b => { const active = b === button; b.setAttribute('aria-pressed', active); b.classList.toggle('is-active', active); });
  })));
  if (!reduced && window.gsap && window.ScrollTrigger) {
    cards.forEach(card => gsap.from(card, { y: 30, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 95%', once: true } }));
  }
  document.querySelectorAll('.saif-work-detail').forEach(detail => detail.addEventListener('toggle', refresh));
})();
