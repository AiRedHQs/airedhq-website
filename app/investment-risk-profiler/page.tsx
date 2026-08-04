import Hero from "@/components/investment-risk-profiler/Hero";
import WhyThisMatters from "@/components/investment-risk-profiler/WhyThisMatters";
import HowItWorks from "@/components/investment-risk-profiler/HowItWorks";
import Assessment from "@/components/investment-risk-profiler/Assessment";

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