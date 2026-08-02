import * as React from "react";

import { cn } from "@/src/lib/utils";

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto min-w-0 w-full max-w-7xl px-4 min-[390px]:px-5 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    />
  );
}
