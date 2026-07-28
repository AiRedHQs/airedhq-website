import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";
import { TrustCard } from "@/components/shared/trust-card";
import { innovationConcepts } from "@/data/trust";

export function InnovationLabSection() {
  return (
    <section
      id="innovation-lab"
      aria-labelledby="innovation-lab-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute left-1/2 top-0 -z-10 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-product-hiared/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
            Innovation Lab
          </Badge>
          <div className="space-y-4">
            <h2
              id="innovation-lab-heading"
              className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Always Building What&apos;s Next
            </h2>
            <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              AiRedHQ continuously experiments with AI, immersive technologies and new
              product ideas that shape tomorrow&apos;s digital experiences.
            </p>
          </div>
        </div>

        <MotionRevealGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {innovationConcepts.map((concept) => (
            <MotionRevealItem key={concept.title}>
              <TrustCard
                title={concept.title}
                description={concept.description}
                icon={concept.icon}
              />
            </MotionRevealItem>
          ))}
        </MotionRevealGroup>
      </Container>
    </section>
  );
}
