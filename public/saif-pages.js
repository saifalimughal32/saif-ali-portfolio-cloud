(() => {
 'use strict';
 const boot=()=>{
  // Keep real page navigation independent of animation/dropdown click handlers.
  window.addEventListener('click',event=>{
   if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   const link=event.target.closest('.nav-menu-v2 a[href],.saif-portfolio-grid a[href],a.grid-image[href]');
   if(!link||link.hasAttribute('download')||link.target==='_blank')return;
   const destination=new URL(link.href,location.href);
   if(destination.origin!==location.origin||destination.hash||destination.pathname===location.pathname)return;
   event.preventDefault();event.stopImmediatePropagation();location.assign(destination.href);
  },true);
  // All content is already served as static HTML. Speculate only on deliberate
  // link intent; never prerender submissions, downloads, APIs, or external sites.
  if(!navigator.connection?.saveData&&!/2g/.test(navigator.connection?.effectiveType||'')){
   const eligible='a[href^="/"]:not([href^="//"]):not([href^="/api/"]):not([href*="#"]):not([download]):not([target="_blank"])';
   if(HTMLScriptElement.supports?.('speculationrules')){
    const rules=document.createElement('script');rules.type='speculationrules';
    rules.textContent=JSON.stringify({prefetch:[{source:'document',where:{selector_matches:eligible},eagerness:'moderate'}],prerender:[{source:'document',where:{selector_matches:eligible},eagerness:'conservative'}]});document.head.append(rules);
   }else{
    const warmed=new Set();const warm=event=>{const a=event.target.closest(eligible);if(!a||warmed.size>=4||warmed.has(a.pathname)||a.pathname===location.pathname)return;warmed.add(a.pathname);const hint=document.createElement('link');hint.rel='prefetch';hint.href=a.href;document.head.append(hint);};
    document.addEventListener('pointerover',warm,{passive:true});document.addEventListener('focusin',warm);
   }
  }
  if(document.body.classList.contains('saif-inner-page')){
   const button=document.querySelector('.nav_menu-button'),menu=document.querySelector('.nav-menu-v2');
   if(button&&menu){menu.id='saif-site-navigation';button.setAttribute('role','button');button.setAttribute('tabindex','0');button.setAttribute('aria-controls',menu.id);button.setAttribute('aria-expanded','false');
    const toggle=(open)=>{document.body.classList.toggle('saif-menu-open',open);button.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-hidden',String(!open));};toggle(false);
    button.addEventListener('click',()=>toggle(!document.body.classList.contains('saif-menu-open')));
    button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();button.click();}});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){toggle(false);button.focus();}});
    menu.addEventListener('click',e=>{if(e.target.closest('a'))toggle(false);});
   }
   const progress=document.querySelector('.scroll-counter>div');
   if(progress){const update=()=>{progress.textContent=Math.round(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%';};addEventListener('scroll',update,{passive:true});update();}
   document.querySelectorAll('.faq-header').forEach(header=>{header.setAttribute('role','button');header.setAttribute('tabindex','0');header.setAttribute('aria-expanded','false');const toggle=()=>{const open=header.parentElement.classList.toggle('is-open');header.setAttribute('aria-expanded',String(open));};header.addEventListener('click',toggle);header.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});});
  }
  document.querySelectorAll('[data-local-portfolio]').forEach(link=>link.addEventListener('click',e=>{const image=link.querySelector('img'),dialog=document.getElementById('saif-project-dialog');if(!image||!dialog)return;e.preventDefault();document.getElementById('saif-dialog-image').src=image.currentSrc||image.src;document.getElementById('saif-dialog-image').alt=image.alt;document.getElementById('saif-dialog-title').textContent=link.querySelector('h2')?.textContent||'Selected work';document.getElementById('saif-dialog-description').textContent=image.alt;dialog.showModal();}));
  document.querySelector('.saif-dialog-close')?.addEventListener('click',()=>document.getElementById('saif-project-dialog')?.close());
  document.querySelectorAll('[data-migration-copy-email],[data-copy-email]').forEach(button=>button.addEventListener('click',async e=>{e.preventDefault();try{await navigator.clipboard.writeText('info@saifali.site');button.textContent='Email copied ✓';}catch{button.textContent='info@saifali.site';}}));
  const send=async(form,url,payload,status)=>{const button=form.querySelector('[type=submit]');const label=button.textContent;button.disabled=true;button.textContent='Sending…';status.textContent='';try{const response=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await response.json();if(!response.ok||!data.ok)throw new Error('Delivery failed');form.reset();status.textContent='Your enquiry has been sent. Thank you—Saif will follow up with you.';}catch{status.textContent='Your enquiry could not be sent. Please try again, or copy info@saifali.site and contact Saif directly. Nothing has been confirmed as delivered.';}finally{button.disabled=false;button.textContent=label;}};
  const contact=document.getElementById('saif-live-contact');contact?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(contact);send(contact,'/api/contact',Object.fromEntries(data),document.getElementById('saif-contact-status'));});
  const audit=document.getElementById('saif-audit-brief');if(audit){const label=document.createElement('label');label.textContent='WhatsApp number';const input=document.createElement('input');input.type='tel';input.name='whatsapp';input.autocomplete='tel';input.required=true;label.append(input);audit.insertBefore(label,audit.querySelector('button'));audit.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(audit);send(audit,'/api/free-audit',{name:data.get('name'),email:data.get('email'),whatsapp:data.get('whatsapp'),brand:data.get('store'),website:data.get('store'),stageLabel:'Portfolio audit enquiry',quizAnswers:[{question:'What would you like reviewed?',label:data.get('challenge')}]},document.getElementById('saif-audit-status'));});}
  if(document.body.classList.contains('saif-journal-article')){
   const progress=document.createElement('div');progress.className='saif-reading-progress';document.body.append(progress);const update=()=>{progress.style.transform='scaleX('+Math.min(1,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))+')';};addEventListener('scroll',update,{passive:true});update();
   if('IntersectionObserver'in window){const links=[...document.querySelectorAll('.saif-journal-toc a')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('is-active',a.hash==='#'+entry.target.id));}});},{rootMargin:'-10% 0px -70% 0px'});links.forEach(a=>{const target=document.getElementById(a.hash.slice(1));if(target)observer.observe(target);});}
  }
  const holder=document.querySelector('.hero-video'),video=holder?.querySelector('video');
  if(video&&video.querySelector('source[data-src]')){
   let loaded=false;const start=()=>{if(loaded||matchMedia('(prefers-reduced-motion: reduce)').matches)return;loaded=true;video.querySelectorAll('source[data-src]').forEach(source=>source.src=source.dataset.src);video.load();video.play().then(()=>holder.classList.add('saif-video-ready')).catch(()=>{});};
   ['pointerdown','keydown','scroll'].forEach(name=>addEventListener(name,start,{once:true,passive:true}));
  }
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
