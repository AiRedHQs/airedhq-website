import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Products",
  description: standardPages.products.description,
  path: "/products",
});

export default function ProductsPage() {
  return <StandardPage page={standardPages.products} />;
}
