import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description: standardPages["case-studies"].description,
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return <StandardPage page={standardPages["case-studies"]} />;
}
