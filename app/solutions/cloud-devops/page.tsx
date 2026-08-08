import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.cloud;

export const metadata = createMetadata({
  title: "Cloud & DevOps",
  description:
    "Cloud-native architecture, CI/CD pipelines, monitoring and infrastructure automation. Reduce deploy risk and cost with automated, observable infrastructure.",
  path: "/solutions/cloud-devops",
});

export default function CloudDevOpsPage() {
  return <ServiceLandingPage page={page} />;
}
