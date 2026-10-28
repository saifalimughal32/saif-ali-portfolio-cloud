import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "SpookyBite Brand Identity — Pizza Branding Case Study | Saif Ali",
  description: "The full SpookyBite brand identity by whyitworks — a playful pizza brand with a spooky twist: ghost mascot, wordmark, packaging system, storefront, pattern, stickers and social, presented as one visual case study.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/spookybite",
  },
  openGraph: {
    title: "SpookyBite Brand Identity — Pizza Branding Case Study | Saif Ali",
    description: "The full SpookyBite brand identity by whyitworks — a playful pizza brand with a spooky twist: ghost mascot, wordmark, packaging system, storefront, pattern, stickers and social, presented as one visual case study.",
    url: "/case-studies/spookybite",
    type: "article",
    images: [
      {
        url: "/projects/spookybite.jpg",
        width: 1200,
        height: 926,
        alt: "SpookyBite pizza brand identity — cover visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpookyBite Brand Identity — Pizza Branding Case Study | Saif Ali",
    description: "The full SpookyBite brand identity by whyitworks — a playful pizza brand with a spooky twist: ghost mascot, wordmark, packaging system, storefront, pattern, stickers and social, presented as one visual case study.",
    images: ["/projects/spookybite.jpg"],
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
  "@id": "https://www.saifali.site/case-studies/spookybite#article",
  headline: "SpookyBite Brand Identity — Pizza Branding Case Study | Saif Ali",
  description: "A visual walkthrough of the SpookyBite brand identity by whyitworks — ghost mascot, wordmark and logo lockup, pizza box and cup-and-bag packaging, storefront graphics, brand pattern, stickers and social visual direction.",
  url: "https://www.saifali.site/case-studies/spookybite",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/spookybite.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/spookybite#breadcrumb",
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
      name: "SpookyBite Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string; w: number; h: number }[] = [
  {
    src: "/projects/spookybite.jpg",
    alt: "SpookyBite pizza brand identity — cover visual",
    w: 1200,
    h: 926,
  },
  {
    src: "/projects/spookybite/brand-system.jpg",
    alt: "SpookyBite brand system — ghost mascot, wordmark and colours",
    w: 1300,
    h: 1140,
  },
  {
    src: "/projects/spookybite/logo-lockup.jpg",
    alt: "SpookyBite logo lockup",
    w: 670,
    h: 570,
  },
  {
    src: "/projects/spookybite/packaging-boxes.jpg",
    alt: "SpookyBite pizza box packaging",
    w: 922,
    h: 712,
  },
  {
    src: "/projects/spookybite/packaging-cup-bag.jpg",
    alt: "SpookyBite cup and bag packaging",
    w: 792,
    h: 654,
  },
  {
    src: "/projects/spookybite/lifestyle.jpg",
    alt: "SpookyBite lifestyle visual",
    w: 782,
    h: 654,
  },
  {
    src: "/projects/spookybite/storefront.jpg",
    alt: "SpookyBite storefront branding",
    w: 768,
    h: 462,
  },
  {
    src: "/projects/spookybite/pattern.jpg",
    alt: "SpookyBite brand pattern",
    w: 650,
    h: 570,
  },
  {
    src: "/projects/spookybite/stickers.jpg",
    alt: "SpookyBite stickers",
    w: 742,
    h: 462,
  },
  {
    src: "/projects/spookybite/social-post.jpg",
    alt: "SpookyBite social post visual",
    w: 486,
    h: 660,
  },
  {
    src: "/projects/spookybite/social-cheesy.jpg",
    alt: "SpookyBite social visual — cheesy pizza post",
    w: 548,
    h: 462,
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudySpookybitePage() {
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
            <span>SpookyBite Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            SpookyBite: 
            <em className="not-italic accent" style={{...serifItalic}}>
              Pizza, With a Spooky Twist
            </em>
            
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Food / Pizza</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">Branding / Brand Identity</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">SpookyBite pairs everyday pizza cravings with a spooky twist.</span> In food branding the identity has to trigger recognition and appetite at a glance — from the pizza box in hand to the storefront to the feed — so the system is built around one memorable ghost mascot and wordmark.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The full presentation follows — the brand system, packaging, storefront, pattern, stickers and social — the way it was designed to be scrolled.
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

        <section className="mt-14 rounded-[24px] bg-[#111111] px-6 py-12 text-center md:py-16">
          <p className="font-clash text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight text-white">
            One mascot. Every surface.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across boxes, cups, storefront and social — designed by whyitworks. Building a food brand that needs the same memorability?
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
