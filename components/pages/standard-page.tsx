import { ContentSection } from "@/components/shared/content-section";
import { PageCTA } from "@/components/shared/page-cta";
import { PageHero } from "@/components/shared/page-hero";
import type { PageContent } from "@/data/site-pages";

export function StandardPage({ page, cta = true }: { page: PageContent; cta?: boolean }) {
  return (
    <>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
        breadcrumbs={[{ label: page.title }]}
      />
      {page.sections.map((section) => (
        <ContentSection
          key={section.title}
          title={section.title}
          description={section.description}
          blocks={section.blocks}
        />
      ))}
      {cta ? <PageCTA /> : null}
    </>
  );
}
