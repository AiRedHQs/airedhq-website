import { ProductsExperiencePage } from "@/components/pages/products-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description:
    "Explore AiRedHQ products: hiARed for transparent recruitment, GoBazaar for hyperlocal discovery and YojIQ for privacy-first financial planning.",
  path: "/products",
});

export default function ProductsPage() {
  return <ProductsExperiencePage />;
}
