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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Person\",\n      \"@id\": \"https://www.saifali.site/#person\",\n      \"name\": \"Saif Ali\",\n      \"url\": \"https://www.saifali.site/\",\n      \"jobTitle\": \"Ecommerce Growth Consultant for DTC Brands\",\n      \"description\": \"Ecommerce growth consultant helping DTC brands turn ad clicks into customers \\u2014 full-journey CRO across Meta ads, landing pages and Shopify.\",\n      \"knowsAbout\": [\n        \"Conversion Rate Optimization\",\n        \"Shopify\",\n        \"Ecommerce\",\n        \"Meta Ads\",\n        \"Landing Page Optimization\",\n        \"Ecommerce UX\"\n      ],\n      \"sameAs\": [\n        \"https://www.linkedin.com/in/saif-ali-094034279/\",\n        \"https://dribbble.com/saifalimughal32\",\n        \"https://github.com/saifalimughal32\",\n        \"https://www.pinterest.com/saifalimughal32/\"\n      ]\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"https://www.saifali.site/#website\",\n      \"url\": \"https://www.saifali.site/\",\n      \"name\": \"Saif Ali \\u2014 Ecommerce Growth Consultant\",\n      \"publisher\": {\n        \"@id\": \"https://www.saifali.site/#person\"\n      }\n    }\n  ]\n}" }}
        />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
