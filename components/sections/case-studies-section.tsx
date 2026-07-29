import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { CaseStudyCard } from "@/components/products/case-study-card";
import { caseStudyPreviews } from "@/data/trust";

export function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute left-1/2 top-20 -z-10 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-primary/6 blur-3xl"
        aria-hidden="true"
      />
      <Container className="space-y-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div className="space-y-5">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Case Studies
            </Badge>
            <h2
              id="case-studies-heading"
              className="max-w-4xl text-balance text-4xl font-semibold leading-[1] text-foreground sm:text-5xl lg:text-6xl"
            >
              Proof, documented with restraint.
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-7 text-muted-foreground lg:justify-self-end">
            No inflated numbers. No invented testimonials. Case studies are prepared as
            honest product narratives.
          </p>
        </div>

        <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div
            className="absolute left-[57%] top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />
          {caseStudyPreviews.map((study, index) => (
            <CaseStudyCard
              key={study.name}
              study={study}
              className={[
                index === 0 ? "lg:min-h-80" : "lg:min-h-44",
                index === 2 ? "lg:col-start-2" : "",
              ].join(" ")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
