import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "Luma Brand Identity — Protein Soft Serve Branding Case Study | Saif Ali",
  description: "The full Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, Helvetica typography, packaging, signage and campaigns, presented as one visual case study.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/luma",
  },
  openGraph: {
    title: "Luma Brand Identity — Protein Soft Serve Branding Case Study | Saif Ali",
    description: "The full Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, Helvetica typography, packaging, signage and campaigns, presented as one visual case study.",
    url: "/case-studies/luma",
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
    title: "Luma Brand Identity — Protein Soft Serve Branding Case Study | Saif Ali",
    description: "The full Luma brand identity by whyitworks — a protein soft serve brand designed to indulge: rounded wordmark, flavour-led colours, Helvetica typography, packaging, signage and campaigns, presented as one visual case study.",
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
  "@id": "https://www.saifali.site/case-studies/luma#article",
  headline: "Luma Brand Identity — Protein Soft Serve Branding Case Study | Saif Ali",
  description: "A visual walkthrough of the Luma brand identity by whyitworks — the rounded wordmark and its rules, the five-colour flavour-led system, Helvetica typography, packaging, signage, outdoor campaigns and social templates.",
  url: "https://www.saifali.site/case-studies/luma",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/luma.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/luma#breadcrumb",
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
      name: "Case Studies",
      item: "https://www.saifali.site/case-studies",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Luma Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string; w: number; h: number }[] = [
  {
    src: "/projects/luma-case/cs-01.jpg",
    alt: "Luma campaign hero — two striped Luma cups held against a summer sky, Protein Soft Serve, Indulgence Without Compromise",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-02.jpg",
    alt: "Luma brand messaging — Protein Soft Serve, Elevated. High Protein. Zero Compromise.",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-03.jpg",
    alt: "Luma primary logo — the rounded chunky wordmark",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-04.jpg",
    alt: "Luma logo construction with stacked branded cups",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-05.jpg",
    alt: "Luma logo clear space on Sky Blue",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-06.jpg",
    alt: "Luma logo do's and don'ts — unauthorised colour, tilting, effects and strokes",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-07.jpg",
    alt: "Luma colour system — Sky Blue, Orange Cream, Vanilla White, Choco Brown, Lavender Mist",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-08.jpg",
    alt: "Luma typography — Helvetica Bold, Bold words. Soft character.",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-09.jpg",
    alt: "Luma sculptural logo — the wordmark formed from soft serve, Protein Soft Serve, Elevated.",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-10.jpg",
    alt: "Luma flavour textures — strawberry, chocolate, vanilla, cookies and matcha swirls",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-11.jpg",
    alt: "Luma vanilla pairing — soft serve texture and a striped vanilla cup",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-12.jpg",
    alt: "Luma strawberry pairing — pink soft serve in a striped cup",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-13.jpg",
    alt: "Luma chocolate pairing — chocolate swirl and a chocolate cup",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-14.jpg",
    alt: "Luma product photography grid — cups being served, held and shared",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-15.jpg",
    alt: "Luma packaging wall — stacked take-home pints in every flavour colour",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-16.jpg",
    alt: "Luma pint lid and portrait — a customer holding a Luma cup",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-17.jpg",
    alt: "Luma staff apron with the Ice Cream Luma logo",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-18.jpg",
    alt: "Luma brand patterns — stripes and the repeating wordmark",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-19.jpg",
    alt: "Luma outdoor billboard — Pure Soft Serve. Zero Compromise.",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-20.jpg",
    alt: "Luma street hoarding — Indulgence Without Compromise",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-21.jpg",
    alt: "Luma exterior blade sign — Luma Ice Cream round sign against the sky",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-22.jpg",
    alt: "Luma café posters inside the store",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-23.jpg",
    alt: "Luma delivery cartons stacked in a truck",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-24.jpg",
    alt: "Luma story campaign — No Guilt Attached, Made to Indulge",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-25.jpg",
    alt: "Luma social feed — Protein Soft Serve, Swirl Happens posts",
    w: 2500,
    h: 1548,
  },
  {
    src: "/projects/luma-case/cs-26.jpg",
    alt: "Luma closing collage — textures, packaging, apparel and a cup in hand",
    w: 2500,
    h: 1548,
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudyLumaPage() {
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
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Case Studies
          </p>
          <Link
            href="/portfolio"
            className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
          >
            Back
          </Link>
        </div>

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
            <Link
              href="/case-studies"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              Case Studies
            </Link>
            <span aria-hidden> / </span>
            <span>Luma Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Luma: 
            <em className="not-italic accent" style={{...serifItalic}}>
              Designed to Indulge
            </em>
            
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Food & Beverage</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">Branding / Brand Identity</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">Most protein products apologise for existing. Luma does the opposite.</span> Luma is a protein soft serve brand, and this is the full identity built for it at whyitworks: logo, colour, typography, packaging, signage and campaigns.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Protein desserts usually dress like diet products — restrained, clinical, apologetic — so Luma is built the other way around: indulgence first, with the protein as the bonus, around one soft, rounded wordmark and a palette taken from the product itself. The full presentation follows, the way it was designed to be scrolled. A written walkthrough of the thinking is on the blog at /blog/luma-brand-identity.
          </p>
        </section>

        <section className="mt-10 overflow-hidden rounded-[24px]">
          {gallery.map((item, i) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              quality={75}
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={i === 0}
              className="h-auto w-full"
            />
          ))}
        </section>

        <section className="mt-14 rounded-[24px] bg-[#54322B] px-6 py-12 text-center md:py-16">
          <p className="font-clash text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight text-white">
            Indulgence without compromise.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across cups, pints, signage, café walls and the feed — designed by whyitworks. Building a food or DTC brand that needs the same treatment?
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className={ctaButtonClass}>
              Book a fit call
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              See more work
            </Link>
          </div>
        </section>
      </div>
      <SharedFooter />
    </main>
  );
}
