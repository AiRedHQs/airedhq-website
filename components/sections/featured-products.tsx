import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FeaturedProductGrid } from "@/components/products/featured-product-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      aria-labelledby="featured-products-heading"
      className="relative overflow-hidden border-t border-border/60 py-20 sm:py-24 lg:py-28"
    >
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />
      <Container className="space-y-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Featured Products
            </Badge>
            <div className="space-y-4">
              <h2
                id="featured-products-heading"
                className="max-w-3xl text-balance text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
              >
                Products are how AiRedHQ proves its engineering.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-lg">
                Before services, AiRedHQ builds and improves its own product ecosystem,
                turning practical AI, local discovery and financial planning into
                real-world platforms.
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/products" aria-label="Explore all AiRedHQ products">
                Explore Products
                <ArrowRight
                  className="transition-transform duration-premium group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>

        <FeaturedProductGrid products={featuredProducts} />
      </Container>
    </section>
  );
}
