import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/airedhq/Logo 2X1 Transparent.png"
        alt={siteConfig.name}
        width={260}
        height={130}
        priority
        className="h-10 w-auto object-contain md:h-12"
      />
    </Link>
  );
}
