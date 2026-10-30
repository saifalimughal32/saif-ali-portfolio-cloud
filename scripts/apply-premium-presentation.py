from pathlib import Path
import re,html,hashlib
ROOT=Path(__file__).resolve().parents[1]
public=ROOT/'public'
colors=['#4d5538','#431b0d','#17211c','#e36a15','#2448f5','#0b391c','#e51d28','#365a39','#355e9a','#8cb8e7','#44220b','#29599b']
for i in range(20):
 s=(public/f'assets/saif-client-{i}.svg').read_text(encoding='utf8')
 (public/f'assets/saif-client-{i}-color.svg').write_text(s.replace('#090909',colors[i%12]),encoding='utf8')

files=[public/'reference-pages/index.html',public/'reference-pages/portfolio.html',public/'reference-pages/blog.html',*sorted((public/'reference-pages/blog').glob('*.html'))]
for p in files:
 s=p.read_text(encoding='utf8')
 if '/saif-premium.css' not in s:s=s.replace('</head>','<link rel="stylesheet" href="/saif-premium.css?v=20261030b"></head>')
 if '/saif-premium.js' not in s:s=s.replace('</body>','<script src="/saif-premium.js?v=20261030b" defer></script></body>')
 if p.name=='blog.html' or p.parent.name=='blog':
  old=re.search(r'<section class="saif-page-title\b[^>]*>[\s\S]*?</section>',s)
  if old:
   hero=old.group();title=re.search(r'<h1[^>]*>([\s\S]*?)</h1>',hero).group(1)
   deck=re.search(r'<p class="saif-page-deck">([\s\S]*?)</p>',hero).group(1)
   if p.name=='blog.html':
    new=f'<header class="saif-editorial-hero"><p class="saif-editorial-eyebrow"><span>Saif Ali / Journal</span><span>Independent thinking. Practical design.</span></p><h1>{title}</h1><p class="saif-page-deck">{deck}</p></header>'
    s=s[:old.start()]+new+s[old.end():]
    s=s.replace('<div class="saif-journal-grid">','<div class="saif-editorial-topline" id="journal-articles"><h2>Latest thinking</h2><span>03 articles / Design &amp; commerce</span></div><div class="saif-journal-grid">',1)
    s=s.replace('<span>01</span>','<span>Featured story</span>',1).replace('<span>02</span>','<span>Field notes</span>',1).replace('<span>03</span>','<span>Practical guide</span>',1)
   else:
    category=re.search(r'<span class="saif-banner-label">([\s\S]*?)</span>',hero).group(1)
    meta=re.search(r'<div class="saif-journal-meta">([\s\S]*?)</div>',hero).group()
    image=re.search(r'<img\b[^>]*>',hero).group()
    alt=html.unescape(re.search(r'alt="([^"]*)"',image).group(1))
    caption=html.escape(alt)+'. Project artwork shown for illustration.'
    new=f'<header class="saif-editorial-hero saif-article-masthead"><p class="saif-editorial-eyebrow"><a href="/blog">← Journal</a><span>{category}</span></p><h1>{title}</h1><p class="saif-page-deck">{deck}</p>{meta}</header><figure class="saif-editorial-cover">{image}<figcaption>{caption}</figcaption></figure>'
    s=s[:old.start()]+new+s[old.end():]
    s=re.sub(r'<p>/ Blog</p>','',s,count=1)
    s=re.sub(r'<p>By Saif Ali[^<]*</p>','',s,count=1)
  # Stable semantic data remains intact; only visual templates and duplicated labels change.
 p.write_text(s,encoding='utf8')
print('Added 20 color SVG variants and updated',len(files),'page templates.')
