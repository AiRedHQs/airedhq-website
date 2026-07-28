import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";
import { TrustCard } from "@/components/shared/trust-card";
import { industries } from "@/data/trust";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-5">
          <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
            Industries We Transform
          </Badge>
          <div className="space-y-4">
            <h2
              id="industries-heading"
              className="text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Building Digital Products Across Industries
            </h2>
            <p className="text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              Our engineering expertise spans startups, enterprises, education,
              healthcare, government and emerging technologies.
            </p>
          </div>
        </div>

        <MotionRevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <MotionRevealItem key={industry.title}>
              <TrustCard
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
              />
            </MotionRevealItem>
          ))}
        </MotionRevealGroup>
      </Container>
    </section>
  );
}
