import * as React from "react";

import { cn } from "@/src/lib/utils";

type StatProps = React.HTMLAttributes<HTMLDivElement> & {
  value: React.ReactNode;
  label: React.ReactNode;
  helperText?: React.ReactNode;
};

export function Stat({ value, label, helperText, className, ...props }: StatProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      <p className="text-3xl font-semibold leading-none text-foreground sm:text-4xl">
        {value}
      </p>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      {helperText ? (
        <p className="text-xs leading-5 text-muted-foreground">{helperText}</p>
      ) : null}
    </div>
  );
}
