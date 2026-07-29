import HiARedProductExperience from "@/components/pages/products/hiared-product-experience";
import { productPages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = productPages.hiared;

export const metadata = createMetadata({
  title: "hiARed",
  description: page.description,
  path: "/products/hiared",
});

export default function HiARedPage() {
  return <HiARedProductExperience />;
}
