import { CaseStudiesExperiencePage } from "@/components/pages/case-studies-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "First-party AiRedHQ product case studies covering explainable recruitment, hyperlocal discovery and privacy-first financial planning.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <CaseStudiesExperiencePage />;
}
