import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Solutions",
  description: standardPages.solutions.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return <StandardPage page={standardPages.solutions} />;
}
