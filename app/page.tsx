import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { HomeHero } from "@/components/sections/home-hero";
import { IndustriesSection } from "@/components/sections/industries-section";
import { InnovationLabSection } from "@/components/sections/innovation-lab-section";
import { SolutionsSection } from "@/components/sections/solutions-section";
import { WhyAiRedHQSection } from "@/components/sections/why-airedhq-section";
import { StructuredData } from "@/components/seo/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeHero />
      <FeaturedProducts />
      <SolutionsSection />
      <IndustriesSection />
      <WhyAiRedHQSection />
      <CaseStudiesSection />
      <InnovationLabSection />
      <FinalCTASection />
      <ContactSection />
    </>
  );
}
