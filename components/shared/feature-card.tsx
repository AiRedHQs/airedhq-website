import * as React from "react";

import { GlassCard } from "@/components/shared/glass-card";
import { cn } from "@/src/lib/utils";

type FeatureCardProps = React.HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <GlassCard className={cn("space-y-4", className)} {...props}>
      {icon ? (
        <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-foreground">
          {icon}
        </div>
      ) : null}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold leading-7 text-foreground">{title}</h3>
        {description ? (
          <p className="text-sm leading-6 text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </GlassCard>
  );
}
