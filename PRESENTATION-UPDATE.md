# Portfolio framing, brand color interaction and journal layout

October 30, 2026.

- Existing project artwork and case-study content are preserved. No new artwork is generated.
- Homepage arc cards, the desktop gallery and portfolio index use `object-fit: contain` with restrained neutral frames. The existing arc motion remains, while the artwork is no longer scaled to fill and crop the portrait card. The homepage card action reads “View project”.
- Logo cards gain a native keyboard-accessible button with `aria-pressed`. Click, tap, Enter or Space toggles monochrome/color variants. Front and back identities retain their own palette. Mobile shows the twelve unique identities in six compact paired cards, instead of hiding the entire strip.
- Color assets are derived from the existing outlined SVG paths with the corresponding project palette; they are monochrome brand-color variants, not replacement original master logo files. The AI categories are labels rather than client brands.
- The blog index has a typographic journal masthead, a featured story and secondary stories. Article pages use a full-width masthead, complete-artwork cover, reading column, contents navigation and existing reading-progress behavior.
- All three article bodies, canonical URLs, JSON-LD and contents anchor targets are preserved. Blog layouts are scoped away from case-study pages. Existing publication dates and reading times are retained; dates render in a readable format.
- `public/saif-premium.css` and `public/saif-premium.js` are included only by the homepage, portfolio index, blog index and three article pages. This small separate layer follows the existing release styles.

Validation: `python scripts/verify-premium-presentation.py` checks article text/schema/canonical preservation, anchors and all twenty color SVG files. Browser checks cover desktop color toggling, Enter/tap reset, the 390px mobile logo layout, uncropped mobile portfolio framing, mobile journal layout and article contents navigation. No performance-score claim is made by these presentation checks.
