import * as React from "react";

import { cn } from "@/src/lib/utils";

export function GlassCard({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card/70 p-5 text-card-foreground shadow-sm backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
