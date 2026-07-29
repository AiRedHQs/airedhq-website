import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: standardPages.terms.description,
  path: "/terms",
});

export default function TermsPage() {
  return <StandardPage page={standardPages.terms} cta={false} />;
}
