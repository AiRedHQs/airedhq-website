import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.web;

export const metadata = createMetadata({
  title: "Web Application Development",
  description:
    "Scalable SaaS platforms, dashboards, portals and enterprise software engineered for growth. Built with modern frameworks and a measurable delivery process.",
  path: "/solutions/web-development",
});

export default function WebDevelopmentPage() {
  return <ServiceLandingPage page={page} />;
}
