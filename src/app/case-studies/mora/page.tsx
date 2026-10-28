import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "MORA Brand Identity — Lavender-Blueberry Drink Branding Case Study | Saif Ali",
  description: "The full MORA brand identity by whyitworks — a calming lavender-blueberry drink brand: identity system, packaging, apparel, retail environment and social, presented as one visual case study.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/mora",
  },
  openGraph: {
    title: "MORA Brand Identity — Lavender-Blueberry Drink Branding Case Study | Saif Ali",
    description: "The full MORA brand identity by whyitworks — a calming lavender-blueberry drink brand: identity system, packaging, apparel, retail environment and social, presented as one visual case study.",
    url: "/case-studies/mora",
    type: "article",
    images: [
      {
        url: "/projects/mora.jpg",
        width: 736,
        height: 693,
        alt: "MORA lavender-blueberry drink brand identity — cover visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MORA Brand Identity — Lavender-Blueberry Drink Branding Case Study | Saif Ali",
    description: "The full MORA brand identity by whyitworks — a calming lavender-blueberry drink brand: identity system, packaging, apparel, retail environment and social, presented as one visual case study.",
    images: ["/projects/mora.jpg"],
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
  "@id": "https://www.saifali.site/case-studies/mora#article",
  headline: "MORA Brand Identity — Lavender-Blueberry Drink Branding Case Study | Saif Ali",
  description: "A visual walkthrough of the MORA brand identity by whyitworks — identity system, product packaging, apparel, retail environment and social campaign concepts built around Dream Better. Feel Brighter.",
  url: "https://www.saifali.site/case-studies/mora",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/mora.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/mora#breadcrumb",
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
      name: "MORA Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string; w: number; h: number }[] = [
  {
    src: "/projects/mora.jpg",
    alt: "MORA lavender-blueberry drink brand identity — cover visual",
    w: 736,
    h: 693,
  },
  {
    src: "/projects/mora/brand-board.jpg",
    alt: "MORA brand board — identity system for the lavender-blueberry drink",
    w: 603,
    h: 491,
  },
  {
    src: "/projects/mora/lifestyle-drink.jpg",
    alt: "MORA lifestyle visual — the drink in a calm, bright setting",
    w: 736,
    h: 638,
  },
  {
    src: "/projects/mora/apparel.jpg",
    alt: "MORA branded apparel",
    w: 806,
    h: 504,
  },
  {
    src: "/projects/mora/storefront.jpg",
    alt: "MORA retail storefront branding",
    w: 736,
    h: 693,
  },
  {
    src: "/projects/mora/packaging.jpg",
    alt: "MORA product packaging",
    w: 603,
    h: 491,
  },
  {
    src: "/projects/mora/social.jpg",
    alt: "MORA social story visuals",
    w: 498,
    h: 839,
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudyMoraPage() {
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
            <span>MORA Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            MORA: 
            <em className="not-italic accent" style={{...serifItalic}}>
              Dream Better. Feel Brighter.
            </em>
            
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Beverage</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">Branding / Brand Identity</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">MORA is a calming lavender-blueberry drink.</span> Beverage shoppers decide in seconds at the shelf and on socials, so the identity is built to be recognisable at a glance and consistent across packaging, apparel, retail and the feed.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The full presentation follows — the brand board, the drink in lifestyle settings, apparel, the storefront, packaging and social — the way it was designed to be scrolled.
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
            Dream Better. Feel Brighter.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across packaging, apparel, retail and social — designed by whyitworks. Building a beverage or DTC brand that needs the same calm confidence?
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
