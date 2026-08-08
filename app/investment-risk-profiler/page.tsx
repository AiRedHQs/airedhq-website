import type { Metadata } from "next";
import Hero from "@/components/investment-risk-profiler/Hero";
import WhyThisMatters from "@/components/investment-risk-profiler/WhyThisMatters";
import HowItWorks from "@/components/investment-risk-profiler/HowItWorks";
import Assessment from "@/components/investment-risk-profiler/Assessment";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Investment Risk Profiler",
  description:
    "Assess investment risk capacity, behaviour and time horizon, then explore an educational equity, debt and gold allocation with transparent assumptions.",
  path: "/investment-risk-profiler",
});

export default function InvestmentRiskProfilerPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <WhyThisMatters />
      <HowItWorks />
      <Assessment />
    </main>
  );
}
