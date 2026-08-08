import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages.mobile;

export const metadata = createMetadata({
  title: "Mobile Application Development",
  description:
    "High-performance Android and iOS applications with seamless user experiences. Native and cross-platform builds, shipped to store and maintained.",
  path: "/solutions/mobile-development",
});

export default function MobileDevelopmentPage() {
  return <ServiceLandingPage page={page} />;
}
