import * as React from "react";
import type { LucideIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/src/lib/utils";

type ServiceCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon?: LucideIcon;
  capabilities?: string[];
  action?: {
    label: string;
    href: string;
  };
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  capabilities = [],
  action,
  className,
  ...props
}: ServiceCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative flex h-full flex-col gap-5 overflow-hidden transition-colors duration-premium",
        className,
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_18rem)] opacity-0 transition-opacity duration-premium group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start gap-4">
        {Icon ? (
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-foreground transition-transform duration-premium group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <Icon className="size-5" />
          </div>
        ) : null}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-7 text-foreground">{title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>

      {capabilities.length > 0 ? (
        <div className="relative mt-auto flex flex-wrap gap-2">
          {capabilities.map((capability) => (
            <Badge key={capability} variant="secondary">
              {capability}
            </Badge>
          ))}
        </div>
      ) : action ? (
        <Button
          asChild
          variant="outline"
          className="relative mt-auto w-fit transition-transform duration-premium group-hover:translate-x-0.5"
        >
          <a href={action.href}>
            {action.label}
            {action.label.toLowerCase() === "learn more" ? (
              <span className="sr-only"> about {title}</span>
            ) : null}
          </a>
        </Button>
      ) : null}
    </GlassCard>
  );
}
