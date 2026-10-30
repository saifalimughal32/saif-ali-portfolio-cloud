from pathlib import Path
from html.parser import HTMLParser
import subprocess,re,json,xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]
class Text(HTMLParser):
 def __init__(self):super().__init__();self.parts=[]
 def handle_data(self,data):self.parts.append(data)
def article_copy(source):
 s=re.search(r'<article class="saif-article">([\s\S]*?)</article>',source).group(1)
 s=re.sub(r'<p>/ Blog</p>|<p>By Saif Ali[^<]*</p>','',s)
 t=Text();t.feed(s);return ' '.join(' '.join(t.parts).split())
posts=list((root/'public/reference-pages/blog').glob('*.html'))
for p in posts:
 rel=p.relative_to(root).as_posix();old=subprocess.check_output(['git','show','HEAD:'+rel],cwd=root).decode('utf8');new=p.read_text(encoding='utf8')
 assert article_copy(old)==article_copy(new),'Article copy changed: '+rel
 assert re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>',old)==re.findall(r'<script type="application/ld\+json">([\s\S]*?)</script>',new),'Schema changed: '+rel
 assert re.findall(r'<link rel="canonical"[^>]*>',old)==re.findall(r'<link rel="canonical"[^>]*>',new),'Canonical changed: '+rel
 ids=set(re.findall(r'\bid="([^"]+)"',new))
 toc=re.search(r'<nav class="saif-journal-toc"[\s\S]*?</nav>',new).group()
 assert all(target in ids for target in re.findall(r'href="#([^"]+)"',toc)),'Broken article contents link: '+rel
for i in range(20):
 p=root/f'public/assets/saif-client-{i}-color.svg';s=p.read_text(encoding='utf8');ET.fromstring(s)
 assert '<path' in s and '<text' not in s and '<image' not in s
print(json.dumps({'articleBodiesUnchanged':len(posts),'structuredDataPreserved':True,'canonicalURLsPreserved':True,'articleAnchorsValid':True,'validColorSVGs':20},indent=2))
