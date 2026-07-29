import { CareersExperiencePage } from "@/components/pages/careers-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description: "Explore product, design, engineering and applied AI careers at AiRedHQ.",
  path: "/careers",
});

export default function CareersPage() {
  return <CareersExperiencePage />;
}
