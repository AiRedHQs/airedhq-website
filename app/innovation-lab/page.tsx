import { InnovationLabExperiencePage } from "@/components/pages/innovation-lab-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Innovation Lab",
  description: "Explore AiRedHQ experiments in practical AI, developer tools, learning technology, automation and immersive products.",
  path: "/innovation-lab",
});

export default function InnovationLabPage() {
  return <InnovationLabExperiencePage />;
}
