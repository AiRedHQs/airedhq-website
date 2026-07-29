import GoBazaarProductExperience from "@/components/pages/products/gobazaar-product-experience";
import { productPages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = productPages.gobazaar;

export const metadata = createMetadata({
  title: "GoBazaar",
  description: page.description,
  path: "/products/gobazaar",
});

export default function GoBazaarPage() {
  return <GoBazaarProductExperience />;
}
