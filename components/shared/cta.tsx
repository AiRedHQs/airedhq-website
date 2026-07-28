import * as React from "react";

import { Button, type ButtonProps } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

type CTAProps = ButtonProps & {
  icon?: React.ReactNode;
};

export function CTA({ icon, children, className, ...props }: CTAProps) {
  return (
    <Button className={cn("min-w-36", className)} {...props}>
      {children}
      {icon}
    </Button>
  );
}
