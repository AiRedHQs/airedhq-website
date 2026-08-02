import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";
import { ProductLogoPlaceholder } from "@/components/navigation/product-logo-placeholder";
import { cn } from "@/src/lib/utils";
import type { ProductId } from "@/src/types/brand";

type ProductCardProps = React.HTMLAttributes<HTMLDivElement> & {
  productId: ProductId;
  name: string;
  tagline: string;
  description: string;
  capabilities?: string[];
  icon?: LucideIcon;
  logoSize?: "default" | "large";
  action?: {
    label: string;
    href: string;
  };
};

const productAccentClass: Record<ProductId, string> = {
  hiared: "text-product-hiared",
  gobazaar: "text-product-gobazaar",
  yojiq: "text-product-yojiq",
};

const productAccentGlowClass: Record<ProductId, string> = {
  hiared:
    "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--product-hiared)/0.18),transparent_18rem)]",
  gobazaar:
    "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--product-gobazaar)/0.16),transparent_18rem)]",
  yojiq:
    "bg-[radial-gradient(circle_at_50%_0%,hsl(var(--product-yojiq)/0.14),transparent_18rem)]",
};

export function ProductCard({
  productId,
  name,
  tagline,
  description,
  capabilities = [],
  icon: Icon,
  logoSize = "default",
  action,
  className,
  ...props
}: ProductCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative flex h-full flex-col gap-6 overflow-hidden transition-colors duration-premium",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-premium group-hover:opacity-100",
          productAccentGlowClass[productId],
        )}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className={cn("text-sm font-medium", productAccentClass[productId])}>
            {tagline}
          </p>
          <h3 className="text-xl font-semibold leading-7 text-foreground">{name}</h3>
        </div>
        {Icon ? (
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary",
              productAccentClass[productId],
            )}
            aria-hidden="true"
          >
            <Icon className="size-5" />
          </div>
        ) : (
          <ProductLogoPlaceholder productId={productId} label={name} size={logoSize} />
        )}
      </div>

      <p className="relative text-sm leading-6 text-muted-foreground">{description}</p>

      {capabilities.length > 0 ? (
        <div className="relative flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <Badge key={capability} variant="outline">
              {capability}
            </Badge>
          ))}
        </div>
      ) : null}

      {action ? (
        <Button
          asChild
          variant="outline"
          className="relative mt-auto w-fit transition-transform duration-premium group-hover:translate-x-0.5"
        >
          <a href={action.href}>
            {action.label}
            {action.label.toLowerCase() === "learn more" ? (
              <span className="sr-only"> about {name}</span>
            ) : null}
          </a>
        </Button>
      ) : null}
    </GlassCard>
  );
}
