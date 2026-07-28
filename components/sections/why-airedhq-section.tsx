import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";
import { TrustCard } from "@/components/shared/trust-card";
import { whyAiRedHQ } from "@/data/trust";

export function WhyAiRedHQSection() {
  return (
    <section
      id="why-airedhq"
      aria-labelledby="why-airedhq-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute right-0 top-10 -z-10 size-72 rounded-full bg-product-gobazaar/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
            Why AiRedHQ
          </Badge>
          <h2
            id="why-airedhq-heading"
            className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Product experience behind every partnership.
          </h2>
        </div>

        <MotionRevealGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyAiRedHQ.map((item) => (
            <MotionRevealItem key={item.title}>
              <TrustCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </MotionRevealItem>
          ))}
        </MotionRevealGroup>
      </Container>
    </section>
  );
}
