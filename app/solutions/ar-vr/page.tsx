import { ServiceLandingPage } from "@/components/pages/service-page";
import { servicePages } from "@/data/site-pages";
import { createMetadata } from "@/src/lib/seo";

const page = servicePages["ar-vr"];

export const metadata = createMetadata({
  title: "AR/VR",
  description: page.description,
  path: "/solutions/ar-vr",
});

export default function ARVRPage() {
  return <ServiceLandingPage page={page} />;
}
