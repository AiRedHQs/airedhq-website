import { ServiceExperiencePage } from "@/components/pages/service-experience-page";
import type { PageContent } from "@/data/site-pages";

export function ServiceLandingPage({
  page,
}: {
  page: PageContent & { faqs: Array<{ question: string; answer: string }> };
}) {
  return <ServiceExperiencePage page={page} />;
}
