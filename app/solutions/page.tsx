import { SolutionsOverviewPage } from "@/components/pages/solutions-overview-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Product Development Solutions",
  description:
    "Product-backed AI, web, mobile, UI/UX, AR/VR and cloud engineering solutions from AiRedHQ.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsOverviewPage />;
}
