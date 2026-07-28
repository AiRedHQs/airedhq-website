import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { HeroVisual } from "@/components/sections/hero-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--brand-airedhq)/0.12),transparent_32rem)]"
        aria-hidden="true"
      />
      <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:py-28 xl:gap-16">
        <div className="max-w-3xl">
          <div className="space-y-7">
            <Badge variant="outline" className="gap-2 bg-background/70 backdrop-blur-xl">
              <Sparkles className="size-3.5 text-product-gobazaar" aria-hidden="true" />
              Product Innovation Company
            </Badge>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                We Build Products That Solve Real Problems.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                AiRedHQ designs, engineers and scales AI-powered products, immersive
                experiences and modern software platforms. Every solution we offer is
                backed by products we&apos;ve built ourselves.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Explore Products
                  <ArrowRight
                    className="transition-transform duration-premium group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
