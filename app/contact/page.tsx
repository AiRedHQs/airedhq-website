import { ContactExperiencePage } from "@/components/pages/contact-experience-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Contact AiRedHQ",
  description:
    "Tell AiRedHQ about the product, platform, operating problem or technology partnership you want to move forward.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactExperiencePage />;
}
