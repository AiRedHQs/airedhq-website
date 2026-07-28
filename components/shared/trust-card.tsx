import type { LucideIcon } from "lucide-react";

import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/src/lib/utils";

type TrustCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function TrustCard({ title, description, icon: Icon, className }: TrustCardProps) {
  return (
    <GlassCard
      className={cn(
        "group relative h-full overflow-hidden p-5 transition-colors duration-premium hover:border-primary/30 focus-within:border-primary/40",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.12),transparent_16rem)] opacity-0 transition-opacity duration-premium group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative space-y-4">
        <div
          className="flex size-11 items-center justify-center rounded-md border border-border bg-secondary text-foreground transition-transform duration-premium group-hover:-translate-y-0.5"
          aria-hidden="true"
        >
          <Icon className="size-5" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold leading-7 text-foreground">{title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        </div>
      </div>
    </GlassCard>
  );
}
