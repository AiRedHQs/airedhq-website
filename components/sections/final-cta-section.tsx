import Link from "next/link";
import { CalendarDays, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MotionRevealGroup, MotionRevealItem } from "@/components/shared/motion-reveal";

export function FinalCTASection() {
  return (
    <section
      id="start-a-project"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-t border-border/60 py-24 sm:py-28 lg:py-36"
    >
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-border bg-card/70 px-5 py-20 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-8 lg:px-16 lg:py-28">
          <div
            className="surface-noise absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
          />
          <div
            className="animated-gradient-field absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--product-hiared)/0.22),transparent_22rem),radial-gradient(circle_at_80%_20%,hsl(var(--product-gobazaar)/0.18),transparent_24rem),radial-gradient(circle_at_50%_90%,hsl(var(--product-yojiq)/0.12),transparent_22rem)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--border)/0.18)_1px,transparent_1px),linear-gradient(hsl(var(--border)/0.18)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40"
            aria-hidden="true"
          />
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className="particle-drift absolute size-1 rounded-full bg-foreground/35"
              style={{
                left: `${8 + ((index * 13) % 84)}%`,
                top: `${10 + ((index * 19) % 72)}%`,
                animationDelay: `${index * 180}ms`,
              }}
              aria-hidden="true"
            />
          ))}

          <MotionRevealGroup className="relative mx-auto max-w-5xl text-center">
            <MotionRevealItem>
              <div className="space-y-7">
                <div className="mx-auto flex size-12 items-center justify-center rounded-lg border border-border bg-background/70 text-foreground">
                  <Rocket className="size-5" aria-hidden="true" />
                </div>
                <h2
                  id="final-cta-heading"
                  className="text-balance text-5xl font-semibold leading-[0.92] text-foreground sm:text-6xl lg:text-8xl"
                >
                  Ready to Build Something Extraordinary?
                </h2>
                <p className="mx-auto max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
                  Whether you&apos;re launching a startup, transforming an enterprise, or
                  building the next AI-powered product, AiRedHQ is ready to help.
                </p>
                <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Start a Project</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#contact">
                      Schedule a Discovery Call
                      <CalendarDays aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </MotionRevealItem>
          </MotionRevealGroup>
        </div>
      </Container>
    </section>
  );
}
