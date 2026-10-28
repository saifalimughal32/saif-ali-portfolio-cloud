import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Luma Brand Identity: Protein Soft Serve Designed to Indulge | Saif Ali",
  description:
    "Inside the Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, packaging, signage and campaigns.",
  alternates: {
    canonical: "https://www.saifali.site/blog/luma-brand-identity",
  },
  openGraph: {
    title: "Luma Brand Identity: Protein Soft Serve Designed to Indulge | Saif Ali",
    description:
      "Inside the Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, packaging, signage and campaigns.",
    url: "/blog/luma-brand-identity",
    type: "article",
    images: [
      {
        url: "/projects/luma.jpg",
        width: 1600,
        height: 991,
        alt: "Luma protein soft serve — two branded cups held against a summer sky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luma Brand Identity: Protein Soft Serve Designed to Indulge | Saif Ali",
    description:
      "Inside the Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, packaging, signage and campaigns.",
    images: ["/projects/luma.jpg"],
  },
};

const serifItalic = {
  fontFamily: '"Instrument Serif", "Noto Serif", Georgia, serif',
  fontStyle: "italic" as const,
  fontWeight: 400,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://www.saifali.site/blog/luma-brand-identity#article",
  headline: "Luma Brand Identity: Protein Soft Serve Designed to Indulge",
  description:
    "A walkthrough of the Luma brand identity by whyitworks — how a protein soft serve brand was designed around indulgence instead of diet: the wordmark, the flavour-led colour system, Helvetica typography, packaging, signage, and campaign design.",
  url: "https://www.saifali.site/blog/luma-brand-identity",
  datePublished: "2026-10-28",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design for food and DTC brands",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/blog/luma-brand-identity#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.saifali.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Luma Brand Identity",
    },
  ],
};

/** Rendered visibly below and mirrored in the FAQPage JSON-LD that follows */
const blogFaqs: { question: string; answer: string }[] = [
  {
    question: "Should a healthy product look healthy?",
    answer:
      "Not necessarily — it should look like what it promises. Luma promises a treat, so the brand wears treat colours, treat typography, and treat photography; the protein is carried in the copy, not in a clinical design language. When a better-for-you product dresses like medicine, shoppers expect a compromise on taste before they have taken a single bite.",
  },
  {
    question: "What does a full brand identity include?",
    answer:
      "For Luma it meant the whole system, not just a logo: the primary wordmark with construction, clear-space, and misuse rules, a five-colour system with assigned roles, a typography system, packaging for cups and take-home pints, staff uniforms, exterior signage, café posters, outdoor and street campaigns, delivery cartons, and social templates. A logo is one asset; an identity is everything staying recognisably the same brand.",
  },
  {
    question: "Why do small brands need logo rules and clear space?",
    answer:
      "Because the moment a brand leaves your laptop, other people handle it — printers, sign makers, shop staff, marketplace designers, the friend who makes the Instagram posts. Rules written once, while the brand is still yours alone, are what keep the logo the same logo on every one of those surfaces.",
  },
  {
    question: "How do you choose colours for a food brand?",
    answer:
      "Start from the product, not from taste in colours. Luma\u2019s palette is its flavours and its sky: Sky Blue and Vanilla White lead, Orange Cream and Lavender Mist add variety, Choco Brown gives contrast. Give every colour a job, then test the set on real packaging at real distance. If the palette still reads as the brand with the logo covered, it is doing brand work.",
  },
  {
    question: "Who designed the Luma identity?",
    answer:
      "Luma was designed by whyitworks, Saif Ali\u2019s ecommerce marketing agency — the same studio behind the Habibi fast food identity in the portfolio. If you are building a food or DTC brand and want an identity designed as a system rather than a single logo, the starting point is a fit call.",
  },
];

const blogFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/blog/luma-brand-identity#faq",
  mainEntity: blogFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

const h2Class =
  "font-general mt-14 md:mt-20 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]";
const bodyClass =
  "mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";
const leadClass = "font-medium text-[var(--text)]";

export default function BlogLumaBrandIdentityPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl">
        {/* Breadcrumb / back — mirrors the sibling pages' pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Blog
          </p>
          <Link
            href="/"
            className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
          >
            Back
          </Link>
        </div>

        {/* Hero */}
        <section className="mt-6">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-[var(--text-secondary)]"
          >
            <Link
              href="/"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              Home
            </Link>
            <span aria-hidden> / </span>
            <span>Blog</span>
            <span aria-hidden> / </span>
            <span>Luma Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Luma Brand Identity: Protein Soft Serve,{" "}
            <em className="not-italic accent" style={serifItalic}>
              Designed to Indulge
            </em>
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · Published 28 October 2026
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className={leadClass}>
              Most protein products apologise for existing. Luma does the
              opposite.
            </span>
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Luma is a protein soft serve brand, and this is the full identity
            built for it at whyitworks: logo, colour, typography, packaging,
            signage, and campaigns. This article walks through the thinking
            behind the work — why a high-protein dessert was deliberately
            designed to look like a treat first and a health product second,
            and what any food or DTC founder can take from that choice.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            The same honest note as my{" "}
            <Link
              href="/blog/shopify-conversion-rate-optimization"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              Shopify conversion guide
            </Link>
            : this is a design case study, not a results claim. There are no
            sales numbers attached to it, and I would rather show you the
            work and the reasoning than invent outcomes. The full gallery
            lives in the{" "}
            <Link
              href="/portfolio"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              portfolio
            </Link>
            .
          </p>
          <img
            src="/projects/luma/campaign-hero.jpg"
            alt="Luma campaign hero — two striped Luma protein soft serve cups held up against a summer sky"
            className="mt-8 w-full rounded-3xl"
          />
        </section>

        {/* The problem */}
        <section id="the-problem">
          <h2 className={h2Class}>
            The problem: protein that looks like a punishment
          </h2>
          <p className={bodyClass}>
            Walk past the protein aisle and the design language barely
            changes: white space, thin type, clinical blues and greens, and
            the words &ldquo;guilt-free&rdquo; set small, as if the product
            is asking permission. The intention is to signal health. The
            effect is to signal compromise — before anyone tastes anything,
            the packaging has already told them it will not be as good as
            the real thing.
          </p>
          <p className={bodyClass}>
            Soft serve is the opposite purchase. Nobody buys a swirl of ice
            cream as a health decision; they buy it because it looks like a
            good moment. A protein soft serve brand therefore has a design
            problem most protein brands never face: it has to win the
            appetite decision first, in about a second, against every
            regular ice cream brand on the street — and only then get credit
            for the protein.
          </p>
          <p className={bodyClass}>
            So the brief I set for Luma was simple: build the brand a treat
            would wear, and let the copy carry the protein.
          </p>
        </section>

        {/* The idea */}
        <section id="the-idea">
          <h2 className={h2Class}>The idea: indulgence without compromise</h2>
          <p className={bodyClass}>
            Every identity needs one line it can repeat until the line
            becomes the brand. Luma&rsquo;s is{" "}
            <span className={leadClass}>Indulgence Without Compromise</span>.
            It sits under a short messaging stack — &ldquo;Protein Soft
            Serve, Elevated&rdquo; and &ldquo;High Protein. Zero
            Compromise.&rdquo; — with one supporting line for the brand
            story: &ldquo;Pure indulgence built for modern culture.&rdquo;
          </p>
          <p className={bodyClass}>
            That stack does real work. It names the product, makes the
            promise, and refuses the apology — in nine words a customer can
            hold. And because it is short, it survives everywhere the brand
            has to speak: the cup, the café wall, the billboard, the
            Instagram caption. A positioning line that only fits in a brand
            deck is not a positioning line.
          </p>
        </section>

        {/* The logo */}
        <section id="the-logo">
          <h2 className={h2Class}>A logo with soft-serve curves</h2>
          <p className={bodyClass}>
            The LUMA wordmark is drawn the way the product feels: chunky,
            rounded letterforms with the softness of a swirl, friendly at a
            glance and unmistakable at a distance. It works flat in Sky Blue,
            reversed out of colour, and as a sculptural, cream-textured 3D
            version for campaign moments — the letters themselves become
            the dessert.
          </p>
          <img
            src="/projects/luma/sculptural-logo.jpg"
            alt="Luma sculptural logo — the wordmark rendered as glossy cream soft serve under the line Protein Soft Serve, Elevated"
            className="mt-6 w-full rounded-3xl"
          />
          <p className={bodyClass}>
            Then comes the unglamorous part that turns a logo into a system:
            the construction grid behind the letterforms, a defined clear
            space that must surround the mark, and six written misuse rules
            — no unauthorised colours, no tilting, no added effects, no
            changing individual letter colours, no altered proportions, no
            strokes. None of that is decoration. It is what keeps Luma the
            same brand when a printer, a sign maker, or a new team member
            handles the files.
          </p>
        </section>

        {/* Colour */}
        <section id="colour">
          <h2 className={h2Class}>Colour taken from the product itself</h2>
          <p className={bodyClass}>
            The palette was not picked from a trend board; it was scooped
            from the product. Five colours, each with an assigned job:{" "}
            <span className={leadClass}>Sky Blue</span> (#8CB9E7) leads as
            the primary, <span className={leadClass}>Vanilla White</span>{" "}
            (#F8EBD8) is the base,{" "}
            <span className={leadClass}>Orange Cream</span> (#FD9D4C) and{" "}
            <span className={leadClass}>Lavender Mist</span> (#9FAEE5) are
            the accents that add variety, and{" "}
            <span className={leadClass}>Choco Brown</span> (#54322B)
            provides the contrast that keeps the pastels grounded.
          </p>
          <p className={bodyClass}>
            The flavours themselves became brand assets: full-bleed texture
            photography of strawberry, chocolate, vanilla, cookies and
            cream, and matcha swirls, paired with each flavour&rsquo;s cup.
            And the stripes on the cup — the oldest ice cream parlour cue
            there is — run through the packaging, the patterns, and the
            campaigns. Cover the logo and the brand is still recognisable.
            That is the test a colour system has to pass.
          </p>
        </section>

        {/* Typography */}
        <section id="typography">
          <h2 className={h2Class}>
            Typography: bold words, soft character
          </h2>
          <p className={bodyClass}>
            The type system is deliberately quiet: Helvetica, in bold and
            bold oblique for headlines, with the full family specified for
            supporting text. The deck&rsquo;s own summary is the rule —
            bold words, soft character. The wordmark carries the
            personality; the typography carries the information. When every
            element of an identity tries to be the character, the result is
            noise. Luma shouts with its logo and its photography, and speaks
            plainly with its type.
          </p>
        </section>

        {/* Packaging */}
        <section id="packaging">
          <h2 className={h2Class}>
            Packaging first, because the cup is the media
          </h2>
          <p className={bodyClass}>
            For a soft serve brand, the highest-reach advertising surface
            is not a billboard. It is the cup in a customer&rsquo;s hand, in
            their photo, on their story. So packaging was designed as
            media: striped 12 oz cups in rotating colourways that stack
            into a wall of brand colour, and 33 oz take-home pints with the
            same system, so the brand survives the trip from the counter to
            the freezer at home.
          </p>
          <img
            src="/projects/luma/packaging-wall.jpg"
            alt="Luma packaging wall — stacked take-home pints in Sky Blue, Orange Cream, Vanilla White and Lavender Mist colourways"
            className="mt-6 w-full rounded-3xl"
          />
          <p className={bodyClass}>
            Each launch flavour — vanilla, strawberry, chocolate — gets a
            pairing: the cup against its own texture, so the flavour is
            recognisable before a word is read. That pairing system is what
            lets a new flavour launch later without a redesign; the system
            already knows what a Luma flavour looks like.
          </p>
        </section>

        {/* Every surface */}
        <section id="every-surface">
          <h2 className={h2Class}>One brand, every surface</h2>
          <p className={bodyClass}>
            The identity was then carried across everything a customer can
            meet: the outdoor billboard and street hoarding
            (&ldquo;Pure Soft Serve. Zero Compromise.&rdquo;), café posters
            on the wall, a circular exterior blade sign built around the L
            icon, staff aprons and a branded cap, taped delivery cartons in
            the back of the truck, and a social system — profile, story
            templates, and feed posts — that keeps the same lines, stripes,
            and swirls in the feed.
          </p>
          <img
            src="/projects/luma/cafe-posters.jpg"
            alt="Luma café interior — framed posters of the soft serve cup and the line Indulgence Without Compromise above café seating"
            className="mt-6 w-full rounded-3xl"
          />
          <p className={bodyClass}>
            None of these surfaces were designed one by one. They were all
            generated from the same kit: wordmark, palette, stripes,
            textures, type, and the one repeated line. That is the
            difference between a logo and an identity — the identity is
            what makes the tenth touchpoint as recognisable as the first.
          </p>
        </section>

        {/* Lessons */}
        <section id="lessons">
          <h2 className={h2Class}>What founders can take from Luma</h2>
          <p className={bodyClass}>
            <span className={leadClass}>
              1. Sell the treat, carry the benefit in the copy.
            </span>{" "}
            If your product is a pleasure purchase, design for the pleasure
            and let words handle the functional claim. Design that
            apologises sells the compromise, not the product.
          </p>
          <p className={bodyClass}>
            <span className={leadClass}>
              2. Let the product design the palette.
            </span>{" "}
            Colours pulled from the product itself — flavours, textures,
            the world it is eaten in — come with recognition built in, and
            they age better than trend colours.
          </p>
          <p className={bodyClass}>
            <span className={leadClass}>
              3. Write the rules while the brand is still yours alone.
            </span>{" "}
            Construction, clear space, and a short list of don&rsquo;ts
            take a day at identity stage and save the brand every time
            someone new touches it.
          </p>
          <p className={bodyClass}>
            <span className={leadClass}>
              4. Repeat one line until it becomes the brand.
            </span>{" "}
            Indulgence Without Compromise appears on the hero, the
            hoarding, the café wall, and the feed — unchanged. Recognition
            is repetition, and repetition is a design decision.
          </p>
        </section>

        {/* FAQs */}
        <section id="faq">
          <h2 className={h2Class}>Questions founders ask about brand identity</h2>
          <div className="mt-6 space-y-8">
            {blogFaqs.map((item) => (
              <div key={item.question}>
                <h3 className="font-general text-lg font-medium text-[var(--text)]">
                  {item.question}
                </h3>
                <p className={bodyClass}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author bio */}
        <p className={bodyClass}>
          <a
            href="https://www.saifali.site/"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            Saif Ali
          </a>{" "}
          is an ecommerce growth consultant for DTC brands, doing
          full-journey CRO across Meta ads, landing pages and Shopify.
        </p>

        {/* Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className="font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]">
            Building a brand that has to sell on sight?
          </h2>
          <p className={bodyClass}>
            If you are launching a food or DTC brand — or your current one
            looks like a compromise next to the product inside — I can build
            the identity as a system, the way Luma and{" "}
            <Link
              href="/portfolio"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              Habibi
            </Link>{" "}
            were built: logo, colour, packaging, and the rules that keep
            them consistent. Start with a fit call, or take the free audit
            and I will tell you honestly where your brand is leaking
            recognition.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/book" className={ctaButtonClass}>
              Book a fit call
            </Link>
            <Link
              href="/free-audit"
              className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
            >
              Get a free audit
            </Link>
          </div>
          <p className={bodyClass}>
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </section>
      </div>

      <SharedFooter />
    </main>
  );
}
