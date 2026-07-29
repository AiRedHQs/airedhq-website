import { ContactSection } from "@/components/sections/contact-section";
import { PageHero } from "@/components/shared/page-hero";
import { createMetadata } from "@/src/lib/seo";
import { standardPages } from "@/data/standard-pages";

export const metadata = createMetadata({
  title: "Contact",
  description: standardPages.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title={standardPages.contact.title}
        description={standardPages.contact.description}
        breadcrumbs={[{ label: "Contact" }]}
      />
      <ContactSection />
    </>
  );
}
