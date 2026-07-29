import { IndustriesExperiencePage } from "@/components/pages/industries-experience-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Industries",
  description: standardPages.industries.description,
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesExperiencePage />;
}
