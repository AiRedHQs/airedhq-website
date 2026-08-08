import { LegalPage } from "@/components/pages/legal-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "Terms governing access to and use of the AiRedHQ corporate website. Read the acceptable-use, liability and IP terms in full.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      label="Terms · Effective 8 August 2026"
      title="Terms for using this website."
      introduction="These terms describe the rules for using the AiRedHQ corporate website. They do not replace product-specific agreements, statements of work or privacy notices."
      sections={[
        {
          title: "Website purpose",
          paragraphs: [
            "The website provides general information about AiRedHQ, its products, capabilities, research direction and ways to make contact. Content is informational and does not create a professional, employment or commercial relationship.",
          ],
        },
        {
          title: "Acceptable use",
          items: [
            "Do not attempt to disrupt, probe or gain unauthorized access to the website or connected systems.",
            "Do not use automated means that unreasonably burden the service.",
            "Do not submit unlawful, harmful, deceptive or infringing content through website forms.",
          ],
        },
        {
          title: "Intellectual property",
          paragraphs: [
            "Unless stated otherwise, website copy, design, software, product names, logos and visual assets are owned by AiRedHQ or used with permission. Access to the site does not grant a license to reuse those materials beyond applicable legal exceptions.",
          ],
        },
        {
          title: "Product and service information",
          paragraphs: [
            "Product capabilities, maturity and availability may change as products evolve. Website content is not a binding offer, warranty, roadmap commitment or substitute for a signed agreement.",
          ],
        },
        {
          title: "Third-party links",
          paragraphs: [
            "Links to third-party websites are provided for convenience. AiRedHQ does not control their content, availability, security or privacy practices.",
          ],
        },
        {
          title: "Disclaimers and liability",
          paragraphs: [
            "The website is provided on an as-available basis to the extent permitted by law. AiRedHQ does not warrant that the website will always be uninterrupted, error-free or suitable for a particular purpose.",
          ],
        },
        {
          title: "Changes and governing terms",
          paragraphs: [
            "AiRedHQ may update the website and these terms. Material changes will be reflected on this page with an updated effective date. Questions about these terms can be submitted through the contact page.",
          ],
        },
      ]}
    />
  );
}
