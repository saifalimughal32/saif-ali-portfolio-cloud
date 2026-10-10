# Saif Ali Portfolio — Status Plan

Live preview: http://127.0.0.1:43127/

## Done

### Site foundation
- [x] Next.js 15 + TypeScript + Tailwind portfolio (nikolaradeski-style clone)
- [x] Smooth scroll (Lenis) + GSAP ScrollTrigger animations
- [x] Greeting loader (home + portfolio)
- [x] Mobile header menu + desktop floating nav
- [x] Hero with portrait / showreel flip card
- [x] Services, About, Experience, Reviews, FAQ, Contact, Footer
- [x] CV page (`/cv`) + PDF download API
- [x] Calendly booking (`callwithsaif/30min`) + `/book`
- [x] Ask AI provider links in footer

### Portfolio & branding work
- [x] Portfolio filters: Web & UI/UX · Graphic Design · AI Creatives
- [x] Homepage gateway mix: 2 websites + 2 branding (Aura21, Bun Box, SpookyBite, Rivori Matcha)
- [x] AI Creatives imported from Mobile Editing Club (videos + statics)
- [x] AI Creatives CTA only on AI Creatives filter (brand colors)
- [x] SpookyBite branding assets (replaced BOTZEN)
- [x] Rivori Matcha gallery fully replaced with new creatives (10 images + collage)
- [x] Rivori / Mello Matcha image quality re-exported from full-res sources
- [x] SpookyBite + Rivori main thumbnails refreshed at high quality

### Mobile / responsive
- [x] Match nikolaradeski.com mobile UX: text-first hero, no pin overlay
- [x] Desktop-only GSAP portrait pin/flip (≥1000px); mobile portrait stays in flow
- [x] Dark mobile header + hamburger Menu (reference-style)
- [x] Service cards stack cleanly on mobile (sticky stack desktop-only)
- [x] Experience blur, lightbox swipe, Lenis touch, viewport meta
- [x] Verified no horizontal overflow / no Skills overlay at 390, 412, 768

---

## Remaining / nice-to-have

### Content decisions
- [ ] Confirm brand naming: project title still **Rivori Matcha**, assets say **mello matcha** — rename site copy if desired
- [ ] Replace remaining placeholder projects (Campaign Concept, unfinished OnePlace, etc.)
- [ ] Real client reviews vs current copy (if any still sample)
- [ ] Favicon / app icon still shows Next “N” in some previews — brand favicon if needed

### Polish & QA
- [ ] Real-device pass on iOS Safari + Android Chrome (touch scroll + pin flip)
- [ ] Lighthouse mobile performance (hero/showreel video weight)
- [ ] Contact form delivery (API currently accepts; wire email provider if needed)
- [ ] Production deploy (Vercel) + custom domain
- [ ] Open Graph / social share image
- [ ] Analytics (optional)

### Optional product extras
- [ ] Blog / case-study pages per project
- [ ] Multilingual (EN / UR) if needed
- [ ] CMS for portfolio updates without code

---

## How to run

```bash
npm install
npm run dev
# http://127.0.0.1:43127
```
