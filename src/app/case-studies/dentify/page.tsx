import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";

export const metadata: Metadata = {
  title: "Dentify Brand Identity — Dental Clinic Branding Case Study | Saif Ali",
  description:
    "The full Dentify brand identity by whyitworks — a dental clinic identity built on gentle precision: logo, deep blue and cyan colour system, Britti Sans typography, clinic signage, stationery, campaigns and social.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies/dentify",
  },
  openGraph: {
    title: "Dentify Brand Identity — Dental Clinic Branding Case Study | Saif Ali",
    description:
      "The full Dentify brand identity by whyitworks — logo, colour system, typography, clinic signage, stationery, campaigns and social, presented as one visual case study.",
    url: "/case-studies/dentify",
    type: "article",
    images: [
      {
        url: "/projects/dentify.jpg",
        width: 1500,
        height: 985,
        alt: "Dentify dental clinic brand identity — smiling patient with the Dentify logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentify Brand Identity — Dental Clinic Branding Case Study | Saif Ali",
    description:
      "The full Dentify brand identity by whyitworks — logo, colour system, typography, clinic signage, stationery, campaigns and social.",
    images: ["/projects/dentify.jpg"],
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
  "@id": "https://www.saifali.site/case-studies/dentify#article",
  headline: "Dentify Brand Identity — Dental Clinic Branding Case Study",
  description:
    "A visual walkthrough of the Dentify brand identity by whyitworks — a warm, confident identity for a modern dental clinic: logo application, a deep blue and cyan colour system, Britti Sans typography, clinic interiors and signage, stationery, a printed brand book, campaigns, social templates and app branding.",
  url: "https://www.saifali.site/case-studies/dentify",
  datePublished: "2026-10-29T00:00:00+05:00",
  image: "https://www.saifali.site/projects/dentify.jpg",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Brand identity design for healthcare and dental brands",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/case-studies/dentify#breadcrumb",
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
      name: "Dentify Brand Identity",
    },
  ],
};

const gallery: { src: string; alt: string }[] = [
  {
    src: "/projects/dentify/cover.jpg",
    alt: "Dentify dental clinic brand identity cover — smiling patient during a checkup with the white Dentify logo",
  },
  {
    src: "/projects/dentify/photography.jpg",
    alt: "Dentify brand photography — dental model and tools on cyan beside a smiling patient portrait",
  },
  {
    src: "/projects/dentify/logo.jpg",
    alt: "Dentify logo — the supplied emblem and wordmark on a construction grid",
  },
  {
    src: "/projects/dentify/poster.jpg",
    alt: "Dentify emblem and cyan poster — Dental care that makes every smile feel at home",
  },
  {
    src: "/projects/dentify/campaign.jpg",
    alt: "Dentify campaign visual — father and daughter smiling, Care that connects, Smiles that last a lifetime",
  },
  {
    src: "/projects/dentify/colour-typography.jpg",
    alt: "Dentify colour palette — Deep Blue, Cyan, White, Dark Navy and Cool Mist — with the Britti Sans typeface",
  },
  {
    src: "/projects/dentify/social-doctor.jpg",
    alt: "Dentify social template and doctor introduction card for a pediatric dentist",
  },
  {
    src: "/projects/dentify/app-reception.jpg",
    alt: "Dentify app icon on a phone and the branded clinic reception interior",
  },
  {
    src: "/projects/dentify/browser.jpg",
    alt: "Dentify web branding — browser address bar carrying the Dentify logo and domain",
  },
  {
    src: "/projects/dentify/id-badges.jpg",
    alt: "Dentify staff ID badges on cyan lanyards for the dental team",
  },
  {
    src: "/projects/dentify/clinic-interior.jpg",
    alt: "Dentify clinic interior with branded treatment chair and wall poster — Consistent care for every smile",
  },
  {
    src: "/projects/dentify/stationery.jpg",
    alt: "Dentify stationery — patient folder, letterhead, appointment card and branded pen",
  },
  {
    src: "/projects/dentify/brand-book.jpg",
    alt: "Dentify brand book 2026 version 1.0 — Precision care. Lasting smiles.",
  },
  {
    src: "/projects/dentify/web-section.jpg",
    alt: "Dentify website section — Real structure and consistent care for every smile",
  },
  {
    src: "/projects/dentify/billboard.jpg",
    alt: "Dentify outdoor billboard — Smile More campaign",
  },
  {
    src: "/projects/dentify/merch.jpg",
    alt: "Dentify merchandise — tote bag, water bottle and appointment cards",
  },
  {
    src: "/projects/dentify/social-implant.jpg",
    alt: "Dentify social media post about dental implants with an appointment notification",
  },
  {
    src: "/projects/dentify/stories.jpg",
    alt: "Dentify Instagram stories — Tap to protect their smile, Consistent care for every smile, Your brightest smile awaits",
  },
  {
    src: "/projects/dentify/uniform.jpg",
    alt: "Dentify service pillars — People, Diagnostics, Preventative Care, Families, Wellness — and the logo embroidered on staff scrubs",
  },
  {
    src: "/projects/dentify/social-profile.jpg",
    alt: "Dentify Instagram profile, appointment reminder notification and app icon on a phone home screen",
  },
  {
    src: "/projects/dentify/app-ui.jpg",
    alt: "Dentify digital interface details — app icons and browser bars in deep blue and cyan",
  },
  {
    src: "/projects/dentify/closing.jpg",
    alt: "Dentify closing board — Thank you for watching, Gentle precision in dental care",
  },
];

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

export default function CaseStudyDentifyPage() {
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
        {/* Breadcrumb / back — mirrors the sibling pages' pattern */}
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

        {/* Header */}
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
            <span>Dentify Brand Identity</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Dentify:{" "}
            <em className="not-italic accent" style={serifItalic}>
              Gentle Precision
            </em>{" "}
            in Dental Care
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · whyitworks · 2026
          </p>
          <div className="mt-6 grid max-w-2xl grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-[var(--text-muted)]">Year</p>
              <p className="mt-1 font-medium text-[var(--text)]">2026</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Industry</p>
              <p className="mt-1 font-medium text-[var(--text)]">Healthcare</p>
            </div>
            <div>
              <p className="text-[var(--text-muted)]">Project direction</p>
              <p className="mt-1 font-medium text-[var(--text)]">
                Branding / Brand Identity
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">
              Dentify brings gentle precision to the way you experience dental
              care.
            </span>{" "}
            Dentify puts comfort at the centre of modern dental care. A warm,
            confident identity combines clinical clarity with a welcoming
            visual language, helping patients feel understood from the first
            appointment.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The supplied Dentify emblem and wordmark anchor a system of deep
            blue, cyan and clean white. From the clinic to everyday digital
            touchpoints, the identity presents care with a consistent and
            reassuring voice. The full presentation follows, the way it was
            designed to be scrolled.
          </p>
        </section>

        {/* Full-width visual presentation — Behance style, images stacked edge to edge */}
        <section className="mt-10 overflow-hidden rounded-[24px]">
          {gallery.map((item, i) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={1500}
              height={985}
              quality={75}
              sizes="(max-width: 1152px) 100vw, 1152px"
              priority={i === 0}
              className="h-auto w-full"
            />
          ))}
        </section>

        {/* Close */}
        <section className="mt-14 rounded-[24px] bg-[#17345C] px-6 py-12 text-center md:py-16">
          <p className="font-clash text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight text-white">
            Gentle precision in dental care.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            One identity system across the clinic, print and the patient’s
            phone — logo, colour, typography, signage, stationery, campaigns
            and social, designed by whyitworks. Building a healthcare or DTC
            brand that needs the same treatment?
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
