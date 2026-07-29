import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { TrustCard } from "@/components/shared/trust-card";
import { innovationConcepts } from "@/data/trust";

export function InnovationLabSection() {
  return (
    <section
      id="innovation-lab"
      aria-labelledby="innovation-lab-heading"
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute left-1/2 top-0 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-product-hiared/10 blur-3xl"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute left-1/2 top-24 -z-10 hidden -translate-x-1/2 text-[10rem] font-semibold leading-none text-foreground/[0.035] lg:block"
        aria-hidden="true"
      >
        LAB
      </p>
      <Container className="space-y-10">
        <div className="mx-auto max-w-5xl space-y-6 text-center">
          <div className="flex justify-center">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Innovation Lab
            </Badge>
          </div>
          <h2
            id="innovation-lab-heading"
            className="text-balance text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
          >
            Always Building What&apos;s Next
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
            AiRedHQ continuously experiments with AI, immersive technologies and new
            product ideas that shape tomorrow&apos;s digital experiences.
          </p>
        </div>

        <div className="surface-noise grid gap-4 rounded-lg border border-border/60 bg-background/35 p-3 backdrop-blur-xl md:grid-cols-3 md:p-4">
          {innovationConcepts.map((concept, index) => (
            <TrustCard
              key={concept.title}
              title={concept.title}
              description={concept.description}
              icon={concept.icon}
              className={[
                "bg-background/35",
                index === 0 || index === 5 ? "md:col-span-2" : "",
                index === 2 ? "md:row-span-2" : "",
              ].join(" ")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
