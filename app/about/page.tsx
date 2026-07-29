import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: standardPages.about.description,
  path: "/about",
});

export default function AboutPage() {
  return <StandardPage page={standardPages.about} />;
}
