import { AboutExperiencePage } from "@/components/pages/about-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "About AiRedHQ",
  description:
    "Meet AiRedHQ, a product innovation company building practical AI, immersive experiences and thoughtfully engineered software products.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutExperiencePage />;
}
