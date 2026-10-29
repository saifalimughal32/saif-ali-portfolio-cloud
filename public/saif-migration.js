(() => {
 const boot = () => {
  document.querySelectorAll('[data-migration-copy-email]').forEach(button => button.addEventListener('click', async () => {
   try { await navigator.clipboard.writeText('info@saifali.site'); const status = document.getElementById('saif-copy-status'); if (status) status.textContent = 'Email copied. Send your store URL, project goal, and preferred times to info@saifali.site.'; button.textContent = 'Email copied ✓'; }
   catch { const status = document.getElementById('saif-copy-status'); if(status) status.textContent = 'Email: info@saifali.site'; }
  }));
  document.querySelectorAll('[data-local-portfolio]').forEach(link => link.addEventListener('click', event => {
   event.preventDefault(); const image = link.querySelector('img'), dialog = document.getElementById('saif-project-dialog'); if (!dialog || !image) return;
   document.getElementById('saif-dialog-image').src = image.src; document.getElementById('saif-dialog-image').alt = image.alt;
   document.getElementById('saif-dialog-title').textContent = link.querySelector('h2')?.textContent || 'Selected work';
   document.getElementById('saif-dialog-category').textContent = 'Saif Ali — Portfolio'; document.getElementById('saif-dialog-description').textContent = image.alt;
   dialog.showModal();
  }));
  // About-page reveals use the same GSAP runtime already present on the homepage.
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
   gsap.registerPlugin(ScrollTrigger);
   document.querySelectorAll('.saif-about-grid, .saif-timeline-row, .saif-principle, .saif-page-cta').forEach(el => {
    gsap.from(el, {y:35, duration:.8, ease:'power2.out', scrollTrigger:{trigger:el,start:'top 92%',once:true}});
   });
   document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
 };
 if(document.readyState === 'loading')document.addEventListener('DOMContentLoaded',boot); else boot();
})();

document.addEventListener('DOMContentLoaded',()=>{const form=document.getElementById('saif-audit-brief');if(!form)return;form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const text='AUDIT REQUEST FOR SAIF ALI\n\nName: '+d.get('name')+'\nEmail: '+d.get('email')+'\nStore / Brand: '+d.get('store')+'\n\nChallenge:\n'+d.get('challenge')+'\n\nSend to: info@saifali.site\n';const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='saif-ali-audit-request.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);document.getElementById('saif-audit-status').textContent='Request downloaded. Send it to info@saifali.site; nothing has been sent from this page.'})});

document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.arc-card-item').forEach(card=>{card.addEventListener('click',e=>{if(card.dataset.status!=='active'||!e.target.classList.contains('arc-image'))return;const link=card.querySelector('a[href^="/case-studies/"]');if(!link)return;e.preventDefault();e.stopPropagation();location.assign(link.getAttribute('href'))},true)})});
