import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "Rivori Matcha Brand Identity — Matcha Lifestyle Branding Case Study | Saif Ali",
  description: "The full Rivori Matcha brand identity by whyitworks — a playful matcha lifestyle brand: logo system, packaging, storefront, shipping boxes, social kit and lifestyle campaigns, presented as one visual case study.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/rivori-matcha",
  },
  openGraph: {
    title: "Rivori Matcha Brand Identity — Matcha Lifestyle Branding Case Study | Saif Ali",
    description: "The full Rivori Matcha brand identity by whyitworks — a playful matcha lifestyle brand: logo system, packaging, storefront, shipping boxes, social kit and lifestyle campaigns, presented as one visual case study.",
    url: "/case-studies/rivori-matcha",
    type: "article",
    images: [
      {
        url: "/projects/rivori-matcha.jpg",
        width: 1600,
        height: 1200,
        alt: "Rivori Matcha brand identity — cover visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivori Matcha Brand Identity — Matcha Lifestyle Branding Case Study | Saif Ali",
    description: "The full Rivori Matcha brand identity by whyitworks — a playful matcha lifestyle brand: logo system, packaging, storefront, shipping boxes, social kit and lifestyle campaigns, presented as one visual case study.",
    images: ["/projects/rivori-matcha.jpg"],
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
  "@id": "https://www.saifali.site/case-studies/rivori-matcha#article",
  headline: "Rivori Matcha Brand Identity — Matcha Lifestyle Branding Case Study | Saif Ali",
  description: "A visual walkthrough of the Rivori Matcha brand identity by whyitworks — logo, packaging cups and carrier bag, storefront and environmental graphics, shipping boxes, social profile kit and lifestyle campaign visuals.",
  url: "https://www.saifali.site/case-studies/rivori-matcha",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/rivori-matcha.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/rivori-matcha#breadcrumb",
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
      name: "Rivori Matcha Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string; w: number; h: number }[] = [
  {
    src: "/projects/rivori-matcha.jpg",
    alt: "Rivori Matcha brand identity — cover visual",
    w: 1600,
    h: 1200,
  },
  {
    src: "/projects/rivori-matcha/logo-mark.jpg",
    alt: "Rivori Matcha logo mark",
    w: 1254,
    h: 1254,
  },
  {
    src: "/projects/rivori-matcha/packaging-cups-bag.jpg",
    alt: "Rivori Matcha packaging — cups and carrier bag",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/storefront.jpg",
    alt: "Rivori Matcha storefront branding",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/pour-cups.jpg",
    alt: "Rivori Matcha being poured into branded cups",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/shipping-boxes.jpg",
    alt: "Rivori Matcha shipping boxes",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/social-profile.jpg",
    alt: "Rivori Matcha social profile kit",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/lifestyle-hat-cup.jpg",
    alt: "Rivori Matcha lifestyle visual — hat and cup",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/sip-cup.jpg",
    alt: "Rivori Matcha cup in hand",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/bottle-lifestyle.jpg",
    alt: "Rivori Matcha bottled drink lifestyle visual",
    w: 1122,
    h: 1402,
  },
  {
    src: "/projects/rivori-matcha/brand-collage.jpg",
    alt: "Rivori Matcha brand collage",
    w: 680,
    h: 409,
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudyRivoriMatchaPage() {
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
            <span>Rivori Matcha Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Rivori Matcha: 
            <em className="not-italic accent" style={{...serifItalic}}>
              Smooth. Fresh. Uplifting.
            </em>
            
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Beverage / Lifestyle</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">Branding / Brand Identity</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">Rivori Matcha is built around “Smooth. Fresh. Uplifting.”</span> Matcha competes in a crowded wellness-drink space where shelf recognition and social shareability decide first purchases, so the identity is built to be recognisable at a glance and easy to share.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The full presentation follows — logo, packaging, storefront, shipping boxes, the social kit and lifestyle visuals — the way it was designed to be scrolled.
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
            Smooth. Fresh. Uplifting.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across packaging, storefront, shipping and social — designed by whyitworks. Building a beverage or lifestyle brand that needs the same lift?
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
