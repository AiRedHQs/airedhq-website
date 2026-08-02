import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductExperienceVisual } from "@/components/sections/product-experience-visual";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { featuredProducts } from "@/data/products";

const productAccentClass = {
  hiared: "text-product-hiared",
  gobazaar: "text-product-gobazaar",
  yojiq: "text-product-yojiq",
} as const;

export function FeaturedProducts() {
  return (
    <section
      id="featured-products"
      aria-labelledby="featured-products-heading"
      className="relative overflow-hidden border-t border-border/60 py-16 sm:py-20 lg:py-24"
    >
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-24 -z-10 h-80 w-[54rem] -translate-x-1/2 rounded-full bg-product-hiared/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="space-y-10 lg:space-y-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="space-y-6">
            <Badge variant="outline" className="bg-background/70 backdrop-blur-xl">
              Featured Products
            </Badge>
            <div className="space-y-4">
              <h2
                id="featured-products-heading"
                className="max-w-4xl text-balance text-4xl font-semibold leading-[0.98] text-foreground sm:text-5xl lg:text-7xl"
              >
                Products are the proof.
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-muted-foreground sm:text-xl">
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

        <div className="space-y-6 lg:space-y-8">
          {featuredProducts.map((product, index) => (
            <article
              key={product.id}
              className="relative overflow-hidden rounded-lg border border-border/70 bg-card/36 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl transition-colors duration-premium hover:border-primary/30 sm:p-7 lg:p-8"
            >
              <div
                className={[
                  "absolute inset-0 -z-10 opacity-70",
                  product.id === "hiared"
                    ? "bg-[radial-gradient(circle_at_20%_20%,hsl(var(--product-hiared)/0.2),transparent_28rem)]"
                    : "",
                  product.id === "gobazaar"
                    ? "bg-[radial-gradient(circle_at_80%_20%,hsl(var(--product-gobazaar)/0.2),transparent_28rem)]"
                    : "",
                  product.id === "yojiq"
                    ? "bg-[radial-gradient(circle_at_50%_85%,hsl(var(--product-yojiq)/0.18),transparent_28rem)]"
                    : "",
                ].join(" ")}
                aria-hidden="true"
              />
              <div
                className={[
                  "grid gap-6 lg:items-center",
                  index % 2 === 0
                    ? "lg:grid-cols-[0.8fr_1.2fr]"
                    : "lg:grid-cols-[1.2fr_0.8fr]",
                ].join(" ")}
              >
                <div
                  className={["space-y-5", index % 2 === 1 ? "lg:order-2" : ""].join(" ")}
                >
                  <div className="space-y-3">
                    <p
                      className={`text-sm font-medium uppercase tracking-wider ${productAccentClass[product.id]}`}
                    >
                      {product.tagline}
                    </p>
                    <h3 className="text-balance text-4xl font-semibold leading-none text-foreground sm:text-5xl">
                      {product.name}
                    </h3>
                  </div>
                  <p className="max-w-xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
                    {product.description}
                  </p>
                  <Button asChild variant="outline" size="lg" className="group">
                    <Link href={product.href}>
                      Explore {product.name}
                      <ArrowRight
                        className="transition-transform duration-premium group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </div>
                <ProductExperienceVisual product={product} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
