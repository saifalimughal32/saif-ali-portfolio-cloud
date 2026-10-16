import type { Metadata } from "next";
import Link from "next/link";
import { cv } from "@/content/cv";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "CV — Saif Ali | Shopify CRO & Ecommerce Growth Consultant",
  description:
    "CV of Saif Ali — Shopify CRO consultant and ecommerce growth consultant for DTC brands: Meta ads, landing pages, Shopify builds, 2022–present.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV — Saif Ali | Shopify CRO & Ecommerce Growth Consultant",
    description:
      "CV of Saif Ali — Shopify CRO consultant and ecommerce growth consultant for DTC brands: Meta ads, landing pages, Shopify builds, 2022–present.",
    url: "/cv",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 2240,
        height: 1120,
        alt: "Saif Ali — Ecommerce Growth Consultant for DTC Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV — Saif Ali | Shopify CRO & Ecommerce Growth Consultant",
    description:
      "CV of Saif Ali — Shopify CRO consultant and ecommerce growth consultant for DTC brands: Meta ads, landing pages, Shopify builds, 2022–present.",
    images: ["/og-image.jpg"],
  },
};

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-1.5 font-general text-[11px] font-semibold uppercase tracking-[0.04em] text-[var(--text)] md:text-xs">
      <span className="text-[var(--accent)]">{"//"}</span>
      {children}
    </h2>
  );
}

function DashedRule() {
  return (
    <div
      className="my-5 border-t border-dashed border-[#d8d8d8] md:my-6"
      aria-hidden
    />
  );
}

function CvSheet({
  page,
  children,
}: {
  page: number;
  children: React.ReactNode;
}) {
  return (
    <article className="relative overflow-hidden rounded-[20px] border border-[var(--border)] bg-white px-5 py-7 shadow-[0_8px_28px_rgba(0,0,0,0.05)] md:px-10 md:py-10">
      <p className="mb-5 font-hand text-sm text-[var(--text-secondary)]">
        / Page {page}
      </p>
      {children}
    </article>
  );
}

export default function CvPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-hand text-base text-[var(--text-secondary)]">
              / Career
            </p>
            <h1 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
              Curriculum <span className="accent">Vitae</span>
            </h1>
            <p className="mt-3 text-[var(--text-secondary)]">
              {site.displayName} — {site.professionalLabel}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/#experience"
              className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
            >
              Back
            </Link>
            <a
              href="/api/cv"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {/* Page 1 */}
          <CvSheet page={1}>
            <header className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h2 className="font-general text-[clamp(1.8rem,4vw,2.4rem)] font-semibold tracking-[-1.5px] text-[var(--text)]">
                  {cv.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)] md:text-base">
                  {cv.title}
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--accent)]">
                  {cv.agency}
                </p>
              </div>
              <ul className="space-y-1 text-right text-xs text-[var(--text-secondary)] md:text-sm">
                {cv.contacts.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </header>

            <DashedRule />

            <section>
              <SectionTitle>About</SectionTitle>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text)] md:text-[15px]">
                {cv.about}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--text)] md:text-[15px]">
                Currently offering{" "}
                <Link
                  href="/shopify-cro-consultant"
                  className="text-[var(--accent)] underline underline-offset-4"
                >
                  Shopify CRO consulting
                </Link>{" "}
                for DTC brands.
              </p>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Key Skills &amp; Creative Fields</SectionTitle>
              <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 md:grid-cols-3">
                {cv.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-[var(--text)]"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Professional Work Experience</SectionTitle>
              <div className="mt-4 space-y-5">
                {cv.experience.map((job) => (
                  <div key={`${job.role}-${job.org}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-semibold text-[var(--text)]">
                        {job.role}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {job.dates}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                      {job.org}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text)]">
                      {job.summary}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Selected Results</SectionTitle>
              <ol className="mt-4 space-y-2">
                {cv.results.map((result, i) => (
                  <li
                    key={result}
                    className="flex gap-3 text-sm text-[var(--text)]"
                  >
                    <span className="shrink-0 font-semibold text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ol>
            </section>
          </CvSheet>

          {/* Page 2 — tools, soft skills, languages, education, certs, contact */}
          <CvSheet page={2}>
            <section>
              <SectionTitle>Software &amp; Platform Expertise</SectionTitle>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-[#cfcfcf] px-3 py-1.5 text-xs text-[var(--text)] md:text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Soft Skills</SectionTitle>
              <p className="mt-3 text-sm font-semibold text-[var(--text)] md:text-[15px]">
                {cv.softSkills.join("   ·   ")}
              </p>
            </section>

            <DashedRule />

            <section className="relative">
              <div
                className="pointer-events-none absolute -right-2 top-2 select-none text-[7rem] leading-none text-black/[0.04] md:text-[9rem]"
                aria-hidden
              >
                文
              </div>
              <SectionTitle>Languages</SectionTitle>
              <ul className="relative mt-4 space-y-2.5">
                {cv.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span className="font-semibold text-[var(--text)]">
                      {lang.name}
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Education</SectionTitle>
              <ul className="mt-4 space-y-4">
                {cv.education.map((item) => (
                  <li key={item.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-sm font-semibold text-[var(--text)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {item.dates}
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                      {item.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <DashedRule />

            <section>
              <SectionTitle>Certifications &amp; Focus Areas</SectionTitle>
              <ul className="mt-4 space-y-3">
                {cv.certifications.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm"
                  >
                    <span className="font-semibold text-[var(--text)]">
                      {item.title}
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      {item.meta}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <DashedRule />

            <section className="relative">
              <svg
                className="pointer-events-none absolute -right-1 top-0 h-28 w-28 text-black/[0.05] md:h-36 md:w-36"
                viewBox="0 0 120 120"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                aria-hidden
              >
                <rect x="18" y="22" width="78" height="58" rx="16" />
                <path d="M42 80 L30 102 L54 80" />
                <path d="M62 48 H90 M82 40 L90 48 L82 56" />
              </svg>
              <SectionTitle>Contact Information</SectionTitle>
              <ul className="relative mt-4 space-y-2.5">
                {cv.contactRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm"
                  >
                    <span className="font-semibold text-[var(--text)]">
                      {row.label}
                    </span>
                    <span className="text-[var(--text-secondary)]">
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-8 border-t border-[var(--border)] pt-4 text-center text-xs text-[var(--text-muted)]">
              {cv.footer}
            </div>
          </CvSheet>
        </div>

        <p className="mt-6 text-sm text-[var(--text-muted)]">
          Prefer the PDF?{" "}
          <a href="/api/cv" className="underline underline-offset-2">
            Download Saif-Ali-CV.pdf
          </a>{" "}
          or return{" "}
          <Link href="/#about" className="underline underline-offset-2">
            home
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
