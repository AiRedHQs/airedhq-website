import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.web;

export const metadata = createMetadata({
  title: "Web Development",
  description: page.description,
  path: "/solutions/web-development",
});

export default function WebDevelopmentPage() {
  return <ServiceLandingPage page={page} />;
}
