import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages["ui-ux"];

export const metadata = createMetadata({
  title: "UI/UX Design",
  description: page.description,
  path: "/solutions/ui-ux",
});

export default function UIUXPage() {
  return <ServiceLandingPage page={page} />;
}
