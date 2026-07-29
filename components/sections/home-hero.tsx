import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { HeroVisual } from "@/components/sections/hero-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden">
      <div
        className="animated-gradient-field absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--product-hiared)/0.26),transparent_28rem),radial-gradient(circle_at_82%_12%,hsl(var(--product-gobazaar)/0.2),transparent_30rem),radial-gradient(circle_at_62%_82%,hsl(var(--product-yojiq)/0.13),transparent_34rem)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(var(--border)/0.14)_1px,transparent_1px),linear-gradient(hsl(var(--border)/0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35 [mask-image:radial-gradient(circle_at_50%_28%,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div
        className="surface-noise absolute inset-0 -z-10 opacity-[0.06]"
        aria-hidden="true"
      />
      <p
        className="pointer-events-none absolute -left-6 top-12 -z-10 hidden text-[11rem] font-semibold leading-none text-foreground/[0.035] lg:block"
        aria-hidden="true"
      >
        AiRedHQ
      </p>
      {[...Array(16)].map((_, index) => (
        <span
          key={index}
          className="particle-drift absolute size-1 rounded-full bg-foreground/40"
          style={{
            left: `${6 + ((index * 19) % 88)}%`,
            top: `${12 + ((index * 29) % 76)}%`,
            animationDelay: `${index * 130}ms`,
          }}
          aria-hidden="true"
        />
      ))}
      <Container className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-24 xl:gap-20">
        <div className="max-w-5xl">
          <div className="space-y-8 lg:space-y-10">
            <Badge variant="outline" className="gap-2 bg-background/70 backdrop-blur-xl">
              <Sparkles className="size-3.5 text-product-gobazaar" aria-hidden="true" />
              Product Innovation Company
            </Badge>

            <div className="space-y-7">
              <h1 className="max-w-5xl text-balance text-6xl font-semibold leading-[0.9] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
                We Build Products That Solve Real Problems.
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
                AiRedHQ designs, engineers and scales AI-powered products, immersive
                experiences and modern software platforms. Every solution we offer is
                backed by products we&apos;ve built ourselves.
              </p>
            </div>

            <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 text-xs text-muted-foreground">
              {["Products first", "AI-native", "Built to scale"].map((item) => (
                <div key={item} className="bg-background/70 px-3 py-3 backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Button asChild size="lg" className="group shadow-2xl shadow-black/25">
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

        <div className="lg:translate-y-8">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
