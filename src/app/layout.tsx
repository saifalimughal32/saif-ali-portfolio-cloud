import type { Metadata, Viewport } from "next";
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
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
