import { CheckCircle2 } from "lucide-react";

import { SolutionsGrid } from "@/components/services/solutions-grid";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { FeatureCard } from "@/components/shared/feature-card";
import { solutionHighlights, solutions } from "@/data/solutions";

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute left-1/2 top-16 -z-10 h-64 w-[44rem] -translate-x-1/2 rounded-full bg-primary/6 blur-3xl"
        aria-hidden="true"
      />
      <Container className="space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Solutions
            </Badge>
            <div className="space-y-4">
              <h2
                id="solutions-heading"
                className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                From Idea to Impact.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                Whether you&apos;re building an AI-powered platform, an immersive AR/VR
                experience, or an enterprise-grade application, our team helps transform
                ideas into scalable digital products.
              </p>
            </div>
          </div>
          <p className="max-w-xl text-pretty text-sm leading-7 text-muted-foreground lg:justify-self-end">
            We build our own products. We help others build theirs.
          </p>
        </div>

        <SolutionsGrid solutions={solutions} />

        <div className="rounded-lg border border-border bg-card/50 p-5 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr] lg:items-start">
            <div>
              <h3 className="text-2xl font-semibold leading-tight text-foreground">
                Why Companies Choose AiRedHQ
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {solutionHighlights.map((highlight) => (
                <FeatureCard
                  key={highlight.title}
                  title={highlight.title}
                  description={highlight.description}
                  icon={
                    <CheckCircle2
                      className="size-5 text-product-gobazaar"
                      aria-hidden="true"
                    />
                  }
                  className="border-border/70 bg-background/35 p-4 shadow-none"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
