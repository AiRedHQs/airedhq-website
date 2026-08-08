import { CareersExperiencePage } from "@/components/pages/careers-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Explore product, design, engineering and applied AI careers at AiRedHQ. See open roles, our hiring process and how we work.",
  path: "/careers",
});

export default function CareersPage() {
  return <CareersExperiencePage />;
}
