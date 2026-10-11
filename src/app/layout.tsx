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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
