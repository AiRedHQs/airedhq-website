import { LegalPage } from "@/components/pages/legal-page";
import { createMetadata } from "@/src/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "How AiRedHQ handles website inquiries, technical data and privacy choices.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Privacy · Version 1 operational draft"
      title="Privacy should be understandable."
      introduction="This page explains the intended privacy practices for the AiRedHQ corporate website. Product-specific privacy notices may differ and should be published with each product."
      sections={[
        {
          title: "Information you provide",
          paragraphs: ["When you submit an inquiry, the website may collect the information entered in the form, such as your name, email address, company, phone number, inquiry type, project context and message."],
        },
        {
          title: "Technical information",
          paragraphs: ["Hosting, security and analytics services may process limited technical information such as IP address, browser type, device information, referring page and basic usage events. Production analytics must be documented here before activation."],
        },
        {
          title: "How information is used",
          items: [
            "Respond to business, project, partnership and career inquiries.",
            "Operate, secure and improve the website.",
            "Understand aggregate website performance when approved analytics are enabled.",
            "Meet applicable legal or security obligations.",
          ],
        },
        {
          title: "Sharing and service providers",
          paragraphs: ["AiRedHQ should share information only with approved service providers needed to host, secure or operate the website, or when disclosure is legally required. A production vendor list and processing terms should be reviewed before launch."],
        },
        {
          title: "Retention and security",
          paragraphs: ["Inquiry and technical data should be retained only as long as required for the relevant purpose, legal obligation or security need. Reasonable safeguards should be used, but no internet service can guarantee absolute security."],
        },
        {
          title: "Your choices",
          paragraphs: ["Depending on applicable law, you may have rights to request access, correction or deletion of personal information. A verified privacy contact channel must be added before production launch."],
        },
        {
          title: "Cookies and changes",
          paragraphs: ["The site should not enable non-essential cookies until consent controls and an accurate vendor inventory are configured. Material changes to this notice should be reflected on this page with an updated effective date."],
        },
      ]}
    />
  );
}
