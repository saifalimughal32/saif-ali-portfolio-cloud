import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "Habibi Brand Identity — Fast Food Branding Case Study | Saif Ali",
  description: "The full Habibi brand identity by whyitworks — a bold fast food identity built to stand out: expressive wordmark, vibrant colour system, Gliker and Roc Grotesk typography, packaging, campaigns, merchandise and delivery branding.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/habibi",
  },
  openGraph: {
    title: "Habibi Brand Identity — Fast Food Branding Case Study | Saif Ali",
    description: "The full Habibi brand identity by whyitworks — a bold fast food identity built to stand out: expressive wordmark, vibrant colour system, Gliker and Roc Grotesk typography, packaging, campaigns, merchandise and delivery branding.",
    url: "/case-studies/habibi",
    type: "article",
    images: [
      {
        url: "/projects/habibi.jpg",
        width: 1500,
        height: 985,
        alt: "Habibi fast food brand identity — bold wordmark and campaign visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Habibi Brand Identity — Fast Food Branding Case Study | Saif Ali",
    description: "The full Habibi brand identity by whyitworks — a bold fast food identity built to stand out: expressive wordmark, vibrant colour system, Gliker and Roc Grotesk typography, packaging, campaigns, merchandise and delivery branding.",
    images: ["/projects/habibi.jpg"],
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
  "@id": "https://www.saifali.site/case-studies/habibi#article",
  headline: "Habibi Brand Identity — Fast Food Branding Case Study | Saif Ali",
  description: "A visual walkthrough of the Habibi brand identity by whyitworks — the supplied wordmark developed into a complete system of colour, typography, packaging, restaurant posters, social templates, merchandise and delivery branding.",
  url: "https://www.saifali.site/case-studies/habibi",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/habibi.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/habibi#breadcrumb",
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
      name: "Habibi Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string; w: number; h: number }[] = [
  {
    src: "/projects/habibi-case/cs-01.jpg",
    alt: "Habibi cover — fried chicken over the habibi! wordmark, Taste the Adventure",
    w: 1500,
    h: 1244,
  },
  {
    src: "/projects/habibi-case/cs-02.jpg",
    alt: "Habibi logo — the expressive wordmark on cream",
    w: 1500,
    h: 900,
  },
  {
    src: "/projects/habibi-case/cs-03.jpg",
    alt: "Habibi logo construction and colour lockups",
    w: 1500,
    h: 1547,
  },
  {
    src: "/projects/habibi-case/cs-04.jpg",
    alt: "Habibi brand collage — a fun, energetic fast food brand built to stand out",
    w: 1500,
    h: 2175,
  },
  {
    src: "/projects/habibi-case/cs-05.jpg",
    alt: "Habibi display typeface — Gliker",
    w: 1500,
    h: 2658,
  },
  {
    src: "/projects/habibi-case/cs-06.jpg",
    alt: "Habibi body typeface Roc Grotesk and the colour palette — Violet Haze, Soft Cream, Crimson Blaze, Amber Flash, Dark Espresso, Fresh Sage",
    w: 1500,
    h: 2720,
  },
  {
    src: "/projects/habibi-case/cs-07.jpg",
    alt: "Habibi campaign — Made Addictive, a burger with flowing brand shapes",
    w: 1500,
    h: 2885,
  },
  {
    src: "/projects/habibi-case/cs-08.jpg",
    alt: "Habibi packaging — stacked burger boxes and a branded drink cup",
    w: 1500,
    h: 1277,
  },
  {
    src: "/projects/habibi-case/cs-09.jpg",
    alt: "Habibi restaurant posters and social posts — Crave the Taste, Purely Addictive",
    w: 1500,
    h: 2975,
  },
  {
    src: "/projects/habibi-case/cs-10.jpg",
    alt: "Habibi campaign — Warning, uncontrollable slurping, noodles",
    w: 1500,
    h: 2307,
  },
  {
    src: "/projects/habibi-case/cs-11.jpg",
    alt: "Habibi campaign — sauce poured over a crispy chicken burger",
    w: 1500,
    h: 3063,
  },
  {
    src: "/projects/habibi-case/cs-12.jpg",
    alt: "Habibi cups — Careful, happiness may spill — and a meal box in hand",
    w: 1500,
    h: 1804,
  },
  {
    src: "/projects/habibi-case/cs-13.jpg",
    alt: "Habibi meal boxes and burger wrap — Built to Addict",
    w: 1500,
    h: 1065,
  },
  {
    src: "/projects/habibi-case/cs-14.jpg",
    alt: "Habibi crispy bucket — Crispy on the outside, tender on the inside",
    w: 1500,
    h: 3486,
  },
  {
    src: "/projects/habibi-case/cs-15.jpg",
    alt: "Habibi staff apron, menu and merchandise — t-shirt and cap",
    w: 1500,
    h: 1851,
  },
  {
    src: "/projects/habibi-case/cs-16.jpg",
    alt: "Habibi drinks campaign — Instant Chills",
    w: 1500,
    h: 2795,
  },
  {
    src: "/projects/habibi-case/cs-17.jpg",
    alt: "Habibi ice cream campaign — Chillin' and Creamy Dreamy",
    w: 1500,
    h: 2210,
  },
  {
    src: "/projects/habibi-case/cs-18.jpg",
    alt: "Habibi tote bags — Get Hooked on Every Bite, Fuel Your Cravings",
    w: 1500,
    h: 1427,
  },
  {
    src: "/projects/habibi-case/cs-19.jpg",
    alt: "Habibi business cards scattered with the closing wordmark",
    w: 1500,
    h: 845,
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudyHabibiPage() {
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
            <span>Habibi Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Habibi: 
            <em className="not-italic accent" style={{...serifItalic}}>
              Taste the Adventure
            </em>
            
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Year</p>
              <p className="mt-1 font-medium text-[var(--text)]">2025</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Fast Food / Restaurant</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">Branding / Brand Identity</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">Build a distinctive fast-food identity in a crowded category.</span> Habibi brings a youthful, energetic and premium personality to packaging, uniforms, campaigns and everyday brand touchpoints. A warm, expressive wordmark connects the complete visual system.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The supplied Habibi logo anchors a lively identity of vibrant colour, flowing forms and bold food imagery. Consistent applications across packaging, merchandise and campaigns create a recognisable, memorable brand experience. The full presentation follows, the way it was designed to be scrolled.
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

        <section className="mt-14 rounded-[24px] bg-[#3d1e09] px-6 py-12 text-center md:py-16">
          <p className="font-clash text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight text-white">
            Built to stand out.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across packaging, restaurant walls, merchandise and delivery — designed by whyitworks. Building a food brand that needs the same energy?
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
