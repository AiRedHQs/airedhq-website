import { createElement } from "react";
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
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute left-0 top-24 -z-10 h-80 w-[48rem] rounded-full bg-product-gobazaar/10 blur-3xl"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute right-0 top-20 -z-10 hidden text-[9rem] font-semibold leading-none text-foreground/[0.035] lg:block"
        aria-hidden="true"
      >
        Build
      </p>
      <Container className="space-y-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div className="space-y-5 lg:pb-3">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Solutions
            </Badge>
            <p className="max-w-sm text-pretty text-sm leading-7 text-muted-foreground">
              We build our own products. We help others build theirs.
            </p>
          </div>
          <div className="space-y-6">
            <h2
              id="solutions-heading"
              className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
            >
              From Idea to Impact.
            </h2>
            <p className="max-w-3xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
              Whether you&apos;re building an AI-powered platform, an immersive AR/VR
              experience, or an enterprise-grade application, our team helps transform
              ideas into scalable digital products.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-lg border border-border/70 bg-card/42 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6 lg:p-8">
            <div
              className="surface-noise absolute inset-0 opacity-[0.05]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-product-gobazaar/10 to-transparent"
              aria-hidden="true"
            />
            <SolutionsGrid solutions={solutions.slice(0, 3)} />
          </div>
          <div className="grid gap-5">
            {solutions.slice(3).map((solution) => {
              return (
                <FeatureCard
                  key={solution.title}
                  title={solution.title}
                  description={solution.description}
                  icon={createElement(solution.icon, {
                    className: "size-5 text-product-gobazaar",
                    "aria-hidden": true,
                  })}
                  className="min-h-32 border-border/70 bg-background/35 p-5 shadow-none backdrop-blur-xl"
                />
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-border/70 bg-background/55 p-5 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h3 className="max-w-md text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
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
