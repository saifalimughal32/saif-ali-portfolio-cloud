(() => {
 'use strict';
 const palette=[['Aura21','#f7f5ec'],['Bun Box','#fff0b5'],['Elvo','#eef1ec'],['Homely Furniture','#fff0df'],['MORA','#edf0ff'],['Rivori Matcha','#cef333'],['SpookyBite','#fff0df'],['AI Static Ads','#e8f0e8'],['AI Product Visuals','#e9eef7'],['Luma','#fff0dc'],['Habibi','#fff0d3'],['Dentify','#edf4fb']];
 function boot(){
  document.querySelectorAll('.partner-card').forEach(card=>{
   const images=[...card.querySelectorAll('.partner-logo')];if(!images.length||card.querySelector('.saif-logo-toggle'))return;
   const names=images.map(i=>i.alt).filter(Boolean);
   const button=document.createElement('button');button.type='button';button.className='saif-logo-toggle';button.setAttribute('aria-label','Show brand colors for '+names.join(' and '));button.setAttribute('aria-pressed','false');
   const label=document.createElement('span');label.className='saif-sr';label.textContent='Reveal brand colors';button.append(label);
   const url=(image,color)=>{const source=image.dataset.saifMono||image.getAttribute('src');image.dataset.saifMono=source;return color?source.replace(/(saif-client-\d+)\.svg(?:\?.*)?$/,'$1-color.svg?v=20261030b'):source;};
   images.forEach(image=>{const index=Number(/saif-client-(\d+)/.exec(image.getAttribute('src'))?.[1]||0)%12;image.closest('.card-side')?.style.setProperty('--saif-logo-bg',palette[index][1]);});
   const warm=()=>images.forEach(image=>{const preload=new Image();preload.src=url(image,true);});
   button.addEventListener('pointerenter',warm,{once:true});button.addEventListener('focus',warm,{once:true});
   button.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();const active=card.classList.toggle('is-color');button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',(active?'Hide':'Show')+' brand colors for '+names.join(' and '));images.forEach(image=>image.src=url(image,active));});
   card.append(button);
  });
  const logoSection=document.querySelector('#client-identities');
  if(logoSection&&!logoSection.querySelector('.saif-logo-color-hint')){const hint=document.createElement('p');hint.className='saif-logo-color-hint';hint.textContent='Click a logo card to reveal its brand colors.';logoSection.querySelector('.partner-card')?.parentElement?.insertAdjacentElement('afterend',hint);}
  document.querySelectorAll('.arc-card-item').forEach(card=>{
   const name=card.querySelector('.arc-image')?.alt||'Selected work';card.dataset.saifFrame=name+' / Portfolio';
   const button=card.querySelector('.button-text');if(button&&button.textContent.trim()==='View Case Study')button.textContent='View project';
  });
  document.querySelectorAll('.saif-journal-toc a').forEach(a=>a.textContent=a.textContent.replace(/^\d+\.\s+/,''));
  document.querySelectorAll('.saif-journal-meta time[datetime]').forEach(time=>{const date=new Date(time.getAttribute('datetime')+'T12:00:00Z');if(!Number.isNaN(date.getTime()))time.textContent=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(date);});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
