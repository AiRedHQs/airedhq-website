import { ContentSection } from "@/components/shared/content-section";
import { FAQSection } from "@/components/shared/faq-section";
import { PageCTA } from "@/components/shared/page-cta";
import { PageHero } from "@/components/shared/page-hero";
import type { PageContent } from "@/data/site-pages";

export function ServiceLandingPage({
  page,
}: {
  page: PageContent & { faqs: Array<{ question: string; answer: string }> };
}) {
  return (
    <>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: page.title }]}
      />
      {page.sections.map((section) => (
        <ContentSection
          key={section.title}
          title={section.title}
          description={section.description}
          blocks={section.blocks}
        />
      ))}
      <FAQSection faqs={page.faqs} />
      <PageCTA title={`Explore ${page.title} with AiRedHQ.`} />
    </>
  );
}
