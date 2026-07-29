import { PageHero } from "@/components/shared/page-hero";
import { ContentSection } from "@/components/shared/content-section";
import { FAQSection } from "@/components/shared/faq-section";
import { PageCTA } from "@/components/shared/page-cta";
import { ProductLogoPlaceholder } from "@/components/navigation/product-logo-placeholder";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/shared/glass-card";
import type { ProductPageContent } from "@/data/site-pages";

export function ProductLandingPage({ page }: { page: ProductPageContent }) {
  return (
    <>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: page.title }]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <GlassCard className="flex items-center gap-4 p-6">
            <ProductLogoPlaceholder
              productId={page.productId}
              label={page.title}
              size="large"
            />
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Screenshots placeholder
              </h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Future-ready space for approved product visuals and interface previews.
              </p>
            </div>
          </GlassCard>
        </Container>
      </section>
      {page.sections.map((section) => (
        <ContentSection
          key={section.title}
          title={section.title}
          description={section.description}
          blocks={section.blocks}
        />
      ))}
      <FAQSection faqs={page.faqs} />
      <PageCTA title={`Build with ${page.title} thinking.`} />
    </>
  );
}
