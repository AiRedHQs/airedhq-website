import * as React from "react";

import { cn } from "@/src/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const headingSizes: Record<HeadingLevel, string> = {
  1: "text-4xl sm:text-5xl lg:text-6xl",
  2: "text-3xl sm:text-4xl lg:text-5xl",
  3: "text-2xl sm:text-3xl",
  4: "text-xl sm:text-2xl",
  5: "text-lg sm:text-xl",
  6: "text-base sm:text-lg",
};

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
};

export function Heading({ level = 2, className, ...props }: HeadingProps) {
  const Comp = `h${level}` as React.ElementType;

  return (
    <Comp
      className={cn(
        "text-balance font-semibold leading-tight tracking-normal text-foreground",
        headingSizes[level],
        className,
      )}
      {...props}
    />
  );
}
