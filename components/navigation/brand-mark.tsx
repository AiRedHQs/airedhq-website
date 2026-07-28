import Link from "next/link";

import { siteConfig } from "@/constants/brand";
import { cn } from "@/src/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "group inline-flex items-center gap-3 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      <span
        className="flex size-9 items-center justify-center rounded-md border border-border bg-secondary text-sm font-semibold text-foreground transition-colors duration-premium group-hover:border-primary/40"
        aria-hidden="true"
      >
        AH
      </span>
      <span className="text-sm font-semibold tracking-normal text-foreground">
        {siteConfig.name}
      </span>
    </Link>
  );
}
