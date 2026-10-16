import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saifali.site"),
  title: site.meta.homeTitle,
  description: site.meta.homeDescription,
  openGraph: {
    title: site.meta.homeTitle,
    description: site.meta.homeDescription,
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
    title: site.meta.homeTitle,
    description: site.meta.homeDescription,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#eaeaea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0HZ7JB42PE"
        />
        <Script id="ga4-init">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0HZ7JB42PE');`}
        </Script>
        <Script id="ga4-conversion-events" strategy="afterInteractive">
          {`(function(){
  function fire(name, params){
    try {
      if (typeof window.gtag === 'function') {
        var p = params || {};
        p.transport_type = 'beacon';
        window.gtag('event', name, p);
      }
    } catch (e) {}
  }
  var SERVICE_PAGES = ['/shopify-cro-consultant','/ecommerce-growth-consultant','/ecommerce-ux-audit','/landing-page-optimization','/resources/shopify-conversion-framework','/case-studies'];
  function isServicePage(path){
    return SERVICE_PAGES.some(function(p){ return path === p || path.indexOf(p + '/') === 0; });
  }
  function label(el){
    return ((el.textContent || '').trim().replace(/\\s+/g, ' ') || '').slice(0, 80);
  }
  document.addEventListener('click', function(e){
    var t = e.target;
    if (!t || !t.closest) return;
    var proj = t.closest('[data-project-id]');
    if (proj && location.pathname.indexOf('/portfolio') === 0) {
      fire('portfolio_project_view', { project_id: proj.getAttribute('data-project-id'), page: location.pathname });
      return;
    }
    var a = t.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var src = location.pathname;
    if (href === '/book' || href.indexOf('/book?') === 0 || href.indexOf('/book#') === 0) {
      fire('book_cta_click', { source_page: src, cta_label: label(a) });
      if (isServicePage(src)) fire('service_page_to_book', { source_page: src, cta_label: label(a) });
    } else if (src.indexOf('/blog/') === 0 && isServicePage(href)) {
      fire('article_to_service_click', { source_page: src, destination: href, cta_label: label(a) });
    }
  }, true);
  document.addEventListener('submit', function(e){
    var f = e.target;
    if (!f || f.tagName !== 'FORM') return;
    fire('contact_submit', { form_page: location.pathname });
  }, true);
  (function(){
    var p = location.pathname;
    if (p === '/book') fire('book_page_view', { page: p });
    if (p.indexOf('/case-studies') === 0) fire('case_study_view', { page: p });
  })();
})();`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Person\",\n      \"@id\": \"https://www.saifali.site/#person\",\n      \"name\": \"Saif Ali\",\n      \"url\": \"https://www.saifali.site/\",\n      \"jobTitle\": \"Ecommerce Growth Consultant for DTC Brands\",\n      \"email\": \"info@saifali.site\",\n      \"description\": \"Ecommerce growth consultant helping DTC brands turn ad clicks into customers \\u2014 full-journey CRO across Meta ads, landing pages and Shopify.\",\n      \"knowsAbout\": [\n        \"Conversion Rate Optimization\",\n        \"Shopify\",\n        \"Ecommerce\",\n        \"Meta Ads\",\n        \"Landing Page Optimization\",\n        \"Ecommerce UX\"\n      ],\n      \"sameAs\": [\n        \"https://www.linkedin.com/in/saif-ali-094034279/\",\n        \"https://dribbble.com/saifalimughal32\",\n        \"https://github.com/saifalimughal32\",\n        \"https://www.pinterest.com/saifalimughal32/\",\n        \"https://www.trustpilot.com/review/saifali.site\"\n      ]\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"https://www.saifali.site/#website\",\n      \"url\": \"https://www.saifali.site/\",\n      \"name\": \"Saif Ali \\u2014 Ecommerce Growth Consultant\",\n      \"publisher\": {\n        \"@id\": \"https://www.saifali.site/#person\"\n      }\n    }\n  ]\n}" }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
