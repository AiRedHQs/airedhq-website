import { SolutionsOverviewPage } from "@/components/pages/solutions-overview-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Product Development Solutions",
  description:
    "Product-backed AI, web, mobile, UI/UX, AR/VR and cloud engineering from AiRedHQ. Engineering teams that ship, with proof from our own products.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsOverviewPage />;
}
