import * as React from "react";

import { cn } from "@/src/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article";
  bleed?: boolean;
};

export function Section({
  as: Comp = "section",
  bleed = false,
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-24",
        bleed ? "" : "px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
