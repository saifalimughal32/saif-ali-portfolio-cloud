"""Reconstruct monochrome SVG paths from the portfolio's supplied logo artwork."""
from pathlib import Path
from PIL import Image,ImageDraw
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import numpy as np
import vtracer,io,re,xml.etree.ElementTree as ET
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'public/assets'
NS='{http://www.w3.org/2000/svg}'
sources=[
 ('Aura21','assets/saif-aura21.webp',(.39,.045,.57,.12),'dark'),
 ('Bun Box','projects/bunbox/section-01.jpg',(.045,.04,.155,.125),'dark'),
 ('Elvo','projects/elvo/section-01.jpg',(.065,.01,.17,.048),'dark'),
 ('Homely Furniture','projects/homely/section-01.jpg',(.055,.235,.735,.572),'cream'),
 ('MORA','projects/mora/brand-board.jpg',None,'light'),
 ('Rivori Matcha','projects/rivori-matcha/logo-mark.jpg',(.06,.065,.94,.93),'dark'),
 ('SpookyBite','projects/spookybite/logo-lockup.jpg',(.035,.10,.965,.94),'light'),
 ('AI Static Ads',None,None,None),('AI Product Visuals',None,None,None),
 ('Luma','projects/luma-case/cs-03.jpg',(.38,.43,.62,.55),'blue'),
 ('Habibi','projects/habibi-case/cs-04.jpg',(.375,.55,.64,.618),'warm'),
 ('Dentify','projects/dentify/logo.jpg',(.12,.28,.86,.62),'blue-dark'),
]

def text_paths(text):
 font=TTFont('C:/Windows/Fonts/arial.ttf');glyphs=font.getGlyphSet();cmap=font.getBestCmap();x=0;pieces=[]
 for ch in text:
  name=cmap[ord(ch)];pen=SVGPathPen(glyphs);glyphs[name].draw(pen);pieces.append(f'<path d="{pen.getCommands()}" transform="translate({x},0)"/>');x+=font['hmtx'][name][0]
 scale=min(210/x,31/font['head'].unitsPerEm)
 return f'<g transform="translate({(240-x*scale)/2},56) scale({scale},-{scale})" fill="#090909">'+''.join(pieces)+'</g>'

previews=[]
for i,(name,source,rect,kind) in enumerate(sources):
 if source:
  im=Image.open(ROOT/'public'/source).convert('RGB')
  if name=='MORA':
   im=im.transform((800,500),Image.Transform.QUAD,(285,194,285,425,550,315,550,112),Image.Resampling.BICUBIC)
   rect=(.12,.20,.86,.70)
  crop=im.crop(tuple(round(v*(im.width if j%2==0 else im.height)) for j,v in enumerate(rect)))
  a=np.asarray(crop).astype(float);r,g,b=a[:,:,0],a[:,:,1],a[:,:,2]
  if kind=='dark': ink=(r+g+b)/3<110
  elif kind=='light': ink=(r>185)&(g>185)&(b>180)
  elif kind=='cream': ink=(r>210)&(g>210)&(b>190)&(r-b>8)&(abs(r-g)<15)
  elif kind=='blue': ink=(b-r>30)&(b>130)&(g-r>20)
  elif kind=='blue-dark': ink=(b-r>20)&(r<130)&(g<165)
  else: ink=(r>145)&((g>140)|(r-g>70))
  mask=Image.fromarray((ink*255).astype('uint8'))
  bbox=mask.getbbox()
  if not bbox:raise ValueError(name+' has no logo pixels')
  mask=mask.crop(bbox)
  preview=Image.new('RGB',mask.size,'white');preview.paste('#090909',mask=mask);previews.append((name,preview))
  traced=Image.new('RGB',(mask.width+12,mask.height+12),'white');traced.paste('#090909',(6,6,6+mask.width,6+mask.height),mask)
  data=io.BytesIO();traced.save(data,format='PNG')
  svg=vtracer.convert_raw_image_to_svg(data.getvalue(),img_format='png',colormode='binary',mode='spline',filter_speckle=3,corner_threshold=60,length_threshold=3.5,path_precision=2)
  tree=ET.fromstring(svg);paths=[]
  for child in tree:
   if child.tag==NS+'path':
    child.set('fill','#090909');paths.append(ET.tostring(child,encoding='unicode').replace('ns0:','').replace(':ns0',''))
  scale=min(210/traced.width,66/traced.height)
  body=f'<g transform="translate({(240-traced.width*scale)/2:.3f},{(90-traced.height*scale)/2:.3f}) scale({scale:.5f})">'+''.join(paths)+'</g>'
 else:body=text_paths(name)
 result=f'<svg xmlns="http://www.w3.org/2000/svg" width="240" height="90" viewBox="0 0 240 90" role="img" aria-label="{name}"><title>{name}</title>{body}</svg>'
 assert '<path' in result and '<text' not in result and '<image' not in result,name
 for index in [i]+([i+12] if i<8 else []):(OUT/f'saif-client-{index}.svg').write_text(result,encoding='utf8')

sheet=Image.new('RGB',(1000,800),'#eee');draw=ImageDraw.Draw(sheet)
for i,(name,im) in enumerate(previews):
 im.thumbnail((280,145));x=(i%3)*333;y=(i//3)*200
 sheet.paste(im,(x+(310-im.width)//2,y+10));draw.text((x+15,y+165),name,fill='black')
sheet.save(ROOT.parent/'outlined-logo-review.png')
print('Created 20 SVG files: 10 traced project identities + 2 outlined category labels, with repeated strip assets.')
