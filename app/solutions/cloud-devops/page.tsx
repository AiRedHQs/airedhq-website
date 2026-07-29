import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.cloud;

export const metadata = createMetadata({
  title: "Cloud & DevOps",
  description: page.description,
  path: "/solutions/cloud-devops",
});

export default function CloudDevOpsPage() {
  return <ServiceLandingPage page={page} />;
}
