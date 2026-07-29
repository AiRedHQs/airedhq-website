import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.mobile;

export const metadata = createMetadata({
  title: "Mobile Application Development",
  description: page.description,
  path: "/solutions/mobile-development",
});

export default function MobileDevelopmentPage() {
  return <ServiceLandingPage page={page} />;
}
