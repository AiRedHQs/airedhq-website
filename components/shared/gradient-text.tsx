import * as React from "react";

import { cn } from "@/src/lib/utils";

export function GradientText({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary via-product-gobazaar to-product-yojiq bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  );
}
