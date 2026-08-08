import { LegalPage } from "@/components/pages/legal-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How AiRedHQ handles website inquiries, technical data and privacy choices. What we collect, why, how long we keep it and your choices.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Privacy · Effective 8 August 2026"
      title="Privacy should be understandable."
      introduction="This page explains how the AiRedHQ corporate website handles information. Product-specific privacy notices may differ where a product collects or processes additional information."
      sections={[
        {
          title: "Information you provide",
          paragraphs: [
            "When you submit an inquiry, the website may collect the information entered in the form, such as your name, email address, company, phone number, inquiry type, project context and message.",
          ],
        },
        {
          title: "Technical information",
          paragraphs: [
            "Cloudflare provides website hosting and security and may process limited technical information such as IP address, browser type and device information. Google Analytics and Google Tag Manager may process referring-page and website-usage events when configured.",
          ],
        },
        {
          title: "How information is used",
          items: [
            "Respond to business, project, partnership and career inquiries.",
            "Operate, secure and improve the website.",
            "Understand aggregate website performance and improve navigation, content and services.",
            "Meet applicable legal or security obligations.",
          ],
        },
        {
          title: "Sharing and service providers",
          paragraphs: [
            "AiRedHQ may share information with service providers needed to host, secure, measure or operate the website, including Cloudflare and configured Google services, or when disclosure is legally required. These providers process information under their own terms and privacy commitments.",
          ],
        },
        {
          title: "Retention and security",
          paragraphs: [
            "Inquiry and technical data is retained only as long as reasonably required for the relevant purpose, legal obligation or security need. Reasonable safeguards are used, but no internet service can guarantee absolute security.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "Depending on applicable law, you may have rights to request access, correction or deletion of personal information. You can submit a privacy request through the contact page.",
          ],
        },
        {
          title: "Cookies and changes",
          paragraphs: [
            "Analytics services may use cookies or similar technologies. Google AdSense is limited to blog and calculator pages and may use cookies when advertising is enabled. Available consent and advertising choices are presented through the configured Google consent controls. Material changes to this notice will be reflected here with an updated effective date.",
          ],
        },
      ]}
    />
  );
}
