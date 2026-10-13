import type { Metadata } from "next";
import { FreeAuditPage } from "@/components/FreeAuditPage";

export const metadata: Metadata = {
  title: "Free Ecommerce Audit | Saif Ali",
  description:
    "Submit your ecommerce problem for a free audit. Get clarity on issues with your Shopify store, CRO, Meta Ads, creatives, landing pages, tracking, or ecommerce growth.",
  alternates: {
    canonical: "https://www.saifali.site/free-audit",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Free Ecommerce Audit | Saif Ali",
    description:
      "Submit your ecommerce problem for a free audit. Get clarity on issues with your Shopify store, CRO, Meta Ads, creatives, landing pages, tracking, or ecommerce growth.",
    url: "https://www.saifali.site/free-audit",
    type: "website",
  },
};

export default function FreeAuditRoute() {
  return <FreeAuditPage />;
}
