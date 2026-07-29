import { ProductLandingPage } from "@/components/pages/product-page";
import { productPages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = productPages.yojiq;

export const metadata = createMetadata({
  title: "YojIQ",
  description: page.description,
  path: "/products/yojiq",
});

export default function YojIQPage() {
  return <ProductLandingPage page={page} />;
}
