import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages["ui-ux"];

export const metadata = createMetadata({
  title: "UI/UX Design",
  description:
    "Research-driven interfaces, design systems and delightful user experiences. From discovery and wireframes to production design systems.",
  path: "/solutions/ui-ux",
});

export default function UIUXPage() {
  return <ServiceLandingPage page={page} />;
}
