import { StandardPage } from "@/components/pages/standard-page";
import { standardPages } from "@/data/standard-pages";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: standardPages.privacy.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <StandardPage page={standardPages.privacy} cta={false} />;
}
