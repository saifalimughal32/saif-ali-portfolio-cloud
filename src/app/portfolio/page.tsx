import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.meta.portfolioTitle,
  description: site.meta.portfolioDescription,
};

export default function PortfolioRoute() {
  return <PortfolioPage />;
}
