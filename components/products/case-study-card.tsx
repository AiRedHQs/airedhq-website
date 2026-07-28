import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProductLogoPlaceholder } from "@/components/navigation/product-logo-placeholder";
import { GlassCard } from "@/components/shared/glass-card";
import type { CaseStudyPreview } from "@/data/trust";
import { cn } from "@/src/lib/utils";

const accentClass: Record<CaseStudyPreview["productId"], string> = {
  hiared: "text-product-hiared",
  gobazaar: "text-product-gobazaar",
  yojiq: "text-product-yojiq",
};

export function CaseStudyCard({ study }: { study: CaseStudyPreview }) {
  return (
    <GlassCard className="group relative h-full overflow-hidden p-6 transition-colors duration-premium hover:border-primary/30">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-premium group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className={cn("text-sm font-medium", accentClass[study.productId])}>
              Case Study
            </p>
            <h3 className="text-xl font-semibold leading-7 text-foreground">
              {study.name}
            </h3>
          </div>
          <ProductLogoPlaceholder
            productId={study.productId}
            label={study.name}
            size="large"
          />
        </div>

        <dl className="grid gap-4 text-sm">
          <div>
            <dt className="font-medium text-foreground">Challenge</dt>
            <dd className="mt-1 text-muted-foreground">{study.challenge}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Solution</dt>
            <dd className="mt-1 text-muted-foreground">{study.solution}</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Outcome</dt>
            <dd className="mt-1 text-muted-foreground">{study.outcome}</dd>
          </div>
        </dl>

        <Link
          href={study.href}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-md text-sm font-medium text-foreground outline-none transition-colors duration-premium hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Learn More
          <ArrowRight
            className="size-4 transition-transform duration-premium group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </GlassCard>
  );
}
