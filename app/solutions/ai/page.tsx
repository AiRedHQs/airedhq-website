import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.ai;

export const metadata = createMetadata({
  title: "AI Services",
  description: page.description,
  path: "/solutions/ai",
});

export default function AIServicesPage() {
  return <ServiceLandingPage page={page} />;
}
