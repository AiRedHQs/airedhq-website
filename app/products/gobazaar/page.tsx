import { ProductLandingPage } from "@/components/pages/product-page";
import { productPages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = productPages.gobazaar;

export const metadata = createMetadata({
  title: "GoBazaar",
  description: page.description,
  path: "/products/gobazaar",
});

export default function GoBazaarPage() {
  return <ProductLandingPage page={page} />;
}
