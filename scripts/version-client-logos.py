from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
total=0
for p in (root/'public/reference-pages').rglob('*.html'):
 s=p.read_text(encoding='utf8')
 out,n=re.subn(r'(/assets/saif-client-\d+\.svg)(?!\?)',r'\1?v=outlined-20261030',s)
 if p==root/'public/reference-pages/index.html':
  out=out.replace('<section class="logo-section v2">','<section class="logo-section v2" id="client-identities">')
 if out!=s:p.write_text(out,encoding='utf8');total+=n
print('Versioned',total,'logo references')
