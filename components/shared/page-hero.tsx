import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Breadcrumb, type BreadcrumbItem } from "@/components/shared/breadcrumb";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHero({ label, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20 lg:py-24">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_34rem)]"
        aria-hidden="true"
      />
      <Container className="space-y-8">
        <Breadcrumb items={breadcrumbs} />
        <div className="max-w-4xl space-y-5">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
            {label}
          </Badge>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
