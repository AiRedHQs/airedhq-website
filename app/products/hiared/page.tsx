import HiARedProductExperience from "@/components/pages/products/hiared-product-experience";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "hiARed",
  description:
    "An AI Recruitment Ecosystem for recruiters, hiring managers, candidates and administrators. Structured screening, scheduling and transparent candidate feedback.",
  path: "/products/hiared",
});

export default function HiARedPage() {
  return <HiARedProductExperience />;
}
