# Saif Ali Portfolio

Personal portfolio for **Saif Ali** — Founder of [whyitworks.ai](https://whyitworks.ai/), an AI-driven marketing agency for ecommerce — recreating the layout and motion language of [nikolaradeski.com](https://nikolaradeski.com/) per [`design.md`](design.md).

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, **GSAP ScrollTrigger**, and **Lenis**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Routes

- `/` — homepage (hero, services, about, experience, reviews, FAQ, contact)
- `/portfolio` — filterable work gallery (`#pc=all|web-ui-ux|graphic-design|ai-creatives`)
- `/cv` — HTML CV preview + PDF download
- `/book` — Calendly booking embed

## Connect Calendly

Connected to **30 Minute Meeting**:  
`https://calendly.com/callwithsaif/30min`

**Schedule a call** (About + Contact) opens the Calendly popup.  
`/book` shows the full inline scheduler.

To override locally, set in `.env.local`:

```bash
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/callwithsaif/30min
```

Then restart the dev server.

Place your real files here:

| Asset | Path |
| --- | --- |
| Hero / pin portrait | `public/media/portrait-front.jpg` |
| About portrait | `public/media/portrait-about.jpg` |
| Contact portrait | `public/media/portrait-contact.jpg` |
| Portrait back showreel | `public/media/showreel.mp4` + `showreel-poster.jpg` |
| Hero background loop | `public/media/hero-bg-poster.jpg` (or add an MP4 and wire it in `Hero`) |
| Project thumbnails | `public/projects/*.jpg` |

Update copy and links in `src/content/`:

- `site.ts` — name, email, socials, booking URL, CV URL
- `services.ts`, `about.ts`, `faq.ts`, `reviews.ts`, `portfolio.ts`

Set `cvUrl` in `site.ts` (or leave the default API route) for CV actions. Add approved reviews to `reviews.ts`. Set credential `publish: true` only for verified entries.

## Contact form

`POST /api/contact` validates the form and logs submissions locally until you connect SMTP or a provider. Check the terminal for a[contact]` logs in development.

## Design contract

See [`design.md`](design.md) for measured tokens, portrait timeline phases, navigation, and acceptance criteria.
