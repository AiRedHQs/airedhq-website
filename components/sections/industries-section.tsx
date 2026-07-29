import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { TrustCard } from "@/components/shared/trust-card";
import { industries } from "@/data/trust";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-24">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Industries We Transform
            </Badge>
            <h2
              id="industries-heading"
              className="max-w-xl text-balance text-4xl font-semibold leading-[1] text-foreground sm:text-5xl lg:text-6xl"
            >
              Building Digital Products Across Industries
            </h2>
            <p className="max-w-md text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
              Our engineering expertise spans startups, enterprises, education,
              healthcare, government and emerging technologies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <TrustCard
                key={industry.title}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                className={[
                  "p-5",
                  index % 3 === 0 ? "sm:min-h-52" : "sm:min-h-36",
                  index === 0 || index === 7 ? "sm:col-span-2" : "",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
