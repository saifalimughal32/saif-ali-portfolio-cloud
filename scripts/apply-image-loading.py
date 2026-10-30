"""Apply the shared ahead-of-scroll image loader to static page templates."""
from pathlib import Path

root = Path(__file__).resolve().parents[1]
tag = '<script defer src="/saif-image-loading.js?v=20261030a"></script>'
count = 0
for path in (root / 'public/reference-pages').rglob('*.html'):
    html = path.read_text(encoding='utf-8')
    if '/saif-image-loading.js' not in html:
        html = html.replace('</head>', tag + '</head>', 1)
        path.write_text(html, encoding='utf-8')
        count += 1
print(f'Updated {count} templates')
