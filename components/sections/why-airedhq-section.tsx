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
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute right-0 top-10 -z-10 size-72 rounded-full bg-product-gobazaar/10 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-border/70 bg-card/42 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10">
          <div
            className="surface-noise absolute inset-0 opacity-[0.05]"
            aria-hidden="true"
          />
          <p
            className="pointer-events-none absolute bottom-4 left-6 text-6xl font-semibold leading-none text-foreground/[0.035] sm:text-8xl"
            aria-hidden="true"
          >
            Proof
          </p>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
                Why AiRedHQ
              </Badge>
              <h2
                id="why-airedhq-heading"
                className="max-w-xl text-balance text-4xl font-semibold leading-[1] text-foreground sm:text-5xl lg:text-6xl"
              >
                Product experience behind every partnership.
              </h2>
            </div>

            <MotionRevealGroup className="grid gap-4 md:grid-cols-2">
              {whyAiRedHQ.map((item, index) => (
                <MotionRevealItem key={item.title}>
                  <TrustCard
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    className={[
                      "border-border/70 bg-background/35 shadow-none",
                      index === 0 ? "md:col-span-2" : "",
                    ].join(" ")}
                  />
                </MotionRevealItem>
              ))}
            </MotionRevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
