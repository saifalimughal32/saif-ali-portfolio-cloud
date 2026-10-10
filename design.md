# Saif Ali Portfolio Design Specification

Reference: https://nikolaradeski.com/

Portfolio reference: https://nikolaradeski.com/portfolio/

Inspection date: 6 October 2026, Pakistan time.

## 1. Goal and implementation contract

Recreate the reference website's visual composition, section order, typography, scrolling behavior, portrait animation, floating navigation, portfolio filtering, and interaction language as closely as possible for Saif Ali's personal portfolio. Use Saif's identity, projects, photography, services, and verified experience.

This is a build specification, not a completed website or a certification of pixel perfect equivalence. Desktop layout, rendered styles, public inline animation settings, navigation, portfolio filters, and FAQ controls were inspected. Mobile layout is specified from responsive rules and responsive DOM content; a live mobile viewport was not inspected. Values marked **measured** come from the reference. Values marked **target** are implementation recommendations requiring visual comparison.

Interpretation of the requested tool: this specification assumes **WordPress with Astra**, paired with Elementor or an equivalent builder. The phrase “Astra makers” does not identify a confirmed separate product. If it means another AI website builder, use the same visual and motion requirements, but implement the platform layer in that builder's supported framework. Do not invent native Astra features for custom animations.

The inspected reference exposes WordPress, Avada, Fusion Builder, GSAP ScrollTrigger, and a Lenis scrolling plugin. Astra is the replacement site shell. Custom CSS and JavaScript recreate the effects. An Astra starter template alone will not reproduce the reference.

### Priorities

1. Match the reference's light gray canvas, strong typography, central portrait, open spacing, and black floating navigation.
2. Implement the portrait's movement, pinning, flips, scale changes, and final fade.
3. Match the service card rhythm and long page progression.
4. Recreate the separate filterable portfolio page and shared footer.
5. Personalize content without changing the overall design language.
6. Finish mobile behavior, keyboard interaction, loading states, and working contact delivery.

Do not turn this into a generic dark portfolio, dashboard, gradient landing page, or conventional top header website. Do not add extra hero buttons or a row of generic statistics above the fold.

## 2. Identity and content rules

| Field | Portfolio value |
| --- | --- |
| Display name | Saif Ali |
| Hero left name | SAIF |
| Hero right name | ALI |
| Professional label | Shopify Designer & Growth Strategist |
| Hero eyebrow | Ecommerce Design & Creative Strategy |
| Location | Muzaffarabad, Pakistan |
| Clock zone | Asia/Karachi, GMT+5 |
| Contact email | info@saifali.site |
| Instagram | https://www.instagram.com/saifalimughal_01/ |
| Agency | TheClickUp |
| Agency website | https://theclickup.com/ |
| Language | English throughout |
| Copyright | Current year, Saif Ali |

Use the user's latest supplied portrait. No portrait file was attached to this request, so make the portrait an explicit required asset. Never show Nikola's face, name, biography, contact information, testimonials, awards, or career history as Saif's own. Do not automatically publish historic agency revenue or project volume claims without current confirmation.

Match layout, not the original person's credentials. Where an awards or review section lacks evidence, preserve its spacing and component design in staging, then populate it with verified proof or hide it gracefully for launch.

## 3. Routes, anchors, and section order

### Homepage `/`

1. Greeting loader overlay.
2. Hero with abstract white background video, split name, and central portrait.
3. Services introduction and nine numbered service cards.
4. About section with buttons, portrait, social links, and proof line.
5. Horizontal capability or credibility marquee.
6. Credentials or selected proof table.
7. Large positioning statement.
8. Large complete portfolio gateway with project media.
9. Work experience rows with scroll driven blur reveals.
10. Reviews grid.
11. FAQ accordion.
12. Contact introduction, form, and portrait panel.
13. Shared name/footer region and collaboration marquee.
14. AI profile links if valid destinations are supplied.
15. Email, optional phone, copyright, and back to top.

### Portfolio `/portfolio/`

1. Portfolio greeting loader.
2. Centered last updated pill.
3. Centered portfolio heading and supporting sentence.
4. Horizontal category filters.
5. Two column desktop media gallery.
6. Shared collaboration/footer region.
7. Portfolio specific floating bottom navigation.

### Anchor contract

| Destination | Identifier |
| --- | --- |
| Homepage top | `#home` |
| Skills | `#skills` |
| About | `#about` |
| Reviews | `#testimonials` |
| Contact | `#contact` |
| Portfolio gallery | `#work-postcards` |
| All projects | `/portfolio/#pc=all` |
| Website category | `/portfolio/#pc=web-ui-ux` |
| Graphic category | `/portfolio/#pc=graphic-design` |
| AI Creatives category | `/portfolio/#pc=ai-creatives` |

The original also has `#pcm=` mobile category aliases. Support those as legacy aliases if useful, but one responsive gallery and one canonical `#pc=` state are sufficient for Saif's build. Cross page homepage links must include the homepage path, not merely a portfolio page hash.

## 4. Evidence and measurement baseline

The inspected desktop browser had an inner viewport of approximately **1363 × 936 px**. Screenshots visually rendered about 1348 px wide including the scrollbar treatment. Compare using CSS viewport dimensions, not screenshot bitmap width.

| Observed element | Measured value |
| --- | --- |
| Main background | `#eaeaea` |
| Primary text | `#333333` |
| Supporting text | `#6d6d6d` |
| Muted text | `#8e8e8e`; service lists use `#a5a5a5` |
| Accent token | `#e27500` |
| Dark token | `#141617` |
| Portrait card | 270 × 380 px |
| Portrait corner radius | 24 px |
| Portrait perspective | 1400 px |
| Portrait shadow | `0 6px 32px rgba(0,0,0,.15)` |
| Hero name computed size | 81.78 px at inspected viewport |
| Hero name line height | 77.691 px, approximately 95% |
| Main section heading | 44.8 px with 44.8 px line height |
| Service heading | 36 px with 36 px line height |
| Service card radius | 35 px |
| Service card sticky top | 80 px |
| Service card width | 50% of the content row on desktop |
| Service card internal padding | Approximately 27 px vertical, 53 px horizontal |
| Bottom nav offset | 24 px plus safe area |
| Bottom nav reserved content space | 88 px |
| Reference responsive boundaries | 640/641 px, 999/1000 px; portrait animation activates above 500 px |
| Section reveal duration | 1 second |
| Section reveal stagger | 0, 0.1, 0.2 seconds |
| Both text marquee cycles | 50 seconds |

### Reference document positions

These are calibration coordinates for the inspected reference at its original content length, not fixed heights to enforce on Saif's shorter content.

| Region | Approximate document Y |
| --- | --- |
| Hero start | 0 |
| Services wrapper start | 711 |
| Skills anchor | 800 |
| About | 5846 |
| Credentials | 6591 |
| Positioning statement | 7881 |
| Portfolio gateway | 8460 |
| Work experience | 10058 |
| Reviews | 12054; anchor around 12119 |
| FAQ | 15547 |
| Contact | 16420; anchor around 16484 |
| Shared footer | 17597 |
| Copyright region | 18216 |

The long service region and pinned portrait are defining features. Do not compress everything into a short one screen service grid. Equally, do not create thousands of pixels of blank space merely to imitate the original's longer résumé or review count.

## 5. Global visual system

### Palette

Default to the reference orange for the closest match. Saif's green branding is an optional later theme variant, not the initial default, because this request asks for the same design. One accent variable must control colored heading words, primary buttons, active navigation, filter indicator, stars, and subtle glow effects.

```css
.saif-portfolio {
  --page-bg: #eaeaea;
  --surface: #ffffff;
  --surface-soft: #f2f2f2;
  --text: #333333;
  --text-secondary: #6d6d6d;
  --text-muted: #8e8e8e;
  --border: #dbdbdb;
  --accent: #e27500;
  --nav-bg: #090909;
  --portrait-radius: 24px;
  --card-radius: 35px;
  --pill-radius: 999px;
  --content-max: 1080px;
  --section-space: clamp(56px, 5vw, 90px);
}
```

The container maximum above is a **target**, consistent with the homepage content beginning around x=140 at the inspected viewport. The portfolio gallery uses a wider target maximum of 1120 px. Use a fluid outer gutter around 5vw and inner centered containers. Do not apply both a large theme gutter and builder gutter accidentally.

### Typography

| Usage | Reference family | Implementation mapping |
| --- | --- | --- |
| Hero names | Clash Display Semibold | Clash Display, weight 600 |
| Section headings | General Sans Medium | General Sans, weight 500 |
| Body copy | General Sans Regular | General Sans, weight 400 |
| Names or bold metadata | General Sans Semibold | General Sans, weight 600 |
| Handwritten section labels | Gloria Hallelujah | Gloria Hallelujah, weight 400 |

The reference registers separate weight files as separate family names, so its computed weight often reads 400 even on a semibold file. In the recreation, register proper numeric weight mappings. Source the fonts from their official distributors and host approved local WOFF2 files. Inter is a loading fallback, not the final visual substitute.

### Type sizes

| Element | Desktop target | Phone target |
| --- | --- | --- |
| Hero split name | Fluid 64 to 96 px; match 81.78 px at baseline | 70 to 85 px, stacked composition |
| Section title | 44.8 px, line height 1 | 32 to 36 px, line height 1.05 |
| Contact title | 64 px | 40 to 46 px |
| Service title | 36 px | 28 to 32 px |
| Large experience role | 48 to 64 px, calibrated to content | 28 to 36 px |
| Body | 16 px, line height 1.4 to 1.5 | 16 px, line height 1.5 |
| Tool list | 14 px, line height 1.45 | 14 px |
| Handwritten eyebrow | 16 px | 14 to 16 px |
| Navigation | 14 to 15 px | 15 to 18 px in menu |
| Footer marquee | 64 px | 40 to 48 px |

Body tracking target is approximately `-0.5px`. Section headings use around `-2px`. Keep hero sizing independent from body typography. Do not use excessively heavy bold type throughout.

### Borders, surfaces, and shadows

Service cards are white. Review cards are subtly separated from the gray canvas with a fine pale border. Buttons are rounded pills. The contact image is a large rounded rectangle. Avoid solid black outlines around every component or a pervasive shadow on every section.

The reference also has a pale fixed lower viewport fade over scrolled content. Recreate the visual gently with a decorative, pointer transparent gradient behind the navigation. **Target:** 150 to 220 px height, transparent at its top and page gray at its bottom. It must not conceal form feedback, focused controls, or card actions. Test keyboard focus against it.

## 6. Hero and background

The hero is light and spacious. Desktop names sit on either side of a portrait, approximately vertically centered around the portrait's middle. The first eyebrow sits above the left name; the role sits above the right name. Local time sits below the right name, right aligned.

At the inspected viewport, the portrait begins around y=165 and ends around y=541. It sits horizontally near the center. The hero wrapper ends around y=711, leaving the services introduction partially visible near the first screen's lower edge.

### Desktop structure

1. Full width absolute decorative video behind all content.
2. Centered inner row with left name block, middle portrait origin, right name block.
3. Left block: eyebrow and `SAIF`.
4. Right block: role, `ALI`, and local clock.
5. A persistent portrait layer that can leave its hero origin and travel through the service region.
6. Floating bottom navigation above every normal content layer.

Use a three column layout around `1fr 270px 1fr` where practical. Ensure `ALI` is right aligned, with the visual gap to the portrait matching the reference. Do not stretch Saif's shorter names to fill the original word lengths. Tune font size, tracking, and alignment to balance the composition.

### Background asset

Observed source is an animated white geometric hexagonal surface, used as a muted looping background. It is not a colorful gradient or a still geometric line pattern. Required replacement asset: a licensed or original abstract white hexagonal 3D loop with low contrast.

Reference observation URL, for inspection only:

https://nikolaradeski.com/wp-content/uploads/2025/08/abstract-white-background-4k-motion-graphics-background-loop-white-video-loop-1080-ytshorts.savetube.me_.mp4

Store the production asset locally. Use `autoplay`, `muted`, `loop`, and `playsinline`, an image poster, and `object-fit: cover`. Fade its bottom into `#eaeaea` so the services section has no visible seam. Pause when the hero is well outside the viewport. Reduced motion and data saving modes use the poster.

### Clock

Display `Muzaffarabad, Pakistan · HH:MM GMT+5`. Format with `Intl.DateTimeFormat` using `Asia/Karachi`, not a manually added five hour offset. Refresh each minute and once when the tab returns to visibility. Do not announce minute changes through an ARIA live region.

## 7. Signature portrait animation

This is the most important animation. Use a dedicated wrapper for pinning and a nested card for movement. A face image is on the front and a short branded showreel is on the back. Both faces have hidden backfaces; the back starts rotated 180 degrees. The wrapper perspective is 1400 px.

### Observed settings

| Setting | Reference value |
| --- | --- |
| Scroll trigger | `.intro-section` |
| Start | `top top` |
| End | `+=5750` |
| Scrub | 1.2 |
| Pin | `.card-pin` |
| Pin spacing | false |
| Anticipate pin | 1 |
| Refresh invalidation | true |
| Right travel | Minimum of 420 px and 25% viewport width |
| Down travel | 70 px |
| Initial diagonal tilt | 8 degrees |
| Maximum scale | 1.18 |
| Animation media condition | Minimum width 501 px |

### Timeline phases

Durations below are relative timeline weights for a scrubbed sequence, not literal playback seconds. Total weight is 3.35.

| Phase | Weight | Normalized progress | Transform result | Ease |
| --- | --- | --- | --- | --- |
| 1 | 0.2 | 0 to 5.97% | Move right, down 70px, rotate Z to 8°, scale 1 | power1.inOut |
| 2 | 0.45 | 5.97 to 19.40% | Rotate Y to 180°, rotate Z to 0° | power2.inOut |
| 3 | 1.2 | 19.40 to 55.22% | Gradually scale to 1.18 | power1.inOut |
| 4 | 0.4 | 55.22 to 67.16% | Return scale to 1 | power1.inOut |
| 5 | 0.8 | 67.16 to 91.04% | Hold displaced position and back face | none |
| 6 | 0.3 | 91.04 to 100% | Rotate Y to 360°, revealing the portrait again | power2.inOut |

Fade the pinned card from visible to hidden when About reaches the viewport top, over an additional 20% of viewport height. Scrolling back up must restore the correct opacity continuously. Do not duplicate the reference's end fade callbacks verbatim: derive opacity from trigger progress to avoid jumps when reversing scroll.

### Required geometry

```css
.saif-portfolio .portrait-pin {
  position: relative;
  width: 270px;
  height: 380px;
  margin: 90px auto 0;
  perspective: 1400px;
  transform-origin: center top;
  z-index: 20;
}
.saif-portfolio .portrait-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 24px;
  transform-style: preserve-3d;
  transform-origin: center;
  box-shadow: 0 6px 32px rgba(0,0,0,.15);
}
.saif-portfolio .portrait-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: inherit;
  overflow: hidden;
}
.saif-portfolio .portrait-back { transform: rotateY(180deg); }
.saif-portfolio .portrait-face img,
.saif-portfolio .portrait-face video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
```

### Builder independent motion recipe

Register GSAP and ScrollTrigger once, then scope this logic to the homepage. This is an implementation recipe requiring installed dependencies and the specified DOM, not a standalone executable file.

```js
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });
const media = gsap.matchMedia();
media.add('(min-width: 501px) and (prefers-reduced-motion: no-preference)', () => {
  const intro = document.querySelector('[data-portrait-story]');
  const about = document.querySelector('#about');
  const pin = document.querySelector('.portrait-pin');
  const card = document.querySelector('.portrait-card');
  if (!intro || !about || !pin || !card) return;
  const displacement = () => Math.min(420, window.innerWidth * 0.25);
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: intro,
      start: 'top top',
      // Reference end is 5750px; adapt to Saif's actual service height.
      end: () => Math.max(1, about.getBoundingClientRect().top + window.scrollY - intro.getBoundingClientRect().top - window.scrollY),
      scrub: 1.2,
      pin,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  });
  timeline
    .to(card, { x: displacement, y: 70, rotationZ: 8, rotationY: 0, scale: 1, duration: .2, ease: 'power1.inOut' })
    .to(card, { rotationY: 180, rotationZ: 0, duration: .45, ease: 'power2.inOut' })
    .to(card, { scale: 1.18, duration: 1.2, ease: 'power1.inOut' })
    .to(card, { scale: 1, duration: .4, ease: 'power1.inOut' })
    .to(card, { x: displacement, y: 70, rotationY: 180, duration: .8, ease: 'none' })
    .to(card, { rotationY: 360, duration: .3, ease: 'power2.inOut' });
  gsap.fromTo(pin, { autoAlpha: 1 }, {
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: { trigger: about, start: 'top top', end: '+=20%', scrub: true }
  });
  return () => { /* gsap.matchMedia reverts context animations and triggers */ };
});
```

For a literal original content length reproduction, retain `end: '+=5750'`. For Saif's real content, use a relative end and calibrate the phase landmarks against each service card. At intermediate tablet widths, verify that the card does not cover the service column; reduce travel if needed. Keep that adaptation explicitly separate from reference desktop values.

Do not apply clipping, a transform, or layout containment to an ancestor that breaks fixed pinning or flattens 3D faces. Do not let Elementor's entrance effects and GSAP write transforms to the same card. Refresh ScrollTrigger after font readiness, image size stabilization, and layout changing operations. On return from browser history, reconstruct the current state without replaying from the hero.

## 8. Services section

Intro label: `/ Services, Skills, Abilities` in handwriting.

Heading: `What I do best?` with `best?` in accent color.

Saif's body text: “I help ecommerce brands look better, sell better, and grow through Shopify design, creative strategy, and performance marketing.”

Desktop uses a left service card column and an open right column for the traveling portrait/showreel. Nine cards form a long vertical sequence. Reference cards use sticky positioning with an 80 px offset and margins that create a layered progression. Each card has a small handwritten descriptor, numbered heading, compact description, and a muted list.

### Service content

| Number | Title | Eyebrow | Description | Capability list |
| --- | --- | --- | --- | --- |
| 01 | Shopify Design & Development | Built to sell | I build Shopify stores that make products easy to explore and buying simple. | Custom sections; theme customization; mobile experience; product pages; Storefront API |
| 02 | Ecommerce Growth Strategy | Clear direction | I connect the offer, customer journey, creative, and store experience around one growth goal. | Offer positioning; funnel planning; customer research; creative testing; growth priorities |
| 03 | UI/UX & Conversion Design | Customer first | I simplify the journey from the first visit to checkout through clearer layouts and stronger buying cues. | Landing pages; PDP and PLP design; navigation; checkout UX; CRO audits |
| 04 | Graphic Design & Branding | Brand defining | I create visual identities and campaign designs that help brands look consistent and recognizable. | Logos; visual identity; typography; packaging concepts; social design |
| 05 | AI Creatives | Built to convert | I produce fully-edited AI video and image ads — research-backed angles, real-looking creatives, and monthly variations ready for Meta. | AI UGC video; static ads; product visuals; angle research; ad variations; creative testing |
| 06 | AI Video Ads | No creator bottleneck | I generate and edit branded AI video ads so you can test faster, recreate winners, and scale spend without waiting on creators. | Premium AI video; UGC-style ads; brand asset videos; hooks & captions; platform-ready edits; iteration from data |
| 07 | Performance Marketing | Data informed | I plan and optimize paid campaigns around the offer, creative, and customer journey. | Meta Ads; TikTok Ads; Google Ads; creative testing; event tracking |
| 08 | WordPress & Landing Pages | Fast and focused | I build responsive websites and landing pages for services, portfolios, and online stores. | WordPress; Elementor; WooCommerce; responsive layouts; performance |
| 09 | AI Assisted Workflows | Smarter execution | I use AI tools to speed up research, creative production, and website development. | ChatGPT; Claude; Gemini; Cursor; prototyping; workflow design |

These are drafted service descriptions based on Saif's stated skills. Review them before publishing.

### Card interaction

Measured first card resting transform includes `translateX(5px) rotate(-1deg)` at scale 1. Measured hover transform is scale 1.03, translate X 0, rotation 0. **Target transition:** 350 ms ease. Use alternating modest resting rotations only where a visual comparison confirms the original; do not randomly tilt all cards dramatically.

Keep text readable throughout overlap. A card must never become inaccessible below another sticky card. Use a nonsticky mobile layout. If builder wrappers prevent stacking, implement this region in one custom HTML/template component instead of patching multiple incompatible sticky widgets.

## 9. About, proof, and portfolio gateway

### About

Heading: `Creative at the Core`, with `Creative` accented.

Subtitle: “Designer. Strategist. Builder. Problem solver.”

Draft body: “I work at the intersection of ecommerce design, buyer behavior, and creative strategy. From Shopify stores to campaign visuals, I focus on making the customer journey clearer and helping brands present their products with confidence.”

Desktop: approximately half width copy on the left and a 270 × 380 px rounded portrait on the right. This About portrait can be a separate static image beneath the fading pinned portrait; ensure the transition does not visibly show two floating portraits at once.

Buttons in order: `Schedule a call` as an accent pill; `Copy email` as an outlined pill; `Download CV` as an outlined pill. Button targets are real booking URL, user initiated clipboard copy, and Saif's latest downloadable CV. Hide booking and CV actions until assets exist rather than linking to `#`.

Below: a small proof line if verified, followed by compact rounded social icon buttons. Use actual Saif destinations. Instagram is known; LinkedIn, YouTube, and other profiles need supplied URLs. Do not fabricate handles.

### Marquee

Reference is a leftward line of proof statements separated by slash marks, duplicated for a seamless 50 second loop with masked edges. Saif's safe initial content is “Shopify Design / Ecommerce Strategy / Creative Direction / CRO / Meta Ads / AI Creatives”. Replace capabilities with numeric proof only when verified.

Use one accessible sentence and mark the visual duplicate `aria-hidden`. Pause on focus, hover, reduced motion, and when offscreen. Prevent a seam by matching the repeated group's width exactly.

### Credentials table

Reference shows numbered awards in four columns: index, award title, issuing organization, date, with fine dividers. Keep that geometry. Saif's table should use real certifications or verifiable project milestones. Do not add Awwwards, nominees, or “site of the day” awards that belong to the reference owner.

If no credentials are supplied, use a staging placeholder data array with `publish: false`, or replace the table with verified selected project credits using the same columns. Do not display a large empty table on the public site.

### Positioning statement

A large, spacious typographic block, approximately 44 to 56 px desktop **target**, with constrained line length. Draft: “I help ecommerce brands connect better design with clearer messaging and a smoother path to purchase.” Reveal gently as the block enters view. The screenshot calibration for this region remains to be completed during implementation.

### Complete portfolio gateway

Use a spacious media led gateway, the smaller lead in “Explore my”, the large “Complete Portfolio” heading, current update metadata, and project previews. The entire main CTA links to `/portfolio/`. Preserve the generous transition into work experience. The exact project's collage placement and its hover behavior were not fully measured; calibrate against the live reference rather than inventing an elaborate interaction.

## 10. Work experience

Use stacked full width rows with fine dividing lines. Each row pairs a large role with date range and organization metadata. Saif's genuine roles and dates must be supplied. Founder & Growth Strategist at TheClickUp is a known role; do not infer the start year. Project work is not automatically employment.

Reference reveal settings are **measured**:

1. Each row and separator starts at opacity 0 and blur 8 px.
2. Scroll trigger starts when row top reaches 80% of viewport height.
3. Reveal completes when row bottom reaches 70% of viewport height.
4. Opacity becomes 1 and blur becomes 0.
5. Ease is `none`; scrub is true.

The effect reveals rows while entering view. Despite an inline source comment mentioning fade out, the inspected tween only goes from hidden/blurred to visible/sharp. Do not invent an additional fade out requirement.

Reduced motion shows sharp, fully visible rows. CSS must keep rows visible if JavaScript is unavailable. Attach initial hidden state only after animation setup succeeds.

## 11. Reviews

Heading: `What people say`, with `people` accented; handwritten eyebrow above and a short introduction below.

Desktop reference has three columns of pale cards with approximately 10 px gutters. Cards contain accent stars, review copy, divider, reviewer name, service, and date. Round corners approximately 14 px **target**. Padding around 28 px **target**. Content creates varying heights.

Use only real Saif reviews with permission to display names. Do not rewrite the original testimonials by substituting Saif's name. If only three reviews exist, show three cards without fabricating a full wall. Reference has a long grid and bottom fade; adapt section length to actual content.

For truncated reviews, make `Read more` a real button opening the complete review inline or in an accessible modal. The original shows truncation marks, but a full review expansion was not verified. This expansion is a recommended completion behavior, not an observed exact reference interaction.

Phone: one column. Tablet: two columns where readable. Do not turn the desktop reviews into a carousel unless the user requests that variation.

## 12. FAQ accordion

Eight horizontal rounded rows mirror the reference. White or very pale surfaces, radius 20 px **measured**, subtle border, question on the left, plus icon on the right. Closed row height approximately 54 px **target**, with about 10 px vertical gaps.

Saif specific questions:

1. What services do you offer?
2. Can you work on an existing Shopify store?
3. Do you work independently or with a team?
4. How do you approach design and conversion improvements?
5. How do you handle feedback and revisions?
6. Can you support both design and marketing?
7. What do you need to start a project?
8. Can agencies hire you as a collaborator?

Use concise truthful answers. The reference's recruiter and agency career question is optional; it should not appear just because the reference includes it.

**Target motion:** 250 to 300 ms height/opacity transition, plus rotating to a close indicator. Only one row open by default is a recommended implementation choice, not a verified reference constraint. Buttons must support Enter and Space, have `aria-expanded`, and reference their panels with `aria-controls`. Reduced motion opens immediately. Do not animate to arbitrary fixed panel heights that truncate longer answers.

## 13. Contact section

Eyebrow: `/ Contact Information`.

Large heading: `Let's get started`, with `started` in accent color.

Desktop form on the left and a large portrait panel on the right. At the inspected viewport, the image panel is approximately 527 px wide and begins around the same Y as the form subheading. Image panel corners approximately 20 to 24 px **target**.

Form title: `How can I help?`.

Supporting text: “I would love to hear more about your project or company.”

### Form schema

| Field | Type | Required |
| --- | --- | --- |
| Your full name | Text, autocomplete name | Yes |
| Your role | Text | Yes |
| Your email address | Email, autocomplete email | Yes |
| Your status | Radio: I have a project / I am a recruiter | Yes |
| More info | Textarea | Yes |

Reference inputs use understated bottom borders and transparent backgrounds rather than large boxed fields. Keep labels visible. Placeholder copy must not replace labels. Minimum control hit height 44 px. Focus uses an accent border with a visible outline. The submit button is a wide accent pill or rounded bar matching the reference composition.

Portrait panel text near the bottom: “Share your goal, a link, budget range, and preferred start date. I'll reply with the next step.” Use a soft dark lower image gradient for legibility. Show `Saif Ali` as the signature. Do not copy the reference's top rated badge unless Saif has a verified equivalent.

### Submission states

1. Idle with visible labels and usable fields.
2. Invalid fields identified inline and associated with their inputs.
3. Submitting: button disabled, clear progress label, values retained.
4. Success only after an actual server acknowledgement.
5. Failure: friendly retry message, all entered text retained, email fallback available.

Use a real WordPress form delivery mechanism with server validation and configured mail delivery. A frontend toast alone is not a submitted lead. Add ordinary spam protection without introducing an unnecessary visual challenge into the initial design. Never expose SMTP secrets in the page bundle.

## 14. Floating navigation and menu

### Homepage desktop

Black capsule centered near the viewport bottom, approximately 590 px wide and 51 px tall at the baseline. This is a **visual measurement target**. Offset is 24 px plus device safe area, verified in source rules. Order: Home icon, Skills, About, Portfolio with arrow, Reviews, Contact me.

Contact is a bright accent pill inset in the black capsule. On hover, the reference shows a light pill with alternate text `Hello, it's me`. Other links use two stacked text layers, implying a vertical label swap. **Target transition:** 200 to 300 ms. Make hover and keyboard focus produce equivalent states. A small pointer glow was visible; its exact timing and implementation were not measured. Treat any custom cursor glow as optional and decorative. Preserve the native cursor and disable glow on touch.

Current section accent highlighting can use IntersectionObserver. Keep route state and section state distinct. Do not mark Portfolio active merely because the user opened an FAQ near it; calibrate the active section logic independently.

Use `bottom: calc(24px + env(safe-area-inset-bottom))`. Reserve at least 88 px at page end. Navigation z index should exceed the pinned portrait and content, while loader and dialogs sit above navigation.

### Portfolio desktop

Same capsule geometry. Order: Home, All, Web & UI/UX, Graphic Design, AI Creatives. These category items trigger the same gallery filter state as the inline filter controls.

### Mobile menu

The source hides desktop bottom navigation at width 641 px and below. A separate mobile identity/menu header and full screen off canvas structure exist. Use a compact header with `Saif Ali ©` and a `Menu` button, then a full screen menu with oversized links and contact details. Exact live phone appearance and opening animation were not observed; calibrate during build.

**Target menu motion:** opacity fade and 20 px vertical reveal over 350 ms, link stagger 60 ms. Trap focus while open, close on Escape, restore focus to Menu, and lock background scrolling. Homepage menu links close the overlay and move to their sections. Portfolio category controls filter and close the overlay.

Do not squeeze the full six item desktop capsule onto a 375 px screen.

## 15. Portfolio gallery

The portfolio page is a separate route, with the same gray background. Centered heading region starts around y=100 to 245 at desktop baseline. A small gray pill shows last updated month/year, followed by `Portfolio Work Samples`, with `Work Samples` accented, then one supporting sentence.

Draft sentence: “Selected work across ecommerce websites, brand identities, campaign design, and creative content.”

Inline category tabs are centered around y=345, with a thin full width divider below. Active category uses an accent top indicator and colored label. First project row begins around y=445. Desktop outer cards are approximately 520 px wide, with about 40 px between columns; inset media uses generous padding near 50 px. These are screenshot targets requiring final measurement.

### Category and state behavior

1. All shows the full project collection.
2. Web & UI/UX shows website and interface projects.
3. Graphic Design shows branding, campaign, and graphic projects.
4. AI Creatives shows branded AI video and static ad work.
5. Inline tabs and floating navigation always share one filter state.
6. Selection updates the category URL hash without a full page reload.
7. Loading a direct hash initializes the correct category after data is ready.
8. Browser back and forward restore the previous filter state.
9. Active controls expose their selected state accessibly.
10. Empty categories show a small intentional empty message, not fake projects.

**Target filter transition:** fade exiting cards over 150 ms, update layout, then reveal incoming cards over 250 ms with 30 to 50 ms stagger. Exact reference filter timing was not measured. Prefer stable CSS grid or a measured layout transition. Remove hidden cards from keyboard navigation. Refresh any scroll effects after the grid height changes.

### Card behavior

The reference gallery is strongly media led; many cards are image previews without heavy descriptions. Use a pale rounded outer tile and a rounded inset thumbnail. Crop based on each project's content, not one indiscriminate cover crop. On hover, modest image scale of 1.02 over 300 ms is a **target** to verify visually, not an observed exact effect.

Clicking an image should open a large accessible media viewer or a supplied project page. The reference's actual image viewer behavior was not inspected. For Saif, an accessible lightbox is the recommended default: Escape closes, arrows navigate, focus stays within it, image captions identify the project, and focus returns to the original tile. Videos use a poster and load a player only after intent, rather than eagerly loading many embedded players.

### Initial project candidates

| Project | Category | Publication note |
| --- | --- | --- |
| Rivori Matcha | Graphic Design | Preserve the locked wordmark and smiling whisk haired mascot; use approved presentation assets |
| OnePlace KSA | Web & UI/UX | Label as design concept or work in progress until delivery; publish client work only when cleared |
| BOTZEN newsletter | Graphic Design or Web & UI/UX | Use the final approved version and accurate contribution |
| Ilal Haider portfolio | Web & UI/UX | Verify final name, live status, and supplied assets |
| Selected campaign creatives | Graphic Design | Use Saif's own assets and accurately label concept work |

These projects are candidates from known context. No project asset files were read in this task. The builder must request or resolve the final assets before showing them as completed public work.

### Data contract

```ts
type PortfolioProject = {
  id: string;
  title: string;
  category: 'web-ui-ux' | 'graphic-design' | 'ai-creatives';
  thumbnail: string;
  thumbnailAlt: string;
  media: { type: 'image' | 'video'; src: string; poster?: string }[];
  description?: string;
  contribution?: string;
  liveUrl?: string;
  status: 'published' | 'concept' | 'in-progress';
  approvedForDisplay: boolean;
};
```

## 16. Shared footer

Reuse the same footer on both routes. Include Saif's name, then the very large leftward repeating `Let's work together ✱` marquee. Reference font size is 64 px, letter spacing around -1 px, line height 3, and loop duration 50 seconds. Keep duplicates hidden from assistive technology.

Below is an `Ask AI about me` area with four provider logo tiles in the reference. For Saif, implement only if real public profile or evaluation destinations exist. Never reuse Nikola's shared AI chats, and do not describe AI output as independent verification. Until valid links are supplied, leave this component disabled in content configuration.

Show clickable email and optional phone. Only include a phone number supplied for this portfolio. Bottom row shows current year on one side and `All rights reserved.` on the other. Add a small dark rounded back to top button near the lower right, visible after scrolling. Its action honors reduced motion.

## 17. Complete motion inventory

| Interaction | Evidence | Implementation requirement |
| --- | --- | --- |
| Homepage greeting loader | Source inspected | Black full screen, white greeting letters rising, quick word changes, fade out |
| Portfolio loader | Source inspected | Two line Welcome greeting, letter stagger, 3 second screen time then fade |
| Background video | Rendered and source inspected | White abstract geometry, muted loop, poster fallback |
| Portrait pin and movement | Exact inline settings inspected | Six phase scrubbed timeline with flips and scaling |
| Portrait end fade | Source inspected | Fade across 20% viewport height at About top |
| Smooth scrolling | Configuration inspected | Lenis duration 1.2, lerp .1, smooth wheel enabled |
| Section intro reveals | Attributes inspected | FadeInUp 1 second with 0/.1/.2 second stagger |
| Service card hover | Inline transforms inspected | Tilt straightens and scales to 1.03 |
| Service card sticky | Inline configuration inspected | 80 px sticky offset, long service progression |
| Capability marquee | Source inspected | 50 second leftward seamless repeat and edge mask |
| Experience reveal | Source inspected | Blur 8 to 0, opacity 0 to 1, scrub between 80% and 70% viewport |
| Nav label swap | Duplicate labels and hover appearance observed | Match vertical label swap; timing needs calibration |
| Contact nav alternate text | Hover observed | Contact me changes to Hello, it's me with light pill |
| Pointer glow | Visual observed | Optional subtle decorative effect; exact source not measured |
| Portfolio filter | Clicked and rendered | Shared filter state, category hash, animated layout |
| Gallery hover / viewer | Not fully inspected | Recommended modest hover and accessible media viewer |
| FAQ | Control inspected | Expandable rounded rows; exact transition requires calibration |
| Email copy toast | Source inspected | User initiated copy, 200 ms fade, 1600 ms dwell, 250 ms cleanup |
| Footer marquee | Source inspected | 50 second leftward repeat |
| Mobile menu | Responsive structure inspected | Separate mobile menu; exact phone geometry needs calibration |
| Form submit | Not submitted | Implement real backend and all states; do not infer successful delivery |

### Homepage loader details

Measured source starts with `Hello`. Each letter begins at opacity 0 and translate Y 20 px, animates for 250 ms using `cubic-bezier(.4,0,.2,1)`, staggered by 100 ms. After 1500 ms it cycles ten greetings at 140 ms intervals, then fades the overlay over 500 ms.

Saif's default uses an English only greeting sequence because this portfolio is requested in English. For literal reference motion comparison, the original sequence is Hello, Ciao, Hola, Salut, Chinese greeting, Russian greeting, Hallo, Olá, Selam, Arabic greeting, Dia Dhuit. Do not falsely describe an English only variant as the original wording.

Keep a maximum safety timeout so a missing video cannot strand visitors on a black screen. The site must render without JavaScript, and back navigation should not replay a long blocking loader unnecessarily.

Portfolio source uses `Welcome` and `to my world!`, 40 ms per character, and 3000 ms screen time. Both loaders should be immediate or very short under reduced motion. No fake percentage counter is part of the reference.

### Smooth scrolling integration

Use one Lenis instance and one request animation frame driver. If GSAP drives frames, disable any second Lenis auto frame loop. Synchronize ScrollTrigger with Lenis updates. Keep native touch scrolling unless visual testing justifies another approach. Menu/dialog scroll areas must not be captured by page smooth scrolling.

The inspected reference exposes duration 1.2 and lerp .1 simultaneously; actual precedence depends on the installed Lenis implementation. Match the observed feel and verify the chosen version's behavior rather than assuming both settings operate independently. No scroll hijacking or forced section snapping.

## 18. Responsive specification

### Desktop, 1000 px and above

Split hero names and central portrait. Left service cards plus right portrait stage. Two column About/contact. Three column reviews. Two column portfolio media. Full floating bottom capsule. Maximum readable content width preserved at larger sizes.

### Tablet, 642 to 999 px

The reference has a separate medium hero layout hidden at desktop widths, so do not simply shrink the desktop names until they overlap. Use a centered name stack or compact balanced hero with the portrait. Keep the desktop capsule where its labels fit. Service cards can keep two columns only while the pinned portrait has adequate space; otherwise use a stacked adaptation and disable the traveling pin. This is a recommended collision prevention adaptation.

### Phone, 641 px and below

Separate mobile header and menu. Stacked hero with portrait and name lines. Single column cards, About, reviews, contact, and gallery. Button row wraps cleanly. Form stays before portrait panel in reading order. Category controls wrap or scroll horizontally with visible focus. Prevent body horizontal overflow.

Below 501 px, the source does not activate the portrait's scrubbed pin timeline. Use a static portrait. On wider phones where pinning is technically permitted by the original breakpoint, disable it if the composition collides; visual readability takes priority over preserving an unsuitable threshold.

### Required review widths

375, 390, 430, 641, 642, 768, 999, 1000, 1363, 1440, and 1920 px. Review one landscape phone width too. These are test targets, not claims that the reference was observed at all these sizes.

## 19. Astra and builder implementation

Use an Astra child theme or a small site specific plugin for permanent custom assets. Do not modify the parent theme. Choose one content builder; Elementor is the practical mapping for Saif's known workflow, but Gutenberg/Spectra or custom templates can implement the same design.

1. Create Homepage and Portfolio pages.
2. Set full width layout and remove the sidebar.
3. Disable the ordinary theme header, title region, and footer on these two pages so they do not duplicate the custom design.
4. Keep the custom mobile header, floating nav, and footer under one implementation owner.
5. Register local fonts and global design tokens.
6. Build semantic section containers with the required IDs.
7. Implement portrait story in a custom HTML/template component with its own CSS and JS.
8. Build service and testimonial repeaters from structured content.
9. Implement portfolio filtering with shared state and hash routing.
10. Connect the form to real delivery, then add remaining interactions.

Astra's official page layout and header/footer disabling documentation supports these shell choices. Exact labels depend on the installed version. Do not purchase Astra Pro solely for the portrait animation; the animation belongs to custom code.

### Responsibility mapping

| Feature | Builder/native layout | Custom CSS | Custom JS |
| --- | --- | --- | --- |
| Containers and text | Yes | Typography and spacing | No |
| Background video | Video element | Fade and positioning | Visibility handling |
| Portrait flip and pin | HTML wrapper | 3D faces | GSAP + ScrollTrigger |
| Sticky service cards | Layout widgets | Sticky and transforms | Only if needed |
| Floating nav | Custom menu | Capsule and hover layers | Active section and anchors |
| Experience reveals | Repeated rows | Fallback visibility | ScrollTrigger |
| Marquees | Duplicated spans | Keyframes and masks | Pause visibility if needed |
| Portfolio gallery | Grid/repeater | Media surfaces | Filters, hash, viewer |
| FAQ | Accordion or semantic buttons | Rows and focus | Open state |
| Form | Form component/backend | Reference field styling | Client validation and status |
| Email copy | Button | Toast | Clipboard on click |
| Mobile menu | Overlay component | Layout | Focus, scroll lock, close behavior |

### Class contract

Use a single `.saif-portfolio` root. Suggested classes: `.hero`, `.hero-name`, `.hero-background`, `.portrait-pin`, `.portrait-card`, `.portrait-face`, `.portrait-front`, `.portrait-back`, `.services-story`, `.service-card`, `.about-section`, `.capability-marquee`, `.proof-table`, `.portfolio-gateway`, `.experience-row`, `.review-grid`, `.review-card`, `.faq-item`, `.contact-form`, `.contact-portrait`, `.floating-nav`, `.mobile-menu`, `.portfolio-filters`, `.project-grid`, `.project-card`, `.collaboration-marquee`.

Keep scroll measurement wrappers free from accidental builder overflow and transforms. Keep local component state separate from global page animation initialization. Initialize once, clean up on route changes, and avoid duplicate scripts from both the theme and builder widgets.

## 20. Assets and handover requirements

| Asset | Needed specification |
| --- | --- |
| Hero portrait | Saif, vertical crop, at least 810 × 1140 px for the 270 × 380 component |
| About portrait | Same or coordinated image, approved crop |
| Contact portrait | Wider high quality portrait with room for lower text overlay |
| Portrait back showreel | Short muted MP4/WebM, vertical ratio close to 27:38, static poster |
| Abstract background | White geometric loop plus compressed static poster |
| Fonts | Clash Display, General Sans, Gloria Hallelujah local approved font files |
| Project thumbnails | Usually at least 1200 px wide, dimensions recorded |
| Full project images | Original clean presentation exports, supplied by Saif |
| Project videos | Posters and deferred video source/player links |
| CV | Latest Saif Ali PDF, readable and downloadable |
| Booking destination | Real supplied calendar or contact URL |
| Reviews | Exact approved quote, name, service, date, optional rating |
| Experience | Role, organization, accurate dates, evidence where relevant |
| Credentials | Verified names and issuing organizations |
| Contact | Confirmed public email and optional phone |

No original site asset is automatically bundled by this specification. Keep reference URLs as inspection references; do not hotlink production media to the reference owner's server. Use original or appropriately licensed assets. Do not download all embedded videos just to create a placeholder gallery.

## 21. Accessibility, performance, and SEO

1. Use one semantic H1 per route. The reference uses multiple H1s; Saif's page can preserve the visual split name while using one accessible heading.
2. Maintain visible keyboard focus on nav, tabs, buttons, cards, form controls, and dialogs.
3. Support reduced motion across pinning, loader, smooth scrolling, marquees, blur, and menu animations.
4. Decorative video is hidden from assistive technology; meaningful project media has proper descriptions.
5. Keep real text in the DOM, including animated headings. No canvas only biography.
6. Lazy load lower images and videos, but eagerly load the actual hero portrait with explicit dimensions.
7. Use posters for video embeds and avoid loading fourteen players on first paint.
8. Preload only critical font weights, use font display swap, and reserve image sizes.
9. Keep transform/opacity animations as the default. Limit blur to the experience rows and remove it for constrained devices if performance suffers.
10. Use a Person schema for Saif and accurate project metadata. Do not carry over the original person's schema or social profiles.
11. Homepage title target: `Saif Ali | Shopify Designer & Ecommerce Growth Strategist`.
12. Portfolio title target: `Selected Work | Saif Ali`.
13. Use canonical URLs for Saif's final domain and a real social preview image.

Performance targets to measure during build: LCP within 2.5 seconds, CLS below .1, INP within 200 ms under realistic conditions. These are goals, not verified scores. The loader must not conceal a slow initial render indefinitely.

## 22. Build sequence and acceptance

### Build order

1. Establish desktop static geometry with final fonts and temporary properly sized media.
2. Complete the floating navigation and route structure.
3. Build service story and portrait timeline.
4. Build About, proof, portfolio gateway, experience, reviews, FAQ, and contact.
5. Build portfolio categories, gallery, and viewer.
6. Add loader, marquees, email copy, and remaining hover states.
7. Complete tablet/phone layouts and reduced motion.
8. Replace all staging data with approved Saif assets.
9. Verify delivery, links, visual matching, and accessibility.

### Visual acceptance

At the same desktop viewport, compare hero, first service, middle service with back video, final service with returning portrait, About, credentials, portfolio gateway, experience, reviews, FAQ, contact, footer, and portfolio page. Overlay implementation and reference captures where possible. Check text baselines, container alignment, portrait travel, corner radii, background fade, and bottom nav position before polishing minor hover details.

Match structural landmarks rather than imposing a fixed full page height on different content. Capture portrait timeline near 0%, 6%, 19%, 55%, 67%, 91%, and 100% progress. Scroll both downward and upward. Inspect direct anchor navigation and a mid page refresh.

### Functional acceptance

1. All homepage anchors reach the right section.
2. Portrait travels beside cards, does not cover copy, and fades at About.
3. Face flips show the correct image/video and never mirrored text.
4. Service cards stay readable and clickable.
5. Navigation remains visible and never blocks the last actionable content.
6. Both portfolio filter interfaces stay synchronized.
7. Direct category hash, browser back, and forward work.
8. Gallery lightbox/player can be fully operated by keyboard.
9. FAQ controls announce their current state.
10. Copy email works or provides a mailto fallback.
11. CV and booking buttons have real destinations or are hidden.
12. Form validates, actually delivers, and preserves content after failure.
13. Mobile menu closes, restores focus, and unlocks page scrolling.
14. Reduced motion and JavaScript failure leave usable content.
15. No reference owner identity, testimonials, phone, email, or structured data remains.
16. No horizontal overflow at the review widths.

## 23. Ready to paste implementation brief

Build my personal portfolio for Saif Ali using this design.md as the implementation contract. Recreate the layout and motion language of nikolaradeski.com closely: light gray background, white geometric background video, split name hero with a 270 × 380 portrait, pinned moving 3D portrait card with front photo and back showreel, long numbered service cards, About section, proof table, portfolio gateway, blur reveal experience rows, review grid, rounded FAQs, two column contact form, black floating bottom navigation, and a separate filterable portfolio page. Use Clash Display, General Sans, and Gloria Hallelujah. Use the reference orange accent by default. Implement the specified GSAP ScrollTrigger phases, 50 second marquees, smooth scrolling, loader, label swaps, email copy feedback, responsive menu, and reduced motion behavior. Use my real identity and approved work. Keep uncertain reference effects marked for visual calibration. Do not substitute a generic template, invent awards or reviews, or treat a frontend success message as actual form delivery. Complete the static geometry first, then motion and functional verification.

## 24. Sources and inspection limits

1. Reference homepage: https://nikolaradeski.com/ . Opened through public web retrieval and inspected in the live browser.
2. Reference portfolio: https://nikolaradeski.com/portfolio/ . Opened via its visible navigation; category filter clicked.
3. Reference DOM rendered styles, responsive rules, font registrations, animation attributes, and inline public configuration. These supplied the measured values in this document.
4. Astra layout guidance: https://wpastra.com/docs/page-layout-settings-guide/ . Supports full width layout choices.
5. Astra header/footer guidance: https://wpastra.com/docs/disable-header-footer-landing-page-post/ . Supports removal of the normal theme shell on custom pages.

Limits: no live mobile viewport inspection, no form submission, no end to end gallery viewer inspection, and no complete measurement of every portfolio gateway or award table animation. Builder platform wording remains an assumption. Exact visual equivalence requires implementation screenshots, final assets, and side by side calibration. The specification distinguishes exact observed motion settings from recommended completion behavior throughout.
